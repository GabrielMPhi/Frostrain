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
        this._taux_croissance_population = 0.04;
        this._taux_mortalite = 0.01;
        this._cout_corruption = 1
        this._taux_croissance_economie = 0.05
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

    croissance_wagon (){
        console.log(this._liste_population)
        
        //Économie
        this._ressources = this.adapter_ressources_wagon()

        //Cout corruption
        this._cout_corruption = parseInt(100-this._corruption) + parseInt((this._infrastructure/100),10)

        if (this._influence_du_joueur > 0 && this._stabilite_wagon <100){
            this._stabilite_wagon+=this._influence_du_joueur

        }



        if (this._influence_du_joueur > 0){
            jeu._joueur._ressources+= parseInt((this._influence_du_joueur*(this._corruption/10)),10)
            let jet_de_hasard_etre_pris_pour_corruption = getRandomInt(100)
            let chance_detre_pris = parseInt(((100-this._corruption)/10), 10)+this._influence_du_joueur
            console.log("Jet = " + jet_de_hasard_etre_pris_pour_corruption)
            console.log("Score à battre = " + chance_detre_pris)
            if (jet_de_hasard_etre_pris_pour_corruption<=chance_detre_pris){
                jeu.joueur._danger+=1
            }


        }



        // ajustements En faire une fonction plus générale et modulaire?
        if (this._stabilite_wagon >100){
            this._stabilite_wagon=100
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