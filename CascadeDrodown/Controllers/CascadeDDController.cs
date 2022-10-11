using Lab5CascadingDropDownApp;
using Microsoft.AspNetCore.Mvc;

namespace CascadeDrodown.Controllers
{
    public class CascadeDDController : Controller
    {
        AppDbContext _db;
        public CascadeDDController(AppDbContext db)
        {
            this._db = db;
        }
        
        public JsonResult Country()
        {
            var co = _db.Countries.ToList();
            return new JsonResult(co);
        }

        public JsonResult City(int id)
        {
            var ci = _db.Cities.Where(e => e.Country.CountryId == id).ToList();
            return new JsonResult(ci);
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult CasCadeDropDown()
        {
            return View();
        }
    }
}
