class Avantage_factory{

    constructor(){}

    get_avantage({nom, cout, effet, actif}){
        return new Avantage(nom, cout, effet, actif)
    }

}
