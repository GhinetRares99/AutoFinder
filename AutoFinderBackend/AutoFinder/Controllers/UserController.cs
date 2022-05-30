using AutoFinder.Entities;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Mail;

namespace AutoFinder.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        private readonly Context _db;

        public UserController(Context db)
        {
            _db = db;
        }

        [EnableCors("CorsPolicy")]
        [HttpGet]
        [Route("/AutoFinder/Users")]
        public IEnumerable<User> GetAll()
        {
            return _db.User;
        }

        [EnableCors("CorsPolicy")]
        [HttpGet]
        [Route("/AutoFinder/FindUserSignIn/{username}/{password}")]
        public IEnumerable<User> FindUserSignIn(string username, string password)
        {
            return _db.User.Where(usr => usr.UserName.Equals(username) && usr.Password.Equals(password));
        }

        [EnableCors("CorsPolicy")]
        [HttpGet]
        [Route("/AutoFinder/FindUserById/{id}")]
        public IEnumerable<User> FindUserById(int id)
        {
            return _db.User.Where(usr => usr.UserID.Equals(id));
        }

        [EnableCors("CorsPolicy")]
        [HttpPost]
        [Route("/AutoFinder/AddUser")]
        public async Task<IActionResult> AddUser(User user)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            else
            {
                await _db.User.AddAsync(user);
                await _db.SaveChangesAsync();

                //Mail
                MailMessage mail = new MailMessage("autofinder.company@gmail.com", user.Email);
                mail.Subject = "Account created";
                mail.Body = string.Format("Your account was created. Your credentials are: username - {0}, password - {1}", user.UserName, user.Password);
                mail.BodyEncoding = System.Text.Encoding.UTF8;

                SmtpClient smtp = new SmtpClient("smtp.gmail.com", 587);
                smtp.Credentials = new System.Net.NetworkCredential()
                { 
                    UserName = "autofinder.company@gmail.com",
                    Password = "Asurbanipal1"
                };
                smtp.EnableSsl = true;
                smtp.Send(mail);

                return Ok(user);
            }

        }

        [EnableCors("CorsPolicy")]
        [HttpPut]
        [Route("/AutoFinder/EditUser")]
        public async Task<IActionResult> EditUser(User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            else
            {
                var findUser = await _db.User.FindAsync(user.UserID);
                findUser.FirstName = user.FirstName;
                findUser.LastName = user.LastName;
                findUser.UserName = user.UserName;
                findUser.Password = user.Password;
                findUser.Email = user.Email;
                findUser.PhoneNumber = user.PhoneNumber;

                findUser.StreetName = user.StreetName;
                findUser.StreetNumber = user.StreetNumber;
                findUser.City = user.City;
                findUser.StateProvince = user.StateProvince;
                findUser.Country = user.Country;

                findUser.IsAdmin = user.IsAdmin;

                await _db.SaveChangesAsync();
                return Ok(user);
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpDelete]
        [Route("/AutoFinder/DeleteUser/{id:int}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            else
            {
                var deleteUser = await _db.User.FindAsync(id);
                _db.User.Remove(deleteUser);
                await _db.SaveChangesAsync();
                return Ok(deleteUser);
            }
        }

    }
}
