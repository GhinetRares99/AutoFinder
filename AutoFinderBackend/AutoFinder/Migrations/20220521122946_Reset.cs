using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AutoFinder.Migrations
{
    public partial class Reset : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    UserID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    StreetName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    StreetNumber = table.Column<int>(type: "int", nullable: false),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    StateProvince = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Country = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsAdmin = table.Column<bool>(type: "bit", nullable: false, defaultValue: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.UserID);
                    table.CheckConstraint("CK_User_StreetNumber", "StreetNumber >= 1");
                });

            migrationBuilder.CreateTable(
                name: "Vehicle",
                columns: table => new
                {
                    VehicleID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    VehicleCategory = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VehicleCompany = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VehicleModel = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VehiclePrice = table.Column<int>(type: "int", nullable: false),
                    VehicleFabricationYear = table.Column<int>(type: "int", nullable: false),
                    VehicleFuelType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VehicleKM = table.Column<int>(type: "int", nullable: false),
                    VehiclePower = table.Column<int>(type: "int", nullable: false),
                    VehicleCapacity = table.Column<int>(type: "int", nullable: false),
                    VehicleTransmission = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VehiclePollutionNorm = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VehicleDoors = table.Column<int>(type: "int", nullable: false),
                    VehicleColor = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VehicleWarranty = table.Column<int>(type: "int", nullable: false),
                    VehicleOriginCountry = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VehicleFirstRegistration = table.Column<DateTime>(type: "datetime2", nullable: false),
                    VehicleRegistered = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VehicleThumbnail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VehiclePhoto1 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VehiclePhoto2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    VehiclePhoto3 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vehicle", x => x.VehicleID);
                    table.CheckConstraint("CK_Vehicle_Price", "VehiclePrice >= 0");
                    table.CheckConstraint("CK_Vehicle_Fabrication_Year", "VehicleFabricationYear >= 1875");
                    table.CheckConstraint("CK_Vehicle_Km", "VehicleKM >= 0");
                    table.CheckConstraint("CK_Vehicle_Power", "VehiclePower >= 1");
                    table.CheckConstraint("CK_Vehicle_Doors", "VehicleDoors >= 1");
                    table.CheckConstraint("CK_Vehicle_Capacity", "VehicleCapacity >= 1");
                    table.CheckConstraint("CK_Vehicle_Warranty", "VehicleWarranty >= 0");
                    table.ForeignKey(
                        name: "FK_Vehicle_User_UserID",
                        column: x => x.UserID,
                        principalTable: "User",
                        principalColumn: "UserID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Event",
                columns: table => new
                {
                    EventID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    VehicleID = table.Column<int>(type: "int", nullable: false),
                    EventDescription = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EventDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Event", x => x.EventID);
                    table.ForeignKey(
                        name: "FK_Event_Vehicle_VehicleID",
                        column: x => x.VehicleID,
                        principalTable: "Vehicle",
                        principalColumn: "VehicleID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Event_VehicleID",
                table: "Event",
                column: "VehicleID");

            migrationBuilder.CreateIndex(
                name: "IX_User_UserName",
                table: "User",
                column: "UserName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Vehicle_UserID",
                table: "Vehicle",
                column: "UserID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Event");

            migrationBuilder.DropTable(
                name: "Vehicle");

            migrationBuilder.DropTable(
                name: "User");
        }
    }
}
