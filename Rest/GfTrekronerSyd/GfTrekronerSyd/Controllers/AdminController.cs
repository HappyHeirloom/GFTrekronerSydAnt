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
    public class AdminController : ControllerBase
    {
        private readonly AdminService _adminService;

        public AdminController(AdminService adminService)
        {
            _adminService = adminService;
        }

        [HttpGet]
        public ActionResult<List<Admin>> Get() =>
            _adminService.Get();
    }
}
