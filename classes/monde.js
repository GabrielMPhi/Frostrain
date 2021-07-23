class Monde {

    constructor(liste_pays){
        this._pays_etranger= liste_pays
    }

    changementTour(observe){
        for (let i = 0; i < this._pays_etranger.length; i++) {
            this._pays_etranger[i].croissance_pays()

          }



        }

}