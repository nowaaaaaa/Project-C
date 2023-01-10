namespace Backend {
  public class LoginDto {
    public string email { get; set; } = string.Empty;
    public string password { get; set; } = string.Empty;
  }

  public class LogoutDto {
    public string jwt { get; set; } = string.Empty;
  }

  public class SignupDto {
    public string email { get; set; } = string.Empty;
    public string name { get; set; } = string.Empty;
    public string password { get; set; } = string.Empty;
    public string phone { get; set; } = string.Empty;
    public string companyName { get; set; } = string.Empty;
    public string role { get; set; } = string.Empty;
  }

  public class PasswordDto {
    public string jwt { get; set; } = string.Empty;
    public string newPassword {get; set; } = string.Empty;
  }

  public class UsernameDto {
    public string jwt { get; set; } = string.Empty;
    public string newUsername { get; set; } = string.Empty;
  }

//Weet niet zeker of ik dit moet doen maar ik kan verder op het moment niks...

  public class MachineType {
    //public Guid id { get; set; }
    public string name { get; set; } = string.Empty;
    public string drawingNr { get; set; } = string.Empty;
  }

  public class Company {
    //public Guid id { get; set; }
    public string name { get; set; } = string.Empty;
    public string address { get; set; } = string.Empty;
  }

  public class AckProblem {
    //public guid id { get; set; }
    public MachineType type { get; set; }
    public string problem { get; set; } = string.Empty;
    public string solution { get; set; } = string.Empty;
  }

  public class Machine {
    //public Guid id { get; set; }
    public string name { get; set; } = string.Empty;
    public MachineType type { get; set; }
    public string companyId { get; set; } = string.Empty;
  }
}