using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.EF {

    class User {
        [Key]
        public Guid id { get; set; } 
        public string name { get; set; } = null!;
        public string email { get; set; }  = null!;
        public string phone { get; set; } = null!;
        public Company company { get; set; } = null!;
        public Guid companyId { get; set; }
        //Admin, Client, Trained, Untrained
        public int role { get; set; } = 0;
        public byte[] passwordHash { get; set; } = null!;
        public byte[] passwordSalt { get; set; } = null!;
    }

    public enum RoleTypes : int{
        NONE = 0,
        ADMIN = 1,
        CLIENT = 2,
        TRAINED = 3,
        UNTRAINED = 4,
    }

    class Company {
        [Key]
        public Guid id { get; set; } 
        public string name { get; set; } = null!;
        public string address { get; set; } = null!;
        public List<Machine>? machines { get; set; }
    }

    class MachineType {
        [Key]
        public Guid id { get; set; } 
        public string name { get; set; } = null!;
        public string drawingNr { get; set; } = null!;
    }

    class Machine {
        [Key]
        public Guid id { get; set; } 
        public string name { get; set; } = null!;
        public MachineType type { get; set; } = null!;
        public Guid typeId { get; set; }
        public Company company { get; set; } = null!;
        public Guid companyId { get; set; }
    }

    class AckProblem {
        [Key]
        public Guid id { get; set; }
        public MachineType type { get; set; } = null!;
        public Guid machineTypeId { get; set; }
        public string problem { get; set; } = null!;
        public string solution { get; set; } = null!;
    }

    class Ticket {
        [Key]
        public Guid id { get; set; }
        public User submitter { get; set; } = null!;
        public Guid submitterId { get; set; }
        public User? handler { get; set; }
        public Guid? handlerId { get; set; }
        public Machine machine { get; set; } = null!;
        public Guid machineId { get; set; }
        public DateTime submitDate { get; set; }
        public bool solved { get; set; }
        public DateTime? solveDate { get; set; }
    }

    class TicketDetails {
        [Key]
        public Guid id { get; set; }
        public Ticket ticket { get; set; } = null!;
        public Guid ticketId { get; set; }
        public string problem { get; set; } = null!;
        public string expected { get; set; } = null!;
        public string tried { get; set; } = null!;
        public string? solution { get; set; }
        public DateTime lastUpdated { get; set; }
    }
}
