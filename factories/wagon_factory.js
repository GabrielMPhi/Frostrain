class WagonFactory{

    constructor(){}

    creer_liste_personnage_wagon(nb_perso){
        let personnage_factory = new PersonnageFactory()
        let liste_perso_a_retourner = []
        for (let i = 0; i < nb_perso; i++){
            liste_perso_a_retourner.push(personnage_factory.creer_personnage())
            };
        return liste_perso_a_retourner
    }

    get_wagon({nom, population, infrastructure, corruption, influence_du_joueur}){
        let liste_population_wagon = this.creer_liste_personnage_wagon(population)
        return new Wagon(nom, population, infrastructure, corruption, influence_du_joueur, liste_population_wagon)
    }


}
