const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoiaWRvbnR3YW50dG8iLCJhIjoiY2prazQyMzZ2NjI3bzNxbWxpMWt4anA1MCJ9.XELVWmy1OWCYj-_RKi9iKA";

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = (type, coords) => {
  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = `url(${iconURLs[type]})`;
  return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
};

module.exports = buildMarker;
