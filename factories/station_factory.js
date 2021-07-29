class StationFactory{

    constructor(){}

    get_station({id, nom, population, infrastructure, corruption, influence_du_joueur, ressources, reserve_de_charbon, destinations_possible}){
        let liste_population_station = this.creer_liste_personnage_stations(population)
        return new Station(id, nom, population, infrastructure, corruption, influence_du_joueur, liste_population_station, ressources, reserve_de_charbon, destinations_possible)
    }

    creer_liste_personnage_stations(nb_perso){
        let personnage_factory = new PersonnageFactory()
        let liste_perso_a_retourner = []
        for (let i = 0; i < nb_perso; i++){
            liste_perso_a_retourner.push(personnage_factory.creer_personnage())
            };
        return liste_perso_a_retourner
    }

}