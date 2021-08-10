
// liste functions effets


function effet_tutoriel_avantage(){
    jeu.joueur.score+=1
    jeu.joueur._wagons_du_train[0].richesse+=1

}

function effet_republique_liberale_avantage(){
    jeu.joueur.score+=1
    jeu.joueur._wagons_du_train[0].richesse+=1
}


let the_avantages_factory = new Avantage_factory(); 

let tutoriel_avantage = the_avantages_factory.get_avantage({
    nom : "Avantage du tutoriel. Enjoy!",
    cout : 10,
    effet : effet_tutoriel_avantage,
    actif : true,
})

let republique_liberale_avantage = the_avantages_factory.get_avantage({
    nom : "Politique républicaines et libérales",
    cout : 10,
    effet : effet_republique_liberale_avantage,
    actif : true,
})



liste_avantages.push(tutoriel_avantage, republique_liberale_avantage)