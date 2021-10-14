﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GfTrekronerSyd.Models
{
    public class AdminDatabaseSettings : IAdminDatabaseSettings
    {
        public string AdminCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IAdminDatabaseSettings
    {
        string AdminCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
