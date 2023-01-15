using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Backend.EF;

namespace Backend.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class MachinesController : ControllerBase {
        [HttpPost]
        [Route("getMachines")]
        public async Task<IActionResult> GetMachines(GetMachinesDto data) {
            try {
                using (var context = new MyContext()) {
                    List<Machine> machines = await context.machines.Where(p => p.companyId == Guid.Parse(data.companyId)).ToListAsync();
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
                    List<AckProblem> ackProblems = await context.ackProblems.Where(p => p.machineTypeId == Guid.Parse(data.machineTypeId)).ToListAsync();
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

        // static async Task<IEnumerable<T>> WhereAsync<T>(this IEnumerable<T> source, Func<T, Task<bool>> predicate) {
        //     var results = new Queue<T>();
        //     var tasks = source.Select(async x => {
        //         if (await predicate(x)) results.Enqueue(x);
        //     });
        // await Task.WhenAll(tasks);
        // return results;
//          }

    }
}