using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace vsReact.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        const string kSessionLoginKey = "SessionLoginKey";

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            if (HttpContext.Session.GetInt32(kSessionLoginKey) != 1)
                return Unauthorized();

            var rng = new Random();
            var data = Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();

            return Ok(data);
        }

        [HttpPost]
        public ActionResult Post(LoginData data)
        {
            if (data == null && data.Username != "hello@world")
            {
                HttpContext.Session.SetInt32(kSessionLoginKey, 0);
                return Unauthorized();
            }

            HttpContext.Session.SetInt32(kSessionLoginKey, 1);

            return Ok(new { 
                Message="Successful login"
            });
        }
    }

    public class LoginData
    {
        public string Username { get; set; }

        public string Password { get; set; }
    }
}
