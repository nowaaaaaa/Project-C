using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Cryptography;
using System.Security.Claims;

using Backend.EF;

namespace Backend.Controllers {
  [ApiController]
  [Route("[controller]")]
  public class AuthenticationController : ControllerBase {

    private readonly IConfiguration _configuration;
    private readonly ILogger<WeatherForecastController> _logger;

    public AuthenticationController(IConfiguration configuration, ILogger<WeatherForecastController> logger)
    {
      _configuration = configuration;
      _logger = logger;
    }

    [HttpPost]
    [Route("login")]
    public IActionResult Login(LoginDto data) {
      try {
        System.Console.WriteLine(data.email + "is trying to log in");

        using (var context = new MyContext()) {
          
          var user = context.users.Where(p => p.email == data.email).FirstOrDefault();
          if (user == null) {
            return BadRequest("User nor found");
          }

          if(!VerifyPasswordHash(data.password, user.passwordHash, user.passwordSalt)) {
            return BadRequest("Wrong password");
          }

          string token = CreateToken(user);
          return Ok(token);
        }
      }
      catch(Exception ex) {
        return BadRequest(ex.Message);
      }
    }

    [HttpGet]
    [Route("logout")]
    public IActionResult Logout() {
      return Ok("Successfully logged out.");
    }

    [HttpPost]
    [Route("signup")]
    public IActionResult Signup(SignupDto data) {
      try {
        System.Console.WriteLine(data.email);

        //creating password
        CreatePasswordHash(data.password, out byte[] passwordHash, out byte[] passwordSalt);

        using (var context = new MyContext()) {

          var company = context.companies.Where(p => p.name == data.companyName).FirstOrDefault();

          var user = new User();
          user.id = Guid.NewGuid();
          user.name = data.name;
          user.email = data.email;
          user.phone = data.phone;
          user.company = company;
          user.companyId = company.id;
          user.role = data.role;
          user.passwordHash = passwordHash;
          user.passwordSalt = passwordSalt;

          context.users.Add(user);
          context.SaveChanges();

          return Ok(user);
        }
      }
      catch(Exception ex) {
        return BadRequest(ex.Message);
      }
    }

    [HttpPut]
    [Route("password")]
    public IActionResult Password(PasswordDto data) {
      try {
        System.Console.WriteLine("Password change incoming");

        //decrypt web token
        var token = data.jwt;
        var handler = new JwtSecurityTokenHandler();
        var jwt = handler.ReadJwtToken(token);
        var jwtToken = jwt as JwtSecurityToken;

        var email = jwt.Claims.First(claim => claim.Type == ClaimTypes.Email).Value;

        //create password
        CreatePasswordHash(data.newPassword, out byte[] passwordHash, out byte[] passwordSalt);

        using (var context = new MyContext()) {

          var user = context.users.Where(p => p.email == email).FirstOrDefault();
          if (user == null) {
            return BadRequest("You don't exist in our systems...");
          }

          user.passwordHash = passwordHash;
          user.passwordSalt = passwordSalt; 
          context.SaveChanges();

          return Ok("Password updated!");
        }
      }
      catch(Exception ex) {
        return BadRequest(ex.Message);
      }
      return Ok("Not sure what happened...");
    }

    [HttpPut]
    [Route("username")]
    public IActionResult Username(UsernameDto data) {
      try {
        System.Console.WriteLine($"Username change to {data.newUsername} incoming");

        //decrypt web token
        var token = data.jwt;
        var handler = new JwtSecurityTokenHandler();
        var jwt = handler.ReadJwtToken(token);
        var jwtToken = jwt as JwtSecurityToken;

        var email = jwt.Claims.First(claim => claim.Type == ClaimTypes.Email).Value;

        using (var context = new MyContext()) {

          var user = context.users.Where(p => p.email == email).FirstOrDefault();
          if (user == null) {
            return BadRequest("You don't exist in our systems...");
          }

          user.name = data.newUsername;
          context.SaveChanges();

          return Ok($"Username updated to {data.newUsername}!");
        }
      }
      catch(Exception ex) {
        return BadRequest(ex.Message);
      }
      return Ok("Not sure what happened...");
    }

    private string CreateToken(User user) {

      List<Claim> claims = new List<Claim> {
        new Claim(ClaimTypes.Name, user.name),
        new Claim(ClaimTypes.Email, user.email),
        new Claim(ClaimTypes.Role, user.role)
      };

      var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value));

      var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

      var token = new JwtSecurityToken(
        claims: claims,
        expires: DateTime.Now.AddDays(1),
        signingCredentials: creds
      );

      var jwt = new JwtSecurityTokenHandler().WriteToken(token);

      return jwt;
    }

    private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt){
      using (var hmac = new HMACSHA512()) {
        passwordSalt = hmac.Key;
        passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
      }
    }

    private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt) {
      using(var hmac = new HMACSHA512(passwordSalt)) {
        var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
        return computedHash.SequenceEqual(passwordHash);
      }
    }
  }
}