using AutoFinder.Entities;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MailKit;
using MimeKit;
using MailKit.Net.Smtp;

namespace AutoFinder.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class VehicleController : Controller
    {
        private readonly Context _db;

        private readonly CompanyEmail ce = new CompanyEmail();

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

                var findVehicleUser = await _db.User.FindAsync(vehicle.UserID);
                var findVehicleUserEmail = findVehicleUser.Email;

                //Mail
                MimeMessage mail = new MimeMessage();
                mail.From.Add(new MailboxAddress(ce.appname, ce.appemail));
                mail.To.Add(MailboxAddress.Parse(findVehicleUserEmail));
                mail.Subject = "Sale";
                mail.Body = new TextPart("plain")
                {
                    Text = string.Format("You have successfully placed a vehicle for sale! \n " +
                    "Details: \n" +
                    "Category - {0} \n" +
                    "Company - {1} \n" +
                    "Model - {2} \n" +
                    "Price - {3}€ \n" +
                    "Fabrication year - {4} \n" +
                    "Fuel - {5} \n" +
                    "Kilometres - {6}km \n" +
                    "Power - {7}hp \n" +
                    "Capacity - {8}cm3 \n" +
                    "Transmission - {9} \n" +
                    "Pollution norm - {10} \n" +
                    "Doors - {11} \n" +
                    "Color - {12} \n" +
                    "Warranty - {13} months \n" +
                    "Origin country - {14} \n" +
                    "First registration - {15} \n" +
                    "Registered - {16}", vehicle.VehicleCategory, vehicle.VehicleCompany, vehicle.VehicleModel, vehicle.VehiclePrice, vehicle.VehicleFabricationYear,
                    vehicle.VehicleFuelType, vehicle.VehicleKM, vehicle.VehiclePower, vehicle.VehicleCapacity, vehicle.VehicleTransmission, vehicle.VehiclePollutionNorm,
                    vehicle.VehicleDoors, vehicle.VehicleColor, vehicle.VehicleWarranty, vehicle.VehicleOriginCountry, vehicle.VehicleFirstRegistration, vehicle.VehicleRegistered)
                };

                SmtpClient smtp = new SmtpClient();
                try
                {
                    smtp.Connect(ce.appsmtp, ce.appport, true);
                    smtp.Authenticate(ce.appemail, ce.apppassword);
                    smtp.Send(mail);
                    smtp.Disconnect(true);
                }
                catch (Exception ex)
                {
                    throw ex;
                }

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

                //Mail
                var findVehicleUser = await _db.User.FindAsync(findVehicle.UserID);
                var findVehicleUserEmail = findVehicleUser.Email;

                MimeMessage mail = new MimeMessage();
                mail.From.Add(new MailboxAddress(ce.appname, ce.appemail));
                mail.To.Add(MailboxAddress.Parse(findVehicleUserEmail));
                mail.Subject = "Vehicle information edited";
                mail.Body = new TextPart("plain")
                {
                    Text = string.Format("You have successfully edited {0} {1}'s information!", findVehicle.VehicleCompany, findVehicle.VehicleModel)
                };

                SmtpClient smtp = new SmtpClient();
                try
                {
                    smtp.Connect(ce.appsmtp, ce.appport, true);
                    smtp.Authenticate(ce.appemail, ce.apppassword);
                    smtp.Send(mail);
                    smtp.Disconnect(true);
                }
                catch (Exception ex)
                {
                    throw ex;
                }

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

                var deletedVehicleUser = await _db.User.FindAsync(deleteVehicle.UserID);
                var deletedVehicleUserEmail = deletedVehicleUser.Email;

                _db.Vehicle.Remove(deleteVehicle);
                await _db.SaveChangesAsync();

                //Mail
                MimeMessage mail = new MimeMessage();
                mail.From.Add(new MailboxAddress(ce.appname, ce.appemail));
                mail.To.Add(MailboxAddress.Parse(deletedVehicleUserEmail));
                mail.Subject = "Vehicle deleted";
                mail.Body = new TextPart("plain")
                {
                    Text = string.Format("You have successfully deleted the {0} {1}!", deleteVehicle.VehicleCompany, deleteVehicle.VehicleModel)
                };

                SmtpClient smtp = new SmtpClient();
                try
                {
                    smtp.Connect(ce.appsmtp, ce.appport, true);
                    smtp.Authenticate(ce.appemail, ce.apppassword);
                    smtp.Send(mail);
                    smtp.Disconnect(true);
                }
                catch (Exception ex)
                {
                    throw ex;
                }

                return Ok(deleteVehicle);
            }
        }

    }
}
