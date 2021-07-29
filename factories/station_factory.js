class StationFactory{

    constructor(){}

    get_station({id, nom, population, infrastructure, corruption, influence_du_joueur}){
        console.log("OK!")
        return new Station(id, nom, population, infrastructure, corruption, influence_du_joueur)
    }
}