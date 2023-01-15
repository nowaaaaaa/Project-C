using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    public partial class kleineMbeter : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ackProblems_machineTypes_MachineTypeId",
                schema: "EF",
                table: "ackProblems");

            migrationBuilder.RenameColumn(
                name: "MachineTypeId",
                schema: "EF",
                table: "ackProblems",
                newName: "machineTypeId");

            migrationBuilder.RenameIndex(
                name: "IX_ackProblems_MachineTypeId",
                schema: "EF",
                table: "ackProblems",
                newName: "IX_ackProblems_machineTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_ackProblems_machineTypes_machineTypeId",
                schema: "EF",
                table: "ackProblems",
                column: "machineTypeId",
                principalSchema: "EF",
                principalTable: "machineTypes",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ackProblems_machineTypes_machineTypeId",
                schema: "EF",
                table: "ackProblems");

            migrationBuilder.RenameColumn(
                name: "machineTypeId",
                schema: "EF",
                table: "ackProblems",
                newName: "MachineTypeId");

            migrationBuilder.RenameIndex(
                name: "IX_ackProblems_machineTypeId",
                schema: "EF",
                table: "ackProblems",
                newName: "IX_ackProblems_MachineTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_ackProblems_machineTypes_MachineTypeId",
                schema: "EF",
                table: "ackProblems",
                column: "MachineTypeId",
                principalSchema: "EF",
                principalTable: "machineTypes",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
