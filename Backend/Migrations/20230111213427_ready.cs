using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    public partial class ready : Migration
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
                name: "machineTypes",
                schema: "EF",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    name = table.Column<string>(type: "text", nullable: false),
                    drawingNr = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_machineTypes", x => x.id);
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
                    companyId = table.Column<Guid>(type: "uuid", nullable: false),
                    role = table.Column<int>(type: "integer", nullable: false),
                    passwordHash = table.Column<byte[]>(type: "bytea", nullable: false),
                    passwordSalt = table.Column<byte[]>(type: "bytea", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users", x => x.id);
                    table.ForeignKey(
                        name: "FK_users_companies_companyId",
                        column: x => x.companyId,
                        principalSchema: "EF",
                        principalTable: "companies",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ackProblems",
                schema: "EF",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    MachineTypeId = table.Column<Guid>(type: "uuid", nullable: false),
                    problem = table.Column<string>(type: "text", nullable: false),
                    solution = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ackProblems", x => x.id);
                    table.ForeignKey(
                        name: "FK_ackProblems_machineTypes_MachineTypeId",
                        column: x => x.MachineTypeId,
                        principalSchema: "EF",
                        principalTable: "machineTypes",
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
                    typeId = table.Column<Guid>(type: "uuid", nullable: false),
                    companyId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_machines", x => x.id);
                    table.ForeignKey(
                        name: "FK_machines_companies_companyId",
                        column: x => x.companyId,
                        principalSchema: "EF",
                        principalTable: "companies",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_machines_machineTypes_typeId",
                        column: x => x.typeId,
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
                    submitterId = table.Column<Guid>(type: "uuid", nullable: false),
                    handlerId = table.Column<Guid>(type: "uuid", nullable: true),
                    submitDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    solved = table.Column<bool>(type: "boolean", nullable: false),
                    solveDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tickets", x => x.id);
                    table.ForeignKey(
                        name: "FK_tickets_users_handlerId",
                        column: x => x.handlerId,
                        principalSchema: "EF",
                        principalTable: "users",
                        principalColumn: "id");
                    table.ForeignKey(
                        name: "FK_tickets_users_submitterId",
                        column: x => x.submitterId,
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
                    ticketId = table.Column<Guid>(type: "uuid", nullable: false),
                    problem = table.Column<string>(type: "text", nullable: false),
                    expected = table.Column<string>(type: "text", nullable: false),
                    solution = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ticketDetails", x => x.id);
                    table.ForeignKey(
                        name: "FK_ticketDetails_tickets_ticketId",
                        column: x => x.ticketId,
                        principalSchema: "EF",
                        principalTable: "tickets",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ackProblems_MachineTypeId",
                schema: "EF",
                table: "ackProblems",
                column: "MachineTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_machines_companyId",
                schema: "EF",
                table: "machines",
                column: "companyId");

            migrationBuilder.CreateIndex(
                name: "IX_machines_typeId",
                schema: "EF",
                table: "machines",
                column: "typeId");

            migrationBuilder.CreateIndex(
                name: "IX_ticketDetails_ticketId",
                schema: "EF",
                table: "ticketDetails",
                column: "ticketId");

            migrationBuilder.CreateIndex(
                name: "IX_tickets_handlerId",
                schema: "EF",
                table: "tickets",
                column: "handlerId");

            migrationBuilder.CreateIndex(
                name: "IX_tickets_submitterId",
                schema: "EF",
                table: "tickets",
                column: "submitterId");

            migrationBuilder.CreateIndex(
                name: "IX_users_companyId",
                schema: "EF",
                table: "users",
                column: "companyId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ackProblems",
                schema: "EF");

            migrationBuilder.DropTable(
                name: "machines",
                schema: "EF");

            migrationBuilder.DropTable(
                name: "ticketDetails",
                schema: "EF");

            migrationBuilder.DropTable(
                name: "machineTypes",
                schema: "EF");

            migrationBuilder.DropTable(
                name: "tickets",
                schema: "EF");

            migrationBuilder.DropTable(
                name: "users",
                schema: "EF");

            migrationBuilder.DropTable(
                name: "companies",
                schema: "EF");
        }
    }
}
