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
    public class EventController : Controller
    {
        private readonly Context _db;

        public EventController(Context db)
        {
            _db = db;
        }

        [EnableCors("CorsPolicy")]
        [HttpGet]
        [Route("/AutoFinder/Events")]
        public IEnumerable<Event> GetAll()
        {
            return _db.Event;
        }

        [EnableCors("CorsPolicy")]
        [HttpGet]
        [Route("/AutoFinder/FindVehicleEvents/{id}")]
        public IEnumerable<Event> FindVehicleEvents(int id)
        {
            return _db.Event.Where(yv => yv.VehicleID.Equals(id));
        }

        [EnableCors("CorsPolicy")]
        [HttpPost]
        [Route("/AutoFinder/AddEvent")]
        public async Task<IActionResult> AddEvent(Event ev)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            else
            {
                await _db.Event.AddAsync(ev);
                await _db.SaveChangesAsync();
                return Ok(ev);
            }

        }

        [EnableCors("CorsPolicy")]
        [HttpPut]
        [Route("/AutoFinder/EditEvent")]
        public async Task<IActionResult> EditEvent(Event ev)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            else
            {
                var findEvent = await _db.Event.FindAsync(ev.EventID);
                findEvent.EventDescription = ev.EventDescription;
                findEvent.EventDate = ev.EventDate;

                await _db.SaveChangesAsync();
                return Ok(ev);
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpDelete]
        [Route("/AutoFinder/DeleteEvent/{id:int}")]
        public async Task<IActionResult> DeleteEvent(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            else
            {
                var deleteEvent = await _db.Event.FindAsync(id);
                _db.Event.Remove(deleteEvent);
                await _db.SaveChangesAsync();
                return Ok(deleteEvent);
            }
        }
    }
}
