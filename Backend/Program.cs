using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;
using Backend.EF;
using System;
namespace Backend {
    class Program {
        static void Main(string[] args) {
            MyContext db = new MyContext();
            
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
        }
    }
}
