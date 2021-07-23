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

function random_pays_infrasctructure_boost(){
    let pays_choisi = jeu.monde._pays_etranger[Math.floor(Math.random() * jeu._monde._pays_etranger.length)]
    pays_choisi.infrastructure+=1
}


// faire des événements du genre : choisir entre une guerre entre x et y ou une autre chose de valeur ou éthique... ajouter cout éthique du choix dans les stats.
// faire qu'entretenir de l'influence a un coût.
// Réfléchir la question du mana. Est-ce qu'on veut du mana qui recharge ou un truc du genre, il faut un équilibre. Pour tester les mécaniques, peut-être les 2?


// function effets pays

function methode_investir_en_russie() {
    jeu._monde._pays_etranger[index_de_russie].infrastructure += 1
    jeu.joueur.ressources += jeu._monde._pays_etranger[index_de_russie].infrastructure
}

function methode_investir_aux_etats_unis() {
    jeu._monde._pays_etranger[index_de_etats_unis].infrastructure += 1 
}

function methode_investir_dans_empire_qing() {
    jeu._monde._pays_etranger[index_de_empire_qing].infrastructure += 1 
}

function methode_investir_en_suede() {
    jeu._monde._pays_etranger[index_de_suede].infrastructure += 1 
}

function methode_investir_au_danemark() {
    jeu._monde._pays_etranger[index_de_danemark].infrastructure += 1 
}

function methode_corrompre_en_russie() {
    if (jeu.joueur.ressources >= jeu._monde._pays_etranger[index_de_russie].infrastructure){
    jeu._monde._pays_etranger[index_de_russie].corruption += 2
    jeu.joueur.influence_du_joueur +=1
    jeu.joueur.ressources -= jeu._monde._pays_etranger[index_de_russie].infrastructure
    } else {
        jeu._monde._pays_etranger[index_de_russie].corruption += 2
        jeu.joueur.danger += 1
    }
}



// Liste des événements du départ

let dilemme1 = function() { return factory_dilemme.getDilemme(
    {
        texte : "Une opportunité d'investissement est apparue en Russie. Que doit-on faire? Doit-on investir en <b>profiter légalement de cette opportunité</b> ou bien maximiser nos avantages par <b>la corruption</b>? Nous ne savons pas exactement combien coûtera la corruption, cela risque de nous faire détecter.",
        choix_1 : {nom_choix: "Investir légalement en Russie", effet: methode_investir_en_russie, delai: 2, repetition:false},
        choix_2 : {nom_choix: "Tenter la corruption et créer un réseau d'agents", effet: methode_corrompre_en_russie, delai: 3, repetition:true}
    }
)}

let dilemme2 = function() { return factory_dilemme.getDilemme(
    {
        texte : "Doit-on investir en <b>Allemagne</b> ou dans <b>l'Empire Ottoman</b>?",
        choix_1 : {nom_choix: "Investir en Allemagne", effet: 2, delai: 1 + getRandomInt(4), repetition:false},
        choix_2 : {nom_choix: "Investir dans l'Empire Ottoman", effet: 13, delai: 5 + getRandomInt(7), repetition:false}
    }
)}

let dilemme3 = function() { return factory_dilemme.getDilemme(
    {
        texte : "Doit-on investir en <b>Suède</b> ou au <b>Danemark</b>?",
        choix_1 : {nom_choix: "Investir en Suède", effet: methode_investir_en_suede, delai: 1 + getRandomInt(5), repetition:false},
        choix_2 : {nom_choix: "Investir au Danemark", effet: methode_investir_au_danemark, delai: 1 + getRandomInt(5), repetition:false}
    }
)}

let dilemme4 = function() { return factory_dilemme.getDilemme(
    {
        texte : "Doit-on investir dans l'<b>Empire Qing</b> ou aux <b>États-Unis</b>?",
        choix_1 : {nom_choix: "Investir dans l'Empire Qing", effet: methode_investir_dans_empire_qing, delai: 5 + getRandomInt(15), repetition:false},
        choix_2 : {nom_choix: "Investir aux États-Unis", effet: methode_investir_aux_etats_unis, delai: 5 + getRandomInt(10), repetition:false}
    }
)}

let dilemme_france_dette_1 = function() { return factory_dilemme.getDilemme(
    {
        texte : "La France s'endette. Faut-il l'aider ou l'abandonner?",
        choix_1 : {nom_choix: "L'aider!", effet: -5, delai: 5, repetition:false},
        choix_2 : {nom_choix: "Lui prêter plus!", effet: -10, delai: 1 + getRandomInt(7), repetition:false}
    }
)}

let machiavel_revient = function() { return factory_dilemme.getDilemme(
    {
        texte : "Machiavel est de retour!",
        choix_1 : {nom_choix: "L'engager!", effet: engager_machiavel, delai: 5, repetition:false},
        choix_2 : {nom_choix: "Non! Ne pas l'engager", effet: 10, delai: 1 + getRandomInt(7), repetition:false}
    }
)}

let dilemme_philosophique_1 = function() { return factory_dilemme.getDilemme(
    {
        texte : "<b>Aristote</b> ou <b>Machiavel</b>?",
        choix_1 : {nom_choix: "Aristote", effet: 1, delai: 3, repetition:true},
        choix_2 : {nom_choix: "Machiavel", effet: random_pays_infrasctructure_boost, delai: 1, repetition:false}
    }
)}

let dilemme_philosophique_2 = function() { return factory_dilemme.getDilemme(
    {
        texte : "Doit-on <b>sacrifier un innocent</b> pour le bien être <b>plus grand nombre</b>?",
        choix_1 : {nom_choix: "Sacrifier un innocent", effet: getRandomInt(10), delai: 1 + getRandomInt(5), repetition:false},
        choix_2 : {nom_choix: "Ne pas sacrifier un innocent", effet: getRandomInt(10), delai: 1 + getRandomInt(5), repetition:false}
    }
)}

//liste_des_choix.push(dilemme1)

liste_des_choix.push(dilemme1, dilemme2, dilemme3, dilemme4, dilemme_philosophique_1, dilemme_philosophique_2)

