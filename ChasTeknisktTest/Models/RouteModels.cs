using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChasTeknisktTest.Models
{
    //En Route innehåller en startpunkt ('Start'), en slutdestination ('End') samt en Src.
    //Src:n innehåller den URL som hämtar in kartan från Google's kart-API.
    //Defaultvärdet på Src är en vanlig karta centrerad över Stockholm.
    public class Route
    {
        public string Start { get; set; } = "";
        public string End { get; set; } = "";
        public string Src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAB0W09vPwzeHmi9sNsUUL9ATZfFoRWwgQ&q=Stockholm";
    }
}