using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
//dotnet add package Microsoft.EntityFrameworkCore.Design --version 6.0.9
//dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL --version 6.0.5
//dotnet ef Migrations add *name*
//dotnet ef Database update
namespace Backend.EF {
    class MyContext : DbContext { 
        public DbSet<User> users { get; set; } = null!;
        public DbSet<Company> companies { get; set; } = null!;
        public DbSet<Machine> machines { get; set; } = null!;
        public DbSet<MachineType> machineTypes { get; set; } = null!;
        public DbSet<AckProblem> ackProblems { get; set; } = null!;
        public DbSet<Ticket> tickets { get; set; } = null!;
        public DbSet<TicketDetails> ticketDetails { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            optionsBuilder.UseNpgsql("User ID = postgres; Password = admin; Host = localhost; port = 5432; Database = Viscon; Pooling = true");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.HasDefaultSchema("EF");
            modelBuilder.Entity<Machine>().HasOne(m => m.company).WithMany(c => c.machines).HasForeignKey(m => m.companyId);
        }

        public MyContext() {
            this.FillDb();
        }

        public void FillDb() {
            if (this.companies.Count() != 0) return;
            foreach (var m in new string[,]{
                {"Satellite shuttle", "5001483"},
                {"Transfer shuttle", "5008716"},
                {"Elevator", "5004914"},
                {"Setup position", "5007894"},
                {"Chain track", "5010754"},
                {"Palletiser", "5004982"},
                {"Prestacker", "7005318"}
            }) {
                this.machineTypes.Add(new MachineType() { id = Guid.NewGuid(), name = m[0], drawingNr = m[1] });
            }
            var harmBV = new Company(){id = Guid.NewGuid(), name = "Boer Harm BV", address = "Boerstaat 1", machines = new List<Machine>()};
            var tempList = new List<Machine>();
            for (int i = 1; i <= 3; i++) tempList.Add(new Machine() { id = Guid.NewGuid(), name = "Shuttle " + i, type = this.machineTypes.First(), typeId = this.machineTypes.First().id, harmBV, companyId = harmBV.id });
            for (int i = 1; i <= 3; i++) tempList.Add(new Machine() { id = Guid.NewGuid(), name = "Shuttle T" + i, type = this.machineTypes[1], typeId = this.machineTypes[1].id, company = harmBV, companyId = harmBV.id });
            for (int i = 1; i <= 3; i++) tempList.Add(new Machine() { id = Guid.NewGuid(), name = "VT" + i, type = this.machineTypes[2], typeId = this.machineTypes[2].id, company = harmBV, companyId = harmBV.id });
            for (int i = 1; i <= 3; i++) tempList.Add(new Machine() { id = Guid.NewGuid(), name = "Dock T" + i, type = this.machineTypes[3], typeId = this.machineTypes[3].id, company = harmBV, companyId = harmBV.id });
            for (int i = 1; i <= 3; i++) 
                for (int j = 1; j <= 2; j++) tempList.Add(new Machine() { id = Guid.NewGuid(), name = $"Transfer niveau {i} VT {j}", type = this.machineTypes[4], typeId = this.machineTypes[4].id, company = harmBV, companyId = harmBV.id });
            for (int i = 1; i <= 3; i++) tempList.Add(new Machine() { id = Guid.NewGuid(), name = "Palletiseerder " + i, type = this.machineTypes[5], typeId = this.machineTypes[5].id, company = harmBV, companyId = harmBV.id });
            for (int i = 1; i <= 2; i++) tempList.Add(new Machine() { id = Guid.NewGuid(), name = "Voorstapelaar links " + i, type = this.machineTypes[6], typeId = this.machineTypes[6].id, company = harmBV, companyId = harmBV.id });
            for (int i = 1; i <= 2; i++) tempList.Add(new Machine() { id = Guid.NewGuid(), name = "Voorstapelaar rechts " + i, type = this.machineTypes[6], typeId = this.machineTypes[6].id, company = harmBV, companyId = harmBV.id });
            harmBV.machines = tempList;
            this.machines.AddRange(tempList);
            this.companies.Add(harmBV);
            this.companies.Add(new Company() { id = Guid.NewGuid(), name = "Viscon Group", address = "Mijlweg 18, 's-Gravendeel"});
            this.users.Add(new User() { id = Guid.NewGuid(), name = "Harm de Boer", email = "deboer@harmbv.nl", passwordHash = GetStringSha256Hash("harm"), role = "customer" , company = harmBV, companyId = harmBV.id, phone = "0612345678"});
            this.users.Add(new User() { id = Guid.NewGuid(), name = "Sjoerd de Vries", email = "sdevries@harmbv.nl", passwordHash = GetStringSha256Hash("sjoerd"), role = "trained" , company = harmBV, companyId = harmBV.id, phone = "0612345688"});
            this.users.Add(new User() { id = Guid.NewGuid(), name = "Gerard Kowalski", email = "gkowalski@harmbv.nl", passwordHash = GetStringSha256Hash("gerard"), role = "untrained" , company = harmBV, companyId = harmBV.id, phone = "0048123456789"});
            this.users.Add(new User() { id = Guid.NewGuid(), name = "Viscon Group", email = "jelle@viscon.nl", passwordHash = GetStringSha256Hash("jelle"), role = "admin" , company = this.companies[1], companyId = this.companies[1].id, phone = "0612345555"});
            this.SaveChanges();
        }

        public static string GetStringSha256Hash(string pass) {
            if (String.IsNullOrEmpty(pass))
                return String.Empty;
            using (var sha = new System.Security.Cryptography.SHA256Managed()) {
                byte[] passData = System.Text.Encoding.UTF8.GetBytes(pass);
                byte[] hash = sha.ComputeHash(textData);
                return BitConverter.ToString(hash).Replace("-", String.Empty);
            }
        }
    }
}