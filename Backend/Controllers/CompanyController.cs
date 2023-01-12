using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Backend.EF;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CompanyController : ControllerBase {
       
        [HttpPost]
        [Route("getCompanyName")]
        public async Task<IActionResult> GetCompanyName(GetCompanyNameDto data) {
            try {
                using (var context = new MyContext()) {
                    var company = await context.companies.Where(p => p.id == Guid.Parse(data.companyId)).FirstOrDefaultAsync();
                    if (company == null) {
                        return BadRequest("Company not found");
                    }
                    return Ok(company.name);
                }
            }
            catch(Exception ex) {
                return BadRequest(ex.Message);
            }
        }
    }
}