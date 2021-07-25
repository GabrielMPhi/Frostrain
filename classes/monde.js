class Monde {

    constructor(liste_wagons){
        this._wagons_du_train= liste_wagons
    }

    changementTour(observe){
        for (let i = 0; i < this._wagons_du_train.length; i++) {
            this._wagons_du_train[i].croissance_wagon()

          }



        }

}