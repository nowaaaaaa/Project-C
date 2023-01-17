using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    public partial class ticketUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "machineId",
                schema: "EF",
                table: "tickets",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<DateTime>(
                name: "lastUpdated",
                schema: "EF",
                table: "ticketDetails",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.CreateIndex(
                name: "IX_tickets_machineId",
                schema: "EF",
                table: "tickets",
                column: "machineId");

            migrationBuilder.AddForeignKey(
                name: "FK_tickets_machines_machineId",
                schema: "EF",
                table: "tickets",
                column: "machineId",
                principalSchema: "EF",
                principalTable: "machines",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tickets_machines_machineId",
                schema: "EF",
                table: "tickets");

            migrationBuilder.DropIndex(
                name: "IX_tickets_machineId",
                schema: "EF",
                table: "tickets");

            migrationBuilder.DropColumn(
                name: "machineId",
                schema: "EF",
                table: "tickets");

            migrationBuilder.DropColumn(
                name: "lastUpdated",
                schema: "EF",
                table: "ticketDetails");
        }
    }
}
