let station_factory = new StationFactory(); 

let montreal_station = station_factory.get_station({id:"montreal_station", nom: "Station Montréal", population : 14, infrastructure : 100, corruption : 15, influence_du_joueur : 10, reserve_de_charbon : 100, destinations_possible : ["london_station", "vilnius_station"]})
let london_station = station_factory.get_station({id:"london_station", nom: "Station Londres", population : 20, infrastructure : 100, corruption : 15, influence_du_joueur : 10, reserve_de_charbon : 100, destinations_possible : ["montreal_station", "utrecht_station","vilnius_station"]})  
let utrecht_station = station_factory.get_station({id:"utrecht_station", nom: "Station Utrecht", population : 10, infrastructure : 100, corruption : 15, influence_du_joueur : 10, reserve_de_charbon : 100, destinations_possible : ["moscow_station", "london_station", "vilnius_station"]}) 
let vilnius_station = station_factory.get_station({id:"vilnius_station", nom: "Station Vilnius", population : 7, infrastructure : 100, corruption : 15, influence_du_joueur : 10, reserve_de_charbon : 100, destinations_possible : ["moscow_station", "london_station", "utrecht_station"]}) 
let moscow_station = station_factory.get_station({id:"moscow_station", nom: "Station Moscou", population : 15, infrastructure : 100, corruption : 15, influence_du_joueur : 10, reserve_de_charbon : 100, destinations_possible : ["montreal_station"]}) 


let liste_des_stations = [montreal_station,london_station,utrecht_station,vilnius_station, moscow_station]


let index_montreal_station = liste_des_stations.findIndex(x => x.id === "montreal_station")
let index_london_station = liste_des_stations.findIndex(x => x.id === "london_station")
let index_utrecht_station = liste_des_stations.findIndex(x => x.id === "utrecht_station")
let index_vilnius_station = liste_des_stations.findIndex(x => x.id === "vilnius_station")
let index_moscow_station = liste_des_stations.findIndex(x => x.id === "moscow_station")
