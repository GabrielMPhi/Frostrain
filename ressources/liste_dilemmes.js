let factory_dilemme = new Dilemme_factory(); 


// Banque de fonction utile...

function methode_investir_en_france() {
    jeu._monde._pays_etranger[index_de_france].infrastructure += 100 
    jeu.influence+=1
    if (liste_des_choix.indexOf(dilemme_france_dette_1) != -1 ){
    } else {
        liste_des_choix.push(dilemme_france_dette_1)
    }
    
}

// function génériques

function random_wagon_infrasctructure_boost(){
    let wagon_choisit = jeu.joueur._wagons_du_train[Math.floor(Math.random() * jeu.joueur._wagons_du_train)]
    wagon_choisit.infrastructure+=1
}

// function effets wagon

function methode_dilemme_contribuer_a_fete() {
    jeu.joueur.score += 1
    if (jeu.joueur.ressources <=5){
        jeu.joueur.ressources=0
    } else {
        jeu.joueur.ressources -= 5
    }
}
function methode_dilemme_economiser() {
    jeu.joueur.ressources += 5
}


// Liste des événements du départ

let dilemme1 = function() { return factory_dilemme.getDilemme(
    {
        texte : "Il y a une fête dans un wagon. Que doit-on faire? <b>Contribuer pour les préparatifs et risquer d'utiliser de précieuses ressources</b> ou bien <b>économiser des ressources</b>?",
        choix_1 : {nom_choix: "Contribuer à la fête", effet: methode_dilemme_contribuer_a_fete, delai: 2, repetition:false},
        choix_2 : {nom_choix: "Économiser", effet: methode_dilemme_economiser, delai: 3, repetition:true}
    }
)}

let dilemme_philosophique_1 = function() { return factory_dilemme.getDilemme(
    {
        texte : "Doit-on <b>sacrifier un innocent</b> pour le bien être <b>plus grand nombre</b>?",
        choix_1 : {nom_choix: "Sacrifier un innocent", effet: getRandomInt(10), delai: 1 + getRandomInt(5), repetition:false},
        choix_2 : {nom_choix: "Ne pas sacrifier un innocent", effet: getRandomInt(10), delai: 1 + getRandomInt(5), repetition:false}
    }
)}

//liste_des_choix.push(dilemme1)

liste_des_choix.push(dilemme1, dilemme_philosophique_1)

