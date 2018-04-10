const MapWrapper = function(container, coords, zoom, contentString){
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
