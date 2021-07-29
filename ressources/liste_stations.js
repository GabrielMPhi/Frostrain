let station_factory = new StationFactory(); 

let montreal_station = station_factory.get_station({id:"montreal_station", nom: "Station Montréal", population : 5, infrastructure : 100, corruption : 15, influence_du_joueur : 10}) 

let liste_des_stations = [montreal_station]