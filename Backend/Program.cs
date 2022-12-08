using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

class MyContext : DbContext { 
    public DbSet<User> users { get; set; }
    public DbSet<company> companies { get; set; }
    public DbSet<Machine> machines { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
        optionsBuilder.UseNpgsql("User ID = postgres; Password = admin; Host = localhost; port = 5432; Database = Viscon; Pooling = true");
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder) {
        modelBuilder.HasDefaultSchema("EF");
    }

}
//https://pgexercises.com/gettingstarted.html

class User {
    public string name;
}

class Facilty { 
    [Key]
    public int facid { get; set; }
    [Required, Column(TypeName = "varchar(200)")]
    public string name { get; set; }
    
    public decimal membercost { get; set; }
    public decimal guestcost { get; set; }
    public decimal initialoutlay { get; set; }
    public decimal monthlymaintenance { get; set; }
}

class Booking { 
    [Key]
    public int bookid { get; set; }
    [ForeignKey ("facid")]
    public Facilty? facilty { get; set; }
    public int facid { get; set; }
    [ForeignKey ("memid")]
    public Member? member { get; set; }
    public int memid { get; set; }
    public DateTime starttime { get; set; }
    public int slots { get; set; }
}