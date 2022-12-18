using Microsoft.OpenApi.Models;
/*using Backend.EF;
var db = new MyContext();
if (db.companies.Count() == 0 && db.users.Count() == 0) {
    db.companies.Add(new Company() { id = new Guid.NewGuid(), name = "Boer Harm BV", email = "admin", password = "admin", role = "customer"});
    db.users.Add(new User() { id = new Guid.NewGuid(), name = "Harm de Boer", address = "Boerstaat 1", machines = new List<Machine>() });
    saveChanges(db);
}
*/
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var provider = builder.Services.BuildServiceProvider();
var configuration = provider.GetRequiredService<IConfiguration>();

var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddCors(options => {
    var frontendURL = configuration.GetValue<string>("frontend_url");

    // options.AddDefaultPolicy(builder => {
    //     builder.WithOrigins(frontendURL).AllowAnyMethod().AllowAnyHeader();
    // });

    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy  =>
                      {
                          policy.WithOrigins(frontendURL).AllowAnyHeader().AllowAnyMethod().AllowCredentials();
                      });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();