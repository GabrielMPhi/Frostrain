class WagonFactory{

    constructor(){}

    get_pays({nom, population, territoire, prestige, infrastructure, corruption, influence_du_joueur}){
        return new Wagon(nom, population, territoire, prestige, infrastructure, corruption, influence_du_joueur)
    }

}
