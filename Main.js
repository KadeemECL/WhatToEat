/*Api Key
https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=AIzaSyCqw2gvdoaH1QaOU_xRNvZAzL8lmultBWc
AIzaSyCqw2gvdoaH1QaOU_xRNvZAzL8lmultBWc google
yelp
https://api.yelp.com/v3/businesses/3lcNlMLeaLCGtS-ELlWrTg
 */

var apiUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=AIzaSyCqw2gvdoaH1QaOU_xRNvZAzL8lmultBWc';

var map;
var service;
var infowindow;

function initialize() {
    var orlando = new google.maps.LatLng(28.5383,-81.3792);

    map = new google.maps.Map(document.getElementById('map'), {
        center: orlando,
        zoom: 15
    });

    var drink = {
        location: orlando,
        radius: '6500',
        type: ['bar']
    };

    var food = {
        location: orlando,
        radius: '6500',
        type: ['restaurant']
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(drink, callback);
    service.nearbySearch(food, fcallback);
    myFunction();


}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        var drand = results[Math.floor(Math.random() *results.length)];
        dplaceId = (drand.name);
        console.log(dplaceId);
        document.getElementById('dplace').innerHTML = dplaceId;
    }
}

function fcallback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        var frand = results[Math.floor(Math.random() *results.length)];
        fplaceId = (frand.name);
        console.log(fplaceId);
        document.getElementById('fplace').innerHTML = fplaceId;

    }
}

google.maps.event.addDomListener(window, 'load', initialize);


