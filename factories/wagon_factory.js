class WagonFactory{

    constructor(){}

    get_pays({nom, population, infrastructure, corruption, influence_du_joueur}){
        return new Wagon(nom, population, infrastructure, corruption, influence_du_joueur)
    }

}
