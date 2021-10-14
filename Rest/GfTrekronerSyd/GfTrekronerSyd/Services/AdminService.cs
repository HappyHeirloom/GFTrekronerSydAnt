using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GfTrekronerSyd.Models;
using MongoDB.Driver;

namespace GfTrekronerSyd.Services
{
    public class AdminService
    {
        private readonly IMongoCollection<Admin> _admin;

        public AdminService(IAdminDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _admin = database.GetCollection<Admin>(settings.AdminCollectionName);
        }

        public List<Admin> Get() =>
            _admin.Find(admin => true).ToList();
    }
}
