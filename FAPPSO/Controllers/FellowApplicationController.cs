using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FAPPSO.Models;
using Microsoft.AspNetCore.Mvc;

namespace FAPPSO.Controllers
{
    [Route("api/[controller]")]
    public class FellowApplicationController : Controller
    {
        

        [HttpGet("[action]/{id}")]
        public FellowApplicationModel GetFellowApplication()
        {
           return new FellowApplicationModel();
        }
    }
}
