class Station {

    constructor(id, nom, population, infrastructure, corruption, influence_du_joueur, liste_population_station, reserve_de_charbon, destinations_possible){
        this._id = id;
        this._nom = nom;
        this._population = population;
        this._richesse= 0
        this._infrastructure = infrastructure; // genre, maintenance
        this._corruption = corruption;
        this._influence_du_joueur = influence_du_joueur;
        this._liste_population = liste_population_station;
        this._ressources_totale_de_population_station = 100;
        this._reserve_de_charbon = reserve_de_charbon;
        this._destinations_possible = destinations_possible;

        // Variables
        this._prix_du_charbon = 10
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

    changement_de_tour_station(){
        this._reserve_de_charbon+=1
        
        this.usure_et_froid_dans_station()
        this._ressources_totale_de_population_station = this.adapter_ressources_station()

    }
    
    ajuster_variable_de_station(){
        this._population = this._liste_population.length
        this._ressources_totale_de_population_station = this.adapter_ressources_station()
    }
    
    adapter_ressources_station(){
        let ressources_station_calcul = 0
        for (let i = 0; i < this._liste_population.length; i++) {
            ressources_station_calcul += this._liste_population[i]._richesse;
          } 
        return ressources_station_calcul
    }
    usure_et_froid_dans_station(){
        for (let i = 0; i < this._liste_population.length; i++) {
            this._liste_population[i]._richesse-=1;
          } 
    }

    achat_de_charbon(){
        jeu._joueur._ressources-=this._prix_du_charbon
        jeu._joueur._reserve_de_charbon_totale+=5
        this._liste_population[getRandomInt(this._liste_population.length)].richesse+=this._prix_du_charbon
        this._reserve_de_charbon-=5
        this._ressources_totale_de_population_station = this.adapter_ressources_station()
    }

}