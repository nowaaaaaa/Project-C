using Microsoft.AspNetCore.Mvc;
using static Backend.Controllers.AuthenticationController;

namespace Backend.Controllers {
  [ApiController]
  [Route("[controller]")]
  public class TicketController : ControllerBase {

    [HttpPost]
    [Route("createTicket")]
    public async Task<IActionResult> CreateTicket(CreateTicketDto data) {
      try {
        if (VerifyToken(data.jwt, out Guid id)) {
          using (var context = new MyContext()) {
            var machine = await context.machines.Where(p => p.id == Guid.Parse(data.machineId)).FirstOrDefaultAsync();

            Guid machId = Guid.NewGuid();
            if (machine != null){
              machId = machine.id;
            }

            Guid ticketId = Guid.NewGuid();
            Guid detailId = Guid.NewGuid();

            TicketDetails ticketd = new TicketDetails();
            ticketd.id = detailId;
            ticketd.ticketId = ticketId;
            ticketd.problem = data.problem;
            ticketd.expected = data.expected;
            ticketd.tried = data.tried;
            ticketd.solution = null;
            ticketd.lastUpdated = DateTime.UtcNow;

            Ticket ticket = new Ticket();
            ticket.id = ticketId;
            ticket.submitterId = id;
            ticket.handlerId = null;
            ticket.machineId = machId;
            ticket.submitDate = DateTime.UtcNow;
            ticket.solved = false;
            ticket.solveDate = null;

            context.ticketDetails.Add(ticketd);
            context.tickets.Add(ticket);
            context.SaveChanges();

            return Ok("Succes");
          }
        }
        else {
          return Unauthorized("Invalid token");
        }
      }
      catch(Exception ex) {
        return BadRequest(ex.Message);
      }
    }

    [HttpPost]
    [Route("getTickets")]
    public async Task<IActionResult> GetTickets(GetTicketsDto data) {
      try {
        if (VerifyToken(data.jwt, out Guid id)) {
          using (var context = new MyContext()) {
            var user = await context.users.Where(p => p.id == id).FirstOrDefaultAsync();
            if (user == null) return BadRequest("User not found");
            var company = await context.companies.Where(p => p.id == user.companyId).FirstOrDefaultAsync();
            if (company == null) return BadRequest("Company not found");
            var tickets = await context.tickets.Where(p => p.submitter.companyId == company.id).ToListAsync();
            var ticketDetails = await context.ticketDetails.Where(p => p.ticket.submitter.companyId == company.id).ToListAsync();

            return Ok(new Tuple<List<Ticket>, List<TicketDetails>>(tickets, ticketDetails));
          }
        }
        else {
          return Unauthorized("Invalid token");
        }
      }
      catch(Exception ex) {
        return BadRequest(ex.Message);
      }
    }
  }
}