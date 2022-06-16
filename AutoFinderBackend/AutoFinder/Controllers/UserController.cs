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
    public class UserController : Controller
    {
   
        private readonly Context _db;

        private readonly CompanyEmail ce = new CompanyEmail();

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
        [HttpGet]
        [Route("/AutoFinder/FindUserByUsername/{username}")]
        public IEnumerable<User> FindUserByUsername(string username)
        {
            return _db.User.Where(usr => usr.UserName.Equals(username));
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
                MimeMessage mail = new MimeMessage();
                mail.From.Add(new MailboxAddress(ce.appname, ce.appemail));
                mail.To.Add(MailboxAddress.Parse(user.Email));
                mail.Subject = "Account created";
                mail.Body = new TextPart("plain")
                {
                    Text = string.Format("You have successfully created your account! \n" +
                    "Your credentials are: username - {0}, password - {1}.", user.UserName, user.Password)
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

                await _db.SaveChangesAsync();

                //Mail
                MimeMessage mail = new MimeMessage();
                mail.From.Add(new MailboxAddress(ce.appname, ce.appemail));
                mail.To.Add(MailboxAddress.Parse(findUser.Email));
                mail.Subject = "Account edited";
                mail.Body = new TextPart("plain")
                {
                    Text = string.Format("You have successfully edited your account, {0}!", findUser.UserName)
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

                return Ok(user);
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpPut]
        [Route("/AutoFinder/AssignAdmin/{id}")]
        public async Task<IActionResult> AssignAdmin(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            else
            {
                var findUser = await _db.User.FindAsync(id);
                findUser.IsAdmin = true;

                await _db.SaveChangesAsync();

                //Mail
                MimeMessage mail = new MimeMessage();
                mail.From.Add(new MailboxAddress(ce.appname, ce.appemail));
                mail.To.Add(MailboxAddress.Parse(findUser.Email));
                mail.Subject = "Admin assigned";
                mail.Body = new TextPart("plain")
                {
                    Text = string.Format("You have gained admin privileges, {0}!", findUser.UserName)
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

                return Ok(findUser);
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpPut]
        [Route("/AutoFinder/RemoveAdmin/{id}")]
        public async Task<IActionResult> RemoveAdmin(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            else
            {
                var findUser = await _db.User.FindAsync(id);
                findUser.IsAdmin = false;

                await _db.SaveChangesAsync();

                //Mail
                MimeMessage mail = new MimeMessage();
                mail.From.Add(new MailboxAddress(ce.appname, ce.appemail));
                mail.To.Add(MailboxAddress.Parse(findUser.Email));
                mail.Subject = "Admin removed";
                mail.Body = new TextPart("plain")
                {
                    Text = string.Format("Your admin privileges have been removed, {0}!", findUser.UserName)
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

                return Ok(findUser);
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
                var deletedUserEmail = deleteUser.Email;

                _db.User.Remove(deleteUser);
                await _db.SaveChangesAsync();

                //Mail
                MimeMessage mail = new MimeMessage();
                mail.From.Add(new MailboxAddress(ce.appname, ce.appemail));
                mail.To.Add(MailboxAddress.Parse(deletedUserEmail));
                mail.Subject = "Account deleted";
                mail.Body = new TextPart("plain")
                {
                    Text = string.Format("You have successfully deleted your account!")
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

                return Ok(deleteUser);
            }
        }

    }
}
