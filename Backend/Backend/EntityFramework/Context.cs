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
        public DbSet<User> users { get; set; }
        public DbSet<Company> companies { get; set; }
        public DbSet<Machine> machines { get; set; }
        public DbSet<MachineType> machineTypes { get; set; }
        public DbSet<AckProblem> ackProblems { get; set; }
        public DbSet<Ticket> tickets { get; set; }
        public DbSet<TicketDetails> ticketDetails { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            optionsBuilder.UseNpgsql("User ID = postgres; Password = admin; Host = localhost; port = 5432; Database = Viscon; Pooling = true");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.HasDefaultSchema("EF");
        }
    }
}