console.log("Hello from JavaScript");

const {buildMarker, iconURLs} = require('./marker');
const mapboxgl = require("mapbox-gl");


mapboxgl.accessToken = 'pk.eyJ1IjoiYWxsZW5yYXkiLCJhIjoiY2pnczNxaWt1MDA3YzJ4bGd5MWoxcDM2MyJ9._eMNQdlu5CUTj0w9b3kvxA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";



// console.log(typeof customDom);
new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);
console.log(buildMarker);
console.log(typeof buildMarker);
// console.log(iconURLs);
buildMarker('hotels', [-74.009155, 40.705086]).addTo(map)
module.exports = mapboxgl