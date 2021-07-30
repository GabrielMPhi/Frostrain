class Joueur {

    constructor(score, agents, liste_avantages, liste_wagons){
        this._station_actuelle = []
        this._score= score
        this._ressources = 200
        this._agents = agents
        this._danger = 0
        this._liste_avantages=liste_avantages
        this._stabilite_train = 100
        this._wagons_du_train = liste_wagons
        this._reserve_de_charbon_totale = 100

    }

    get score (){
        return this._score
    }
    set score(e){
        this._score = e
    }
    
    get ressources (){
        return this._ressources
    }
    set ressources(e){
        this._ressources = e
    }

    get agents (){
        return this._agents
    }
    set agents(e){
        this._agents = e
    }

    get danger (){
        return this._danger
    }
    set danger(e){
        this._danger = e
    }

    get liste_avantages (){
        return this._liste_avantages
    }
    set liste_avantages(e){
        this._liste_avantages = e
    }


    changement_station(nouvelle_station){
        this._station_actuelle = jeu._monde._liste_des_stations.find(station => station._id === nouvelle_station._id)
    }

    changementTour(observe){
        
        
        //charbon
        this._reserve_de_charbon_totale -= this._wagons_du_train.length

        
        for (let i = 0; i < this._wagons_du_train.length; i++) {
            this._wagons_du_train[i].croissance_wagon()

        }

        // avantages
        for (let i = 0; i < this._liste_avantages.length; i++) {
            this._liste_avantages[i].utilisation_effets()

        }
    }

}