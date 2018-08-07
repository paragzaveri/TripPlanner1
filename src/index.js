const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoiaWRvbnR3YW50dG8iLCJhIjoiY2prazQyMzZ2NjI3bzNxbWxpMWt4anA1MCJ9.XELVWmy1OWCYj-_RKi9iKA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6298, 41.8781], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-87.6298 , 41.8781]).addTo(map);
