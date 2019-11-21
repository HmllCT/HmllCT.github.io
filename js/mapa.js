//De fenir a variavel mapa
var map = new L.Map("oMeuMapa", {center: [40.633258, -8.659097],zoom: 15});
				var osmUrl="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
				var osmAttrib="Map data OpenStreetMap contributors";
				var osm = new L.TileLayer(osmUrl, {attribution: osmAttrib});
				
				map.addLayer(osm);
				
//Dstacar pontos			
var iconeUA = L.icon({ iconUrl: "http://xcoa.av.it.pt/ua.png" });

var pontos = [
		L.marker([40.633258, -8.659097], {icon: iconeUA}).bindPopup("DETI"),
	];
	
	//Comando que adiciona pontos ao mapa
	for(i in pontos) {
		pontos[i].addTo(map);
	}
	
	//Ajusta o zoom de forma a mostrar todos os pontos
var grupo = new L.featureGroup(pontos);
	map.fitBounds(grupo.getBounds());
