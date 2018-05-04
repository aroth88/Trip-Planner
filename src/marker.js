const mapboxgl = require('mapbox-gl');
// const main = require('./index');

const iconURLs = {
    hotels: "url(http://i.imgur.com/D9574Cu.png)",
    restaurants: "url(http://i.imgur.com/cqR6pUI.png)",
    activities: "url(http://i.imgur.com/WbMOfMl.png)"
};

const customDom = document.createElement("div"); // Create a new, detached DIV
customDom.style.width = "32px";
customDom.style.height = "39px";
customDom.style.backgroundImage;

const buildMarker = function (type, coords) {
    //build a marker
    //if type = hotel then use style.background image with hotel image
    console.log('hello')
    console.log(type);
    var newMarker = new mapboxgl.Marker(customDom)
    .setLngLat(coords)
    
    console.log('hello2')
    console.log(newMarker);
    // if (Object.keys(iconURLs).includes(type)){

        customDom.style.backgroundImage = iconURLs[type];
    // }
    return newMarker;
};

module.exports = {buildMarker, iconURLs};