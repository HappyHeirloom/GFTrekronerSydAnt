using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GfTrekronerSyd.Models;
using MongoDB.Driver;

namespace GfTrekronerSyd.Services
{
    public class EventService
    {
        private readonly IMongoCollection<Event> _event;

        public EventService(IEventDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _event = database.GetCollection<Event>(settings.EventCollectionName);
        }

        public List<Event> Get() =>
            _event.Find(events => true).ToList();

        public Event Get(string id) =>
            _event.Find<Event>(events => events.Id == id).FirstOrDefault();

        public Event Create(Event events)
        {
            _event.InsertOne(events);
            return events;
        }

        public ReplaceOneResult Update(string id, Event eventIn)
        {
            var filter = Builders<Event>.Filter.Eq(x => x.Id, id);
            var result = _event.ReplaceOne(filter, eventIn);

            return result;
            //_event.ReplaceOne(events => events.Id == id, eventIn);
        }

        public void Remove(Event eventIn) =>
            _event.DeleteOne(events => events.Id == eventIn.Id);

        public void Remove(string id) =>
            _event.DeleteOne(events => events.Id == id);
    }
}
