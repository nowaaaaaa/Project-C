using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class MachinesController : ControllerBase {
        [HttpPost]
        [Route("getMachines")]
        public async Task<IActionResult> GetMachines(GetMachinesDto data) {
            try {
                using (var context = new MyContext()) {
                    List<Machines> machines = await context.Machines.Where(p => p.companyId == Guid.Parse(data.companyId)).Select(p => p);
                    /*if (company == null) {
                        return BadRequest("Company not found");
                    }*/
                    
                    return Ok(machines);
                }
            }
            catch(Exception ex) {
                return BadRequest(ex.Message);
            }
        }
        [HttpPost]
        [Route("getAckProblems")]
        public async Task<IActionResult> GetAckProblems(GetAckProblemsDto data) {
            try {
                using (var context = new MyContext()) {
                    List<AckProblems> ackProblems = await context.AckProblems.Where(p => p.machineTypeId == Guid.Parse(data.machineTypeId)).Select(p => p);
                    /*if (company == null) {
                        return BadRequest("Company not found");
                    }*/
                    
                    return Ok(ackProblems);
                }
            }
            catch(Exception ex) {
                return BadRequest(ex.Message);
            }
        }
    }
}