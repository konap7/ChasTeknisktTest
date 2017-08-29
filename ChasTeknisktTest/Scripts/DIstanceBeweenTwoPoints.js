//Deklaration av variabler
var start, end;


//Hämtar in det användaren matade in för att skicka till API:et 
start = document.getElementById("Start").value;
end = document.getElementById("End").value;

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
        var hours = Math.floor(duration / 3600);
        duration %= 3600;
        var minutes = Math.floor(duration / 60);
        dvDistance.innerHTML = "";
        dvDistance.innerHTML += "Distance: " + distance + "<br />";
        dvDistance.innerHTML += "Time: " + hours + "h" + minutes + "min";
    }
}
