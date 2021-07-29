let station_factory = new StationFactory(); 

let montreal_station = station_factory.get_station({id:"montreal_station", nom: "Station Montréal", population : 5, infrastructure : 100, corruption : 15, influence_du_joueur : 10, ressources : 10, reserve_de_charbon : 100, destinations_possible : ["station_montreal"]}) 
let vilnius_station = station_factory.get_station({id:"vilnius_station", nom: "Station Vilnius", population : 5, infrastructure : 100, corruption : 15, influence_du_joueur : 10, ressources : 10, reserve_de_charbon : 100, destinations_possible : ["station_montreal"]}) 



let liste_des_stations = [montreal_station,vilnius_station]


let index_montreal_station = liste_des_stations.findIndex(x => x.id === "montreal_station")
let index_vilnius_station = liste_des_stations.findIndex(x => x.id === "vilnius_station")

