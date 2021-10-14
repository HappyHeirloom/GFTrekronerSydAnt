using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace GfTrekronerSyd.Models
{
    public class Event
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("title")]
        public string Title { get; set; }

        [BsonElement("allDay")]
        public bool AllDay { get; set; }

        [BsonElement("start")]
        public string Start { get; set; }

        [BsonElement("end")]
        public string End { get; set; }
    }
}
