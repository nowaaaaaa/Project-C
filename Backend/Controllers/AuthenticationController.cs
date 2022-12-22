using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers {
  [ApiController]
  [Route("[controller]")]
  public class AuthenticationController : ControllerBase {

    public class LoginInfo {
      public string email { get; set; } = null!;
      public string password { get; set; } = null!;
    }

    public class SignupInfo {
      public string email { get; set; }
      public string username { get; set; }
      public string password { get; set; }
    }

    private readonly ILogger<WeatherForecastController> _logger;
    public AuthenticationController(ILogger<WeatherForecastController> logger)
    {
      _logger = logger;
    }

    [HttpPost]
    [Route("login")]
    public IActionResult Login(LoginInfo data) {
      try {
        System.Console.WriteLine(data.email);

        return Ok("Thank you for traveling with fabiothomas intercomputer travel incorporated");
      }
      catch(Exception ex) {
        return BadRequest(ex.Message);
      }
      return Ok("Not sure what happened...");
    }

    [HttpGet]
    [Route("logout")]
    public IActionResult Logout() {
      return Ok("Successfully logged out.");
    }

    [HttpPost]
    [Route("signup")]
    public IActionResult Signup(SignupInfo data) {
      try {
        System.Console.WriteLine(data.email);

        return Ok("Account now exists! wow!");
      }
      catch(Exception ex) {
        return BadRequest(ex.Message);
      }
      return Ok("Not sure what happened...");
    }

    [HttpPut]
    [Route("password")]
    public IActionResult Password(string newpassword) {
      try {
        System.Console.WriteLine(newpassword);

        return Ok("Password updated!");
      }
      catch(Exception ex) {
        return BadRequest(ex.Message);
      }
      return Ok("Not sure what happened...");
    }

    [HttpPut]
    [Route("username")]
    public IActionResult Password(string newusername) {
      try {
        System.Console.WriteLine(newusername);

        return Ok("Username updated!");
      }
      catch(Exception ex) {
        return BadRequest(ex.Message);
      }
      return Ok("Not sure what happened...");
    }
  }
}