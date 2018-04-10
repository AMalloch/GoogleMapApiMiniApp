const initialize = function(){

    const container = document.getElementById('main-map');
    const center = {lat: -50, lng: 160};
    const zoom = 14;

const map = new MapWrapper(container, center, zoom);

  map.addMarker(center);
  
};

window.addEventListener('DOMContentLoaded', initialize);
