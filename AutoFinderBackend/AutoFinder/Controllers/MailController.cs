using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MailKit;
using MimeKit;
using MailKit.Net.Smtp;
using AutoFinder.Entities;

namespace AutoFinder.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MailController : ControllerBase
    {
        private readonly Context _db;

        private readonly CompanyEmail ce = new CompanyEmail();

        public MailController(Context db)
        {
            _db = db;
        }

        [EnableCors]
        [Route("/AutoFinder/SendMail/{senderID}/{from}/{to}/{emailSubject}/{emailBody}")]
        public async Task<IActionResult> SendMail(int senderID, string from, string to, string emailSubject, string emailBody)
        {
            var findUserToSend = await _db.User.FindAsync(senderID);

            MimeMessage mail = new MimeMessage();
            mail.From.Add(new MailboxAddress(ce.appname, ce.appemail));
            mail.To.Add(MailboxAddress.Parse(to));
            mail.Subject = "New message";
            mail.Body = new TextPart("plain")
            {
                Text = string.Format("You have a new message from {0}! \n\n" +
                "Subject: {1} \n" +
                "Message: {2} \n\n" +
                "{3}'s email: {4} \n" +
                "{5}'s phone number: {6}", findUserToSend.UserName, emailSubject, emailBody, findUserToSend.UserName, from, findUserToSend.UserName, findUserToSend.PhoneNumber)
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

            return Ok();
        }
    }
}
