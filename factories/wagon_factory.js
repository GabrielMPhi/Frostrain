class WagonFactory{

    constructor(){}

    get_pays({nom, population, territoire, prestige, infrastructure, corruption}){
        return new Wagon(nom, population, territoire, prestige, infrastructure, corruption)
    }

}
