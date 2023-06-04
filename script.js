var map = L.map('map').setView([-22.898266, -42.041761], 22);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    //attribution: '© OpenStreetMap'
}).addTo(map);

googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);



//cores dos polígonos

var corSalas = {
    color: '#00FF00',
    fillColor:'#8AD46A',
    fillOpacity:0.5

}

var corCampus = {
    color: '#FF0000',
    fillColor:'#000',
    fillOpacity:0.1,
    

}

//Área da Estacio

var polygonAuditorio = L.polygon([
    [-22.897807, -42.041743],
    [-22.897955, -42.041599],
    [-22.89772, -42.041236],
    [-22.898148, -42.040885],
    [-22.899017, -42.04225],
    [-22.898343, -42.042457]
],corCampus).addTo(map).bindPopup("Campus Estácio");

// ginasio

var polygonGinasio = L.polygon([
    [-22.898117, -42.042134],
    [-22.898283, -42.041969],
    [-22.898494, -42.042242],
    [-22.898326, -42.042405]
]).addTo(map).bindPopup("Aqui é o Ginásio");

// hall principal

var polygonHall = L.polygon([
    [-22.898271, -42.041402],
    [-22.898025, -42.041626],
    [-22.897871, -42.041436],
    [-22.898122, -42.041204]
]).addTo(map).bindPopup("Aqui é o Hall principal");

// cantina

var polygonCantina = L.polygon([
    [-22.898284, -42.041298],
    [-22.898445, -42.041552],
    [-22.898521, -42.041491],
    [-22.898357, -42.041238]
]).addTo(map).bindPopup("Aqui é a Cantina");

// auditório

var polygonAuditorio = L.polygon([
    [-22.897822, -42.041748],
    [-22.897924, -42.041652],
    [-22.898004, -42.04175],
    [-22.897902, -42.041846]
]).addTo(map).bindPopup("Aqui é o Auditório");

//Fisioterapia

var polygonAuditorio = L.polygon([
    [-22.898113, -42.042115],
    [-22.89821, -42.042018],
    [-22.898092, -42.041872],
    [-22.897991, -42.041959]
]).addTo(map).bindPopup("Aqui é a Fisioterapia");

//bloco A

var polygonAuditorio = L.polygon([
    [-22.898181, -42.041504],
    [-22.898285, -42.041413],
    [-22.898495, -42.041688],
    [-22.898403, -42.041778]
], corSalas).addTo(map).bindPopup("Aqui é o Bloco A");

//bloco B

var polygonAuditorio = L.polygon([
    [-22.898473, -42.04183],
    [-22.89856, -42.041761],
    [-22.898705, -42.041947],
    [-22.898739, -42.041915],
    [-22.898933, -42.042179],
    [-22.898845, -42.042296]
],corSalas).addTo(map).bindPopup("Aqui é o Bloco B");

//bloco C

var polygonAuditorio = L.polygon([
    [-22.89809, -42.041695],
    [-22.898203, -42.041596],
    [-22.898428, -42.04188],
    [-22.898318, -42.041981]
],corSalas).addTo(map).bindPopup("Aqui é o Bloco C");

//bloco D

var polygonAuditorio = L.polygon([
    [-22.898337, -42.041978],
    [-22.898433, -42.041893],
    [-22.898555, -42.04205],
    [-22.898462, -42.042131]
],corSalas).addTo(map).bindPopup("Aqui é o Bloco D");

//bloco E

var polygonAuditorio = L.polygon([
    [-22.898496, -42.04217],
    [-22.898586, -42.042085],
    [-22.898712, -42.042245],
    [-22.898622, -42.042332]
],corSalas).addTo(map).bindPopup("Aqui é o Bloco E");

// evento de click
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
