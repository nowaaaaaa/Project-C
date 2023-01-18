namespace Backend {
  public class LoginDto {
    public string email { get; set; } = string.Empty;
    public string password { get; set; } = string.Empty;
  }

  public class SignupDto {
    public string email { get; set; } = string.Empty;
    public string name { get; set; } = string.Empty;
    public string password { get; set; } = string.Empty;
    public string phone { get; set; } = string.Empty;
    public string companyName { get; set; } = string.Empty;
    public int role { get; set; } = 0;
  }

  public class PasswordDto {
    public string jwt { get; set; } = string.Empty;
    public string newPassword {get; set; } = string.Empty;
  }

  public class UsernameDto {
    public string jwt { get; set; } = string.Empty;
    public string newUsername { get; set; } = string.Empty;
  }

  public class GetRoleDto {
    public string jwt { get; set; } = string.Empty;
  }
  
  public class GetCompanyNameDto {
    public string jwt { get; set; } = string.Empty;
    public string companyId { get; set; } = string.Empty;
  }

  public class GetMachinesDto {
    public string jwt { get; set; } = string.Empty;
    public string companyId { get; set; } = string.Empty;
  }

  public class GetAckProblemsDto {
    public string jwt { get; set; } = string.Empty;
    public string machineTypeId { get; set; } = string.Empty;
  }
}