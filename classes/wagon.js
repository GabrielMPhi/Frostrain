class Wagon {

    constructor(nom, population, infrastructure, corruption, influence_du_joueur, liste_population_wagon){
        this._nom = nom;
        this._population = population;
        this._infrastructure = infrastructure; // genre, maintenance
        this._corruption = corruption;
        this._influence_du_joueur = influence_du_joueur;
        this._liste_population = liste_population_wagon;

    // Éléments par défaut (donc pas besoin de l'ajouter dans la liste des wagon)
        this._stabilite_wagon = 100
        this._taux_mortalite = 0.01;
        this._cout_corruption = 1
        this._ressources = 100

        // ajouter territoire, taux de mortalité, etc.
    }

    get nom (){
        return this._nom
    }
    set nom(e){
        this._nom = e
    }

    get population (){
        return this._population
    }
    set population(e){
        this._population = e
    }

    get prestige (){
        return this._prestige
    }
    set prestige(e){
        this._prestige = e
    }

    get infrastructure (){
        return this._infrastructure
    }
    set infrastructure(e){
        this._infrastructure = e
    }

    get corruption (){
        return this._corruption
    }
    set corruption(e){
        this._corruption = e
    }

    get cout_corruption (){
        return this._cout_corruption
    }
    set cout_corruption(e){
        this._cout_corruption = e
    }

    get influence_du_joueur (){
        return this._influence_du_joueur
    }
    set influence_du_joueur(e){
        this._influence_du_joueur = e
    }

    changement_dans_wagon (){        
        //Économie
        this._ressources = this.adapter_ressources_wagon()
        let liste_population_assez_riche_pour_reparer = [];
        if (this._influence_du_joueur > 0 && this._infrastructure <100){
          
            for (let i = 0; i < this._liste_population.length; i++){
                if (this._liste_population[i].richesse >2){
                    liste_population_assez_riche_pour_reparer.push(this._liste_population[i])
                }
            }
            if(liste_population_assez_riche_pour_reparer !== undefined && liste_population_assez_riche_pour_reparer.length !== 0){ //pas mal fier de toute cette section. 
                let index_perso_wagon_random = getRandomInt(liste_population_assez_riche_pour_reparer.length) // semble passer par valeur et non référence... sinon ce ne serait pas utile. étrange
                let index_perso_qui_paye_la_reparation = this._liste_population.findIndex(element => element === liste_population_assez_riche_pour_reparer[index_perso_wagon_random])
                this._liste_population[index_perso_qui_paye_la_reparation].richesse-=2
                this._infrastructure+=1
                this._influence_du_joueur-=1
            }
        }
        this._ressources = this.adapter_ressources_wagon()


        // ajustements En faire une fonction plus générale et modulaire?
        if (this._infrastructure >100){
            this._infrastructure=100
        }
        if (this._influence_du_joueur <0){
            this._influence_du_joueur=0
        }

    } 

    adapter_ressources_wagon(){
        let ressources_wagon_calcul = 0
        for (let i = 0; i < this._liste_population.length; i++) {
            ressources_wagon_calcul += this._liste_population[i]._richesse;
          } 
        return ressources_wagon_calcul
    }

}