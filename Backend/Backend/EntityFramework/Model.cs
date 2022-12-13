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
        public string name { get; set; }
        public string email { get; set; }
        public string phone { get; set; }
        public Company company { get; set; }
        public string role { get; set; }
    }

    class Company {
        [Key]
        public Guid id { get; set; }
        public string name { get; set; }
        public string address { get; set; }
        public List<Machine> machines { get; set; } 
    }

    class MachineType {
        [Key]
        public Guid id { get; set; }
        public string name { get; set; }
    }

    class Machine {
        [Key]
        public Guid id { get; set; }
        public string name { get; set; }
        public MachineType type { get; set; }
        public Company company { get; set; }
        public Guid companyId { get; set; }
    }

    class AckProblem {
        [Key]
        public Guid id { get; set; }
        public MachineType type { get; set; }
        public string problem { get; set; }
        public string solution { get; set; }
    }

    class Ticket {
        [Key]
        public Guid id { get; set; }
        public User submitter { get; set; }
        public User? handler { get; set; }
        public DateTime submitDate { get; set; }
        public bool solved { get; set; }
        public DateTime? solveDate { get; set; }
    }

    class TicketDetails {
        [Key]
        public Guid id { get; set; }
        public Ticket ticket { get; set; }
        public string problem { get; set; }
        public string expected { get; set; }
        public string? solution { get; set; }
    }
}
