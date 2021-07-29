class Station {

    constructor(id, nom, population, infrastructure, corruption, influence_du_joueur, liste_population_station, ressources, reserve_de_charbon, destinations_possible){
        this._id = id;
        this._nom = nom;
        this._population = population;
        this._infrastructure = infrastructure; // genre, maintenance
        this._corruption = corruption;
        this._influence_du_joueur = influence_du_joueur;
        this._liste_population = liste_population_station;
        this._ressources = ressources;
        this._reserve_de_charbon = reserve_de_charbon;
        this._destinations_possible = destinations_possible;
    }
    get id (){
        return this._id
    }
    set id(e){
        this._id = e
    }

    get nom (){
        return this._nom
    }
    set nom(e){
        this._nom = e
    }
}