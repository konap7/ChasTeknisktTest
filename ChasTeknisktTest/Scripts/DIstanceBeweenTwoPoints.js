//Deklaration av variabler
var start, end;
//var directionsDisplay;
//var directionsService = new google.maps.DirectionsService();

//Ritar ut kartan centrerad över Stockholm
//var map = new google.maps.Map(document.getElementById('Map'), {
//    center: { lat: 59.3333333, lng: 18.05 },
//    zoom: 13,
//    mapTypeId: 'roadmap'
//});

//Applicerar "type ahead" på de två inmatningsfälten så att det blir enklare att söka platser
//google.maps.event.addDomListener(window, 'load', function () {
//    new google.maps.places.SearchBox(document.getElementById('Start'));
//    new google.maps.places.SearchBox(document.getElementById('End'));
//});

//Hämtar in det användaren matade in för att skicka till API:et 
start = document.getElementById("Start").value;
end = document.getElementById("End").value;

//var request = {
//    origin: start,
//    destination: end,
//    travelMode: google.maps.TravelMode.DRIVING
//};

////Ritar ut användarens route
//directionsService.route(request, function (response, status) {
//    if (status == google.maps.DirectionsStatus.OK) {
//        directionsDisplay.setDirections(response);
//    }
//});

//Anropar API:ets DistanceMatrixService för att kunna räkna ut avstånd mellan punkterna samt den tid det kommer ta att färdas sträckan
var service = new google.maps.DistanceMatrixService();
service.getDistanceMatrix({
    origins: [start],
    destinations: [end],
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC
}, callback);

function callback(response, status) {
    if (status == google.maps.DistanceMatrixStatus.OK && 
                  response.rows[0].elements[0].status != "ZERO_RESULTS") {
        var distance = response.rows[0].elements[0].distance.text;
        var duration = response.rows[0].elements[0].duration.value;
        var dvDistance = document.getElementById("Distance");
        duration = parseFloat(duration / 60).toFixed(2);
        dvDistance.innerHTML = "";
        dvDistance.innerHTML += "Distance: " + distance + "<br />";
        dvDistance.innerHTML += "Time: " + duration + " min";
    }
}