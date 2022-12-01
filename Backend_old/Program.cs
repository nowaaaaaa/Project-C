using Microsoft.AspNetCore.Mvc;
using System;
namespace ServiceApp {
    class Program {
        public static void Main (string[] args) {
            var builder = WebApplication.CreateBuilder(args);

            var provider = builder.ServiceApp.BuildServiceProvider();

            var app = builder.Build();
            app.Urls.Add("http://localhost:5000");
            app.MapGet("/hello", () => "Hello World");
            app.Run();
        }
    }
}
