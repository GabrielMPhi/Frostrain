let wagon_factory = new WagonFactory(); 

let wagon_locomotive = wagon_factory.get_pays({nom: "Locomotive", population : 5, infrastructure : 100, corruption : 15, influence_du_joueur : 10}) 
let wagon_01 = wagon_factory.get_pays({nom: "Wagon #1", population : 12, infrastructure : 100, corruption : 20, influence_du_joueur : 1}) 
let wagon_02 = wagon_factory.get_pays({nom: "Wagon #2", population : 14, infrastructure : 20, corruption : 30, influence_du_joueur : 1})   
let wagon_reserve = wagon_factory.get_pays({nom: "Réserve", population : 2, infrastructure : 50, corruption : 15, influence_du_joueur : 1})



// Pays potentiels


let liste_des_wagons = [wagon_locomotive, wagon_01,wagon_02,wagon_reserve]

let index_de_wagon_locomotive = liste_des_wagons.findIndex(x => x.nom === "Locomotive")
let index_de_wagon_01 = liste_des_wagons.findIndex(x => x.nom === "Wagon #1")
let index_de_wagon_02 = liste_des_wagons.findIndex(x => x.nom === "Wagon #1")
let index_de_wagon_reserve = liste_des_wagons.findIndex(x => x.nom === "Réserve")

