using Microsoft.AspNetCore.Mvc;
using static Backend.Controllers.AuthenticationController;

namespace Backend.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class MachinesController : ControllerBase {
        [HttpPost]
        [Route("getAckProblems")]
        public async Task<IActionResult> GetAckProblems(GetAckProblemsDto data) {
            try {
                if (VerifyToken(data.jwt, out Guid id)) {
                    using (var context = new MyContext()) {
                        List<AckProblem> ackProblems = await context.ackProblems.Where(p => p.machineTypeId == Guid.Parse(data.machineTypeId)).ToListAsync();
                        return Ok(ackProblems);
                    }
                } else return Unauthorized("Invalid token");
            }
            catch(Exception ex) {
                return BadRequest(ex.Message);
            }
        }
        [HttpPost]
        [Route("getMachines")]
        public async Task<IActionResult> GetMachines(GetMachinesDto data) {
            try {
                if (VerifyToken(data.jwt, out Guid id)) {
                    using (var context = new MyContext()) {
                        List<Machine> machines = await context.machines.Where(p => p.companyId == Guid.Parse(data.companyId)).OrderBy(p => p.name).ToListAsync();
                        List<MachineToSend> machinesTS = new List<MachineToSend>();
                        string? temp;
                        foreach (var m in machines) {
                            temp =  await context.machineTypes.Where(p => p.id == m.typeId).Select(p => p.name).FirstOrDefaultAsync();
                            machinesTS.Add(new MachineToSend(m, temp!));
                        }
                        return Ok(machinesTS);
                    }
                }
                else return Unauthorized("Invalid token");
            }
            catch(Exception ex) {
                return BadRequest(ex.Message);
            }
        }
    }

    class MachineToSend : Machine {
        public string machineTypeName { get; set; } = null!;
        public MachineToSend(Machine m, string machineTypeName) {
            this.id = m.id;
            this.name = m.name;
            this.type = m.type;
            this.typeId = m.typeId;
            this.company = m.company;
            this.companyId = m.companyId;
            this.machineTypeName = machineTypeName;
        }
    }
}