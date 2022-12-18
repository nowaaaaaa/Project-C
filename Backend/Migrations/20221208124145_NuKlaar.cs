using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    public partial class NuKlaar : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_machines_MachineType_typeid",
                schema: "EF",
                table: "machines");

            migrationBuilder.DropPrimaryKey(
                name: "PK_MachineType",
                schema: "EF",
                table: "MachineType");

            migrationBuilder.RenameTable(
                name: "MachineType",
                schema: "EF",
                newName: "machineTypes",
                newSchema: "EF");

            migrationBuilder.AddPrimaryKey(
                name: "PK_machineTypes",
                schema: "EF",
                table: "machineTypes",
                column: "id");

            migrationBuilder.CreateTable(
                name: "ackProblems",
                schema: "EF",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    typeid = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ackProblems", x => x.id);
                    table.ForeignKey(
                        name: "FK_ackProblems_machineTypes_typeid",
                        column: x => x.typeid,
                        principalSchema: "EF",
                        principalTable: "machineTypes",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "tickets",
                schema: "EF",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    submitterid = table.Column<Guid>(type: "uuid", nullable: false),
                    handlerid = table.Column<Guid>(type: "uuid", nullable: true),
                    submitDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    solved = table.Column<bool>(type: "boolean", nullable: false),
                    solveDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tickets", x => x.id);
                    table.ForeignKey(
                        name: "FK_tickets_users_handlerid",
                        column: x => x.handlerid,
                        principalSchema: "EF",
                        principalTable: "users",
                        principalColumn: "id");
                    table.ForeignKey(
                        name: "FK_tickets_users_submitterid",
                        column: x => x.submitterid,
                        principalSchema: "EF",
                        principalTable: "users",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ticketDetails",
                schema: "EF",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    ticketid = table.Column<Guid>(type: "uuid", nullable: false),
                    problem = table.Column<string>(type: "text", nullable: false),
                    expected = table.Column<string>(type: "text", nullable: false),
                    solution = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ticketDetails", x => x.id);
                    table.ForeignKey(
                        name: "FK_ticketDetails_tickets_ticketid",
                        column: x => x.ticketid,
                        principalSchema: "EF",
                        principalTable: "tickets",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ackProblems_typeid",
                schema: "EF",
                table: "ackProblems",
                column: "typeid");

            migrationBuilder.CreateIndex(
                name: "IX_ticketDetails_ticketid",
                schema: "EF",
                table: "ticketDetails",
                column: "ticketid");

            migrationBuilder.CreateIndex(
                name: "IX_tickets_handlerid",
                schema: "EF",
                table: "tickets",
                column: "handlerid");

            migrationBuilder.CreateIndex(
                name: "IX_tickets_submitterid",
                schema: "EF",
                table: "tickets",
                column: "submitterid");

            migrationBuilder.AddForeignKey(
                name: "FK_machines_machineTypes_typeid",
                schema: "EF",
                table: "machines",
                column: "typeid",
                principalSchema: "EF",
                principalTable: "machineTypes",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_machines_machineTypes_typeid",
                schema: "EF",
                table: "machines");

            migrationBuilder.DropTable(
                name: "ackProblems",
                schema: "EF");

            migrationBuilder.DropTable(
                name: "ticketDetails",
                schema: "EF");

            migrationBuilder.DropTable(
                name: "tickets",
                schema: "EF");

            migrationBuilder.DropPrimaryKey(
                name: "PK_machineTypes",
                schema: "EF",
                table: "machineTypes");

            migrationBuilder.RenameTable(
                name: "machineTypes",
                schema: "EF",
                newName: "MachineType",
                newSchema: "EF");

            migrationBuilder.AddPrimaryKey(
                name: "PK_MachineType",
                schema: "EF",
                table: "MachineType",
                column: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_machines_MachineType_typeid",
                schema: "EF",
                table: "machines",
                column: "typeid",
                principalSchema: "EF",
                principalTable: "MachineType",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
