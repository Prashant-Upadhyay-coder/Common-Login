using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Login_project.Models;

namespace Login_project.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Home_Master_Page()
        {
            return View();
        }
        public IActionResult Side_Nav()
        {
            return View();
        }
    }
}
