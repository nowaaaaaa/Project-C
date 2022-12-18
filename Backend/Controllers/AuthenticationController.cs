using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers {
  [ApiController]
  [Route("[controller]")]
  public class AuthenticationController : ControllerBase {

    public class LoginInfo {
      public string email { get; set; }
      public string password { get; set; }
    }

    private readonly ILogger<WeatherForecastController> _logger;
    public AuthenticationController(ILogger<WeatherForecastController> logger)
    {
      _logger = logger;
    }

    [HttpPost]
    [Route("login")]
    public IActionResult PostData(LoginInfo data) {
      try {
        System.Console.WriteLine(data.email);

        return Ok("Thank you for traveling with fiti, fabiothomas intercomputer travel incorporated");
      }
      catch(Exception ex) {
        return BadRequest(ex.Message);
      }
      return Ok("Not sure what happened");
    }
  }
}