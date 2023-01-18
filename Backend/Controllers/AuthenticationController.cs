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
    public async Task<IActionResult> Login(LoginDto data) {
      try {
        System.Console.WriteLine(data.email + "is trying to log in.");

        using (var context = new MyContext()) {
          
          var user = await context.users.Where(p => p.email == data.email).FirstOrDefaultAsync();
          if (user == null) {
            return BadRequest("User not found");
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

    [HttpPost]
    [Route("signup")]
    public async Task<IActionResult> Signup(SignupDto data) {
      try {
        System.Console.WriteLine(data.email);

        //creating password
        CreatePasswordHash(data.password, out byte[] passwordHash, out byte[] passwordSalt);

        using (var context = new MyContext()) {

          var company = await context.companies.Where(p => p.id == Guid.Parse(data.companyId)).FirstOrDefaultAsync();
          if (company == null) {
            return BadRequest("Company not found");
          }
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
    public async Task<IActionResult> Password(PasswordDto data) {
      try {
        System.Console.WriteLine("Password change incoming");

        if (VerifyToken(data.jwt, out Guid id)) {
          //create password
          CreatePasswordHash(data.newPassword, out byte[] passwordHash, out byte[] passwordSalt);

          using (var context = new MyContext()) {

            var user = await context.users.Where(p => p.id == id).FirstOrDefaultAsync();
            if (user == null) {
              return BadRequest("You don't exist in our systems...");
            }

            user.passwordHash = passwordHash;
            user.passwordSalt = passwordSalt; 
            context.SaveChanges();

            return Ok("Password updated!");
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

    [HttpPut]
    [Route("username")]
    public async Task<IActionResult> Username(UsernameDto data) {
      try {
        System.Console.WriteLine($"Username change to {data.newUsername} incoming");

        if (VerifyToken(data.jwt, out Guid id)) {
          using (var context = new MyContext()) {

            var user = await context.users.Where(p => p.id == id).FirstOrDefaultAsync();
            if (user == null) {
              return BadRequest("You don't exist in our systems...");
            }

            user.name = data.newUsername;
            context.SaveChanges();

            return Ok($"Username updated to {data.newUsername}!");
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

    private string CreateToken(User user) {

      List<Claim> claims = new List<Claim> {
        new Claim(ClaimTypes.NameIdentifier, user.id.ToString()),
        new Claim(ClaimTypes.Name, user.name),
        new Claim(ClaimTypes.Email, user.email),
        new Claim(ClaimTypes.MobilePhone, user.phone),
        new Claim(ClaimTypes.Role, user.role.ToString()),
        new Claim("CompanyId", user.companyId.ToString())
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

    public static bool VerifyToken(string token, out Guid id) {
      id = Guid.Empty;

      var handler = new JwtSecurityTokenHandler();
      var jwt = handler.ReadJwtToken(token);

      if (jwt == null || jwt.ValidFrom > DateTime.UtcNow || jwt.ValidTo < DateTime.UtcNow) {
        return false;
      }

      id = new Guid(jwt.Claims.First(claim => claim.Type == ClaimTypes.NameIdentifier).Value);
      return true;
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
