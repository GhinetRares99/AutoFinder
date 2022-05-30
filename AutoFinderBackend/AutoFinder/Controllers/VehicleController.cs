using AutoFinder.Entities;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutoFinder.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class VehicleController : Controller
    {
        private readonly Context _db;

        public VehicleController(Context db)
        {
            _db = db;
        }

        [EnableCors("CorsPolicy")]
        [HttpGet]
        [Route("/AutoFinder/Vehicles")]
        public IEnumerable<Vehicle> GetAll()
        {
            return _db.Vehicle;
        }

        [EnableCors("CorsPolicy")]
        [HttpGet]
        [Route("/AutoFinder/FindYourVehicles/{id}")]
        public IEnumerable<Vehicle> FindYourVehicles(int id)
        {
            return _db.Vehicle.Where(yv => yv.UserID.Equals(id));
        }

        [EnableCors("CorsPolicy")]
        [HttpPost]
        [Route("/AutoFinder/AddVehicle")]
        public async Task<IActionResult> AddVehicle(Vehicle vehicle)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            else
            {
                await _db.Vehicle.AddAsync(vehicle);
                await _db.SaveChangesAsync();
                return Ok(vehicle);
            }

        }

        [EnableCors("CorsPolicy")]
        [HttpPut]
        [Route("/AutoFinder/EditVehicle")]
        public async Task<IActionResult> EditVehicle(Vehicle vehicle)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            else
            {
                var findVehicle = await _db.Vehicle.FindAsync(vehicle.VehicleID);
                findVehicle.VehicleCategory = vehicle.VehicleCategory;
                findVehicle.VehicleCompany = vehicle.VehicleCompany;
                findVehicle.VehicleModel = vehicle.VehicleModel;
                findVehicle.VehiclePrice = vehicle.VehiclePrice;
                findVehicle.VehicleFabricationYear = vehicle.VehicleFabricationYear;
                findVehicle.VehicleFuelType = vehicle.VehicleFuelType;
                findVehicle.VehicleKM = vehicle.VehicleKM;
                findVehicle.VehiclePower = vehicle.VehiclePower;
                findVehicle.VehicleCapacity = vehicle.VehicleCapacity;
                findVehicle.VehicleTransmission = vehicle.VehicleTransmission;
                findVehicle.VehiclePollutionNorm = vehicle.VehiclePollutionNorm;
                findVehicle.VehicleDoors = vehicle.VehicleDoors;
                findVehicle.VehicleColor = vehicle.VehicleColor;
                findVehicle.VehicleWarranty = vehicle.VehicleWarranty;
                findVehicle.VehicleOriginCountry = vehicle.VehicleOriginCountry;
                findVehicle.VehicleFirstRegistration = vehicle.VehicleFirstRegistration;
                findVehicle.VehicleRegistered = vehicle.VehicleRegistered;
                findVehicle.VehicleThumbnail = vehicle.VehicleThumbnail;
                findVehicle.VehiclePhoto1 = vehicle.VehiclePhoto1;
                findVehicle.VehiclePhoto2 = vehicle.VehiclePhoto2;
                findVehicle.VehiclePhoto3 = vehicle.VehiclePhoto3;

                await _db.SaveChangesAsync();
                return Ok(vehicle);
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpDelete]
        [Route("/AutoFinder/DeleteVehicle/{id:int}")]
        public async Task<IActionResult> DeleteVehicle(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            else
            {
                var deleteVehicle = await _db.Vehicle.FindAsync(id);
                _db.Vehicle.Remove(deleteVehicle);
                await _db.SaveChangesAsync();
                return Ok(deleteVehicle);
            }
        }

    }
}
