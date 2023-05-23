var map = L.map('map').setView([-22.898266, -42.041761], 22);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

googleSat.addTo(map);

// retangulo do ginasio

var polygonGinasio = L.polygon([
    [-22.898117, -42.042134],
    [-22.898283, -42.041969],
    [-22.898494, -42.042242],
    [-22.898326, -42.042405]
]).addTo(map);

polygonGinasio.bindPopup("Aqui é o Ginásio");

// retangulo do hall principal

var polygonHall = L.polygon([
    [-22.898271, -42.041402],
    [-22.898025, -42.041626],
    [-22.897871, -42.041436],
    [-22.898122, -42.041204]
]).addTo(map);

polygonHall.bindPopup("Aqui é o Hall principal");

// retangulo da cantina

var polygonCantina = L.polygon([
    [-22.898284, -42.041298],
    [-22.898445, -42.041552],
    [-22.898521, -42.041491],
    [-22.898357, -42.041238]
]).addTo(map);

polygonCantina.bindPopup("Aqui é a Cantina");







// evento de click
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
