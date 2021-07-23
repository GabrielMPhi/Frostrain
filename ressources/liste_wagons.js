let wagon_factory = new WagonFactory(); 

let royaume_uni = wagon_factory.get_pays({nom: "Royaume-Uni", population : 21226, prestige : 100, infrastructure : 100, corruption : 15}) // http://www.ggdc.net/maddison/other_books/appendix_B.pdf
let france = wagon_factory.get_pays({nom: "France", population : 31246, prestige : 100, infrastructure : 100, corruption : 20}) 
let russie = wagon_factory.get_pays({nom: "Russie", population : 54765, prestige : 100, infrastructure : 20, corruption : 30})    // https://en.wikipedia.org/wiki/Estimates_of_historical_world_population#By_world_region
let pays_bas = wagon_factory.get_pays({nom: "Pays-Bas", population : 2355,  prestige : 100, infrastructure : 50, corruption : 15})
let etats_unis = wagon_factory.get_pays({nom: "États-Unis", population : 9981,  prestige : 100, infrastructure : 100, corruption : 20})
let suede = wagon_factory.get_pays({nom: "Suède", population : 2585,  prestige : 100, infrastructure : 100, corruption : 5})
let danemark = wagon_factory.get_pays({nom: "Danemark", population : 1155, prestige : 50, infrastructure : 70, corruption : 5})
let qing = wagon_factory.get_pays({nom: "Empire Qing", population : 381000,  prestige : 200, infrastructure : 30, corruption : 70})


// Pays potentiels


let liste_des_wagons = [france,russie, pays_bas,etats_unis, suede, danemark, qing]

let index_de_france = liste_des_wagons.findIndex(x => x.nom === "France")
let index_de_russie = liste_des_wagons.findIndex(x => x.nom === "Russie")
let index_de_pays_bas = liste_des_wagons.findIndex(x => x.nom === "Pays-Bas")
let index_de_etats_unis = liste_des_wagons.findIndex(x => x.nom === "États-Unis")
let index_de_suede = liste_des_wagons.findIndex(x => x.nom === "Suède")
let index_de_danemark = liste_des_wagons.findIndex(x => x.nom === "Danemark")
let index_de_empire_qing = liste_des_wagons.findIndex(x => x.nom === "Empire Qing")
