using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    public partial class NuKlaar2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_machines_companies_companyid",
                schema: "EF",
                table: "machines");

            migrationBuilder.RenameColumn(
                name: "companyid",
                schema: "EF",
                table: "machines",
                newName: "companyId");

            migrationBuilder.RenameIndex(
                name: "IX_machines_companyid",
                schema: "EF",
                table: "machines",
                newName: "IX_machines_companyId");

            migrationBuilder.AlterColumn<string>(
                name: "solution",
                schema: "EF",
                table: "ticketDetails",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AddColumn<string>(
                name: "problem",
                schema: "EF",
                table: "ackProblems",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "solution",
                schema: "EF",
                table: "ackProblems",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddForeignKey(
                name: "FK_machines_companies_companyId",
                schema: "EF",
                table: "machines",
                column: "companyId",
                principalSchema: "EF",
                principalTable: "companies",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_machines_companies_companyId",
                schema: "EF",
                table: "machines");

            migrationBuilder.DropColumn(
                name: "problem",
                schema: "EF",
                table: "ackProblems");

            migrationBuilder.DropColumn(
                name: "solution",
                schema: "EF",
                table: "ackProblems");

            migrationBuilder.RenameColumn(
                name: "companyId",
                schema: "EF",
                table: "machines",
                newName: "companyid");

            migrationBuilder.RenameIndex(
                name: "IX_machines_companyId",
                schema: "EF",
                table: "machines",
                newName: "IX_machines_companyid");

            migrationBuilder.AlterColumn<string>(
                name: "solution",
                schema: "EF",
                table: "ticketDetails",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_machines_companies_companyid",
                schema: "EF",
                table: "machines",
                column: "companyid",
                principalSchema: "EF",
                principalTable: "companies",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
