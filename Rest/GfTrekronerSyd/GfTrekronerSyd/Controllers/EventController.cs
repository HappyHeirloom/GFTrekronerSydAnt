using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GfTrekronerSyd.Models;
using GfTrekronerSyd.Services;
using Microsoft.AspNetCore.Mvc;

namespace GfTrekronerSyd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly EventService _eventService;

        public EventController(EventService eventService)
        {
            _eventService = eventService;
        }

        [HttpGet]
        public ActionResult<List<Event>> Get() =>
            _eventService.Get();

        [HttpGet("{id:length(24)}", Name = "GetEvent")]
        public ActionResult<Event> Get(string id)
        {
            var events = _eventService.Get(id);

            if (events == null)
            {
                return NotFound();
            }

            return events;
        }

        [HttpPost]
        public ActionResult<Event> Create(Event events)
        {
            _eventService.Create(events);

            return CreatedAtRoute("GetEvent", new { id = events.Id.ToString() }, events);
        }

        [HttpPut]
        public IActionResult Update(Event eventIn)
        {
            var events = _eventService.Get(eventIn.Id);

            if (events == null)
            {
                return NotFound();
            }

            _eventService.Update(eventIn.Id, eventIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var events = _eventService.Get(id);

            if (events == null)
            {
                return NotFound();
            }

            _eventService.Remove(events.Id);

            return NoContent();
        }
    }
}
