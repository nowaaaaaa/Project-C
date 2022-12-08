using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    public partial class ModelKlaar : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "EF");

            migrationBuilder.CreateTable(
                name: "companies",
                schema: "EF",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    name = table.Column<string>(type: "text", nullable: false),
                    address = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_companies", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "MachineType",
                schema: "EF",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    name = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MachineType", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "users",
                schema: "EF",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    name = table.Column<string>(type: "text", nullable: false),
                    email = table.Column<string>(type: "text", nullable: false),
                    phone = table.Column<string>(type: "text", nullable: false),
                    companyid = table.Column<Guid>(type: "uuid", nullable: false),
                    role = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users", x => x.id);
                    table.ForeignKey(
                        name: "FK_users_companies_companyid",
                        column: x => x.companyid,
                        principalSchema: "EF",
                        principalTable: "companies",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "machines",
                schema: "EF",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    name = table.Column<string>(type: "text", nullable: false),
                    typeid = table.Column<Guid>(type: "uuid", nullable: false),
                    companyid = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_machines", x => x.id);
                    table.ForeignKey(
                        name: "FK_machines_companies_companyid",
                        column: x => x.companyid,
                        principalSchema: "EF",
                        principalTable: "companies",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_machines_MachineType_typeid",
                        column: x => x.typeid,
                        principalSchema: "EF",
                        principalTable: "MachineType",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_machines_companyid",
                schema: "EF",
                table: "machines",
                column: "companyid");

            migrationBuilder.CreateIndex(
                name: "IX_machines_typeid",
                schema: "EF",
                table: "machines",
                column: "typeid");

            migrationBuilder.CreateIndex(
                name: "IX_users_companyid",
                schema: "EF",
                table: "users",
                column: "companyid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "machines",
                schema: "EF");

            migrationBuilder.DropTable(
                name: "users",
                schema: "EF");

            migrationBuilder.DropTable(
                name: "MachineType",
                schema: "EF");

            migrationBuilder.DropTable(
                name: "companies",
                schema: "EF");
        }
    }
}
