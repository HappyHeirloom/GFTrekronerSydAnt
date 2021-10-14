using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace GfTrekronerSyd.Models
{
    public class News
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("title")]
        public string Title { get; set; }

        [BsonElement("image")]
        public string Image { get; set; }

        [BsonElement("tag")]
        public string Tag { get; set; }

        [BsonElement("message")]
        public string Message { get; set; }

    }
}
