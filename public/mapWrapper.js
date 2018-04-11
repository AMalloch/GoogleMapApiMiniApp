const MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
};

MapWrapper.prototype.addMarker = function (coords, contentString) {

  let infowindow = new google.maps.InfoWindow({
  content: contentString
  });

  const marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  })
  this.markers.push(marker);
  marker.addListener('click', function() {
    infowindow.open(this.googleMap, marker);
  });

};

MapWrapper.prototype.setCenterChicago = function () {
  this.googleMap.setCenter({lat:41.86497082505316, lng:-87.6242095});
};

MapWrapper.prototype.geoLocator = function () {
  var output = document.getElementById("spy-map");

      // geolocation API
  if (!navigator.geolocation){
    output.innerHTML = "<p>Your browser sucks</p>";
    return;
  }

   // getCurrentPosition() will accept a success callback and or an optional error callback
  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);
  }

  function error() {
    output.innerHTML = "Unable to spy on you";
  }

  output.innerHTML = "<p>Locating…</p>";

  // Initiates a request to detect the user's
  // position, and queries the positioning hardware to get
  // information. When the position is determined, the defined callback
  // function is executed.
  navigator.geolocation.getCurrentPosition(success, error);
};
