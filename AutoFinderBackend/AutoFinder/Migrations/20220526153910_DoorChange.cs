using Microsoft.EntityFrameworkCore.Migrations;

namespace AutoFinder.Migrations
{
    public partial class DoorChange : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropCheckConstraint(
                name: "CK_Vehicle_Doors",
                table: "Vehicle");

            migrationBuilder.AddCheckConstraint(
                name: "CK_Vehicle_Doors",
                table: "Vehicle",
                sql: "VehicleDoors >= 0");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropCheckConstraint(
                name: "CK_Vehicle_Doors",
                table: "Vehicle");

            migrationBuilder.AddCheckConstraint(
                name: "CK_Vehicle_Doors",
                table: "Vehicle",
                sql: "VehicleDoors >= 1");
        }
    }
}
