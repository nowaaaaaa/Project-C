using System.Security.Cryptography;
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
            optionsBuilder.UseNpgsql("User ID = postgres; Password = admin; Host = localhost; port = 5432; Database = Viscon; Pooling = true").LogTo(Console.WriteLine, LogLevel.Information);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.HasDefaultSchema("EF");
            modelBuilder.Entity<Machine>().HasOne(m => m.company).WithMany(c => c.machines).HasForeignKey(m => m.companyId);
        }

        public void FillDb() {
            if (this.companies.Count() != 0) return;
    	    string[][] machineArray = new string[][] {
                new string[] {"Satellite shuttle", "5001483"},
                new string[] {"Transfer shuttle", "5008716"},
                new string[] {"Elevator", "5004914"},
                new string[] {"Setup position", "5007894"},
                new string[] {"Chain track", "5010754"},
                new string[] {"Palletiser", "5004982"},
                new string[] {"Prestacker", "7005318"}
            };

            foreach (var m in machineArray) {
                this.machineTypes.Add(new MachineType() { id = Guid.NewGuid(), name = m[0], drawingNr = m[1]});
                }
            this.SaveChanges();
            this.ackProblems.Add(new AckProblem() { id = Guid.NewGuid(), machineTypeId = this.machineTypes.First().id, problem = "The product is on the machine incorrectly.", solution = "Check the photocells. You might need to place the product in the right spot manually." });
            this.ackProblems.Add(new AckProblem() { id = Guid.NewGuid(), machineTypeId = this.machineTypes.First().id, problem = "There is satelite traffic on the machine.", solution = "Check the photocells. You might need to place the product in the right spot manually." });  
            this.ackProblems.Add(new AckProblem() { id = Guid.NewGuid(), machineTypeId = this.machineTypes.First().id, problem = "No connection to the satelite.", solution = "Check if satelite is on. If the satelite is in the channel and it needs to be charged, charge it with charging the cable and manually place it back on the shuttle." });  
            this.ackProblems.Add(new AckProblem() { id = Guid.NewGuid(), machineTypeId = this.machineTypes.First().id, problem = "It's not safe to move.", solution = "The pallet sticks out on the shuttle or another pallet is stuck on the shuttle lane. Turn the pallet to it's correct position." });  
            this.ackProblems.Add(new AckProblem() { id = Guid.NewGuid(), machineTypeId = this.machineTypes.Skip(1).First().id, problem = "Loading/unloading takes too long.", solution = "The pallet is most likely stuck. Make sure it's not, reset the track and the shuttle and execute recovery in VLC." });  
            this.ackProblems.Add(new AckProblem() { id = Guid.NewGuid(), machineTypeId = this.machineTypes.Skip(1).First().id, problem = "It's not safe to move.", solution = "The pallet sticks out on the shuttle or another pallet is stuck on the shuttle lane. Turn the pallet to it's correct position." });  
            this.ackProblems.Add(new AckProblem() { id = Guid.NewGuid(), machineTypeId = this.machineTypes.Skip(2).First().id, problem = "Loading/unloading takes too long.", solution = "The pallet is most likely stuck. Make sure it's not, reset the track and the VT and execute recovery in VLC." });  
            this.ackProblems.Add(new AckProblem() { id = Guid.NewGuid(), machineTypeId = this.machineTypes.Skip(2).First().id, problem = "It's not safe to move.", solution = "The pallet sticks out on the lift or another pallet is stuck on the lift shaft. Turn the pallet to it's correct position." });  
            this.ackProblems.Add(new AckProblem() { id = Guid.NewGuid(), machineTypeId = this.machineTypes.Skip(4).First().id, problem = "Loading/unloading takes too long.", solution = "The pallet is most likely stuck. Make sure it's not, and reset the track." });  
            var harmBV = new Company(){id = Guid.NewGuid(), name = "Boer Harm BV", address = "Boerstaat 1", machines = new List<Machine>()};
            var tempList = new List<Machine>();
            for (int i = 1; i <= 3; i++) tempList.Add(new Machine() { id = Guid.NewGuid(), name = "Shuttle " + i, type = this.machineTypes.First(), typeId = this.machineTypes.First().id, company = harmBV, companyId = harmBV.id });
            for (int i = 1; i <= 3; i++) tempList.Add(new Machine() { id = Guid.NewGuid(), name = "Shuttle T" + i, type = this.machineTypes.Skip(1).First(), typeId = this.machineTypes.Skip(1).First().id, company = harmBV, companyId = harmBV.id });
            for (int i = 1; i <= 3; i++) tempList.Add(new Machine() { id = Guid.NewGuid(), name = "VT" + i, type = this.machineTypes.Skip(2).First(), typeId = this.machineTypes.Skip(2).First().id, company = harmBV, companyId = harmBV.id });
            for (int i = 1; i <= 3; i++) tempList.Add(new Machine() { id = Guid.NewGuid(), name = "Dock T" + i, type = this.machineTypes.Skip(3).First(), typeId = this.machineTypes.Skip(3).First().id, company = harmBV, companyId = harmBV.id });
            for (int i = 1; i <= 3; i++) 
                for (int j = 1; j <= 2; j++) tempList.Add(new Machine() { id = Guid.NewGuid(), name = $"Transfer niveau {i} VT {j}", type = this.machineTypes.Skip(4).First(), typeId = this.machineTypes.Skip(4).First().id, company = harmBV, companyId = harmBV.id });
            for (int i = 1; i <= 3; i++) tempList.Add(new Machine() { id = Guid.NewGuid(), name = "Palletiseerder " + i, type = this.machineTypes.Skip(5).First(), typeId = this.machineTypes.Skip(5).First().id, company = harmBV, companyId = harmBV.id });
            for (int i = 1; i <= 2; i++) tempList.Add(new Machine() { id = Guid.NewGuid(), name = "Voorstapelaar links " + i, type = this.machineTypes.Skip(6).First(), typeId = this.machineTypes.Skip(6).First().id, company = harmBV, companyId = harmBV.id });
            for (int i = 1; i <= 2; i++) tempList.Add(new Machine() { id = Guid.NewGuid(), name = "Voorstapelaar rechts " + i, type = this.machineTypes.Skip(6).First(), typeId = this.machineTypes.Skip(6).First().id, company = harmBV, companyId = harmBV.id });
            harmBV.machines = tempList;
            this.machines.AddRange(tempList);
            this.companies.Add(new Company() { id = Guid.NewGuid(), name = "Viscon Group", address = "Mijlweg 18, 's-Gravendeel", machines = new List<Machine>()});
            this.companies.Add(harmBV);
            this.SaveChanges();
            CreatePasswordHash("harm", out byte[] passHash, out byte[] passSalt);
            this.users.Add(new User() { id = Guid.NewGuid(), name = "Harm de Boer", email = "deboer@harmbv.nl", passwordHash = passHash, passwordSalt = passSalt, role = (int)RoleTypes.CLIENT , company = harmBV, companyId = harmBV.id, phone = "0612345678"});
            CreatePasswordHash("sjoerd", out passHash, out passSalt);
            this.users.Add(new User() { id = Guid.NewGuid(), name = "Sjoerd de Vries", email = "sdevries@harmbv.nl", passwordHash = passHash, passwordSalt = passSalt, role = (int)RoleTypes.TRAINED , company = harmBV, companyId = harmBV.id, phone = "0612345688"});
            CreatePasswordHash("gerard", out passHash, out passSalt);
            this.users.Add(new User() { id = Guid.NewGuid(), name = "Gerard Kowalski", email = "gkowalski@harmbv.nl", passwordHash = passHash, passwordSalt = passSalt, role = (int)RoleTypes.UNTRAINED , company = harmBV, companyId = harmBV.id, phone = "0048123456789"});
            CreatePasswordHash("jelle", out passHash, out passSalt);
            this.users.Add(new User() { id = Guid.NewGuid(), name = "Jelle Kerkstra", email = "j.kerkstra@viscon.nl", passwordHash = passHash, passwordSalt = passSalt, role = (int)RoleTypes.ADMIN , company = this.companies.First(), companyId = this.companies.First().id, phone = "06129722597"});
            CreatePasswordHash("patrick", out passHash, out passSalt);
            this.users.Add(new User() { id = Guid.NewGuid(), name = "Patrick Sannes", email = "p.sannes@viscon.nl", passwordHash = passHash, passwordSalt = passSalt, role = (int)RoleTypes.ADMIN , company = this.companies.First(), companyId = this.companies.First().id, phone = "0612345555"});
            this.SaveChanges();
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt) {
            using (var hmac = new HMACSHA512()) {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

    }
}