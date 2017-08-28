using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ChasTeknisktTest.Models;

namespace ChasTeknisktTest.Controllers
{
    public class HomeController : Controller
    {
        //GET: Home
        //Index returnerar IndexVyn, utifrån en tom SetRoute VyModell.
        //Index returnerar en uppmaning att gå till SetRoute sidan istället.
        public ActionResult Index()
        {
            return RedirectToAction("SetRoute");
        }

        //GET: Home/SetRoute
        //Returnerar "SetRoute"-Vyn, med en tom vymodell.
        public ActionResult SetRoute()
        {
            var route = new Route();
            return View(route);
        }

        //POST: Home/SetRoute
        //Returnerar IndexVyn, där SetRoute VyModellen innehåller vad användaren skickade in
        //Src sätts till en URL som nu innehåller Start- och Slutpunkterna på den sträcka som ska markeras på kartan som visas.
        [HttpPost]
        public ActionResult SetRoute(Route r)
        {
            r.Src = $"https://www.google.com/maps/embed/v1/directions?key=AIzaSyAB0W09vPwzeHmi9sNsUUL9ATZfFoRWwgQ&origin={r.Start}&destination={r.End}";

            return View(r);
        }
    }
}