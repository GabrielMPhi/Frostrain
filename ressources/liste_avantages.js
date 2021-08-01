
// liste functions effets


function effet_tutoriel_avantage(){
    console.log("Effet avantage tutoriel")
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





liste_avantages.push(tutoriel_avantage)