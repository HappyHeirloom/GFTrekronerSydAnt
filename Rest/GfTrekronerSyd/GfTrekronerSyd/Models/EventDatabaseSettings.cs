using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GfTrekronerSyd.Models
{
    public class EventDatabaseSettings : IEventDatabaseSettings
    {
        public string EventCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IEventDatabaseSettings
    {
        string EventCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
