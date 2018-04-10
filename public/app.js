const initialize = function(){

    const container = document.getElementById('main-map');
    const center = {lat: -50, lng: 160};
    const zoom = 14;

const map = new MapWrapper(container, center, zoom);

};

window.addEventListener('DOMContentLoaded', initialize);
