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
