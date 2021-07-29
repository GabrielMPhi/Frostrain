class Monde {

    constructor(liste_wagons, liste_des_stations){
        this._wagons_du_train= liste_wagons;
        this._liste_des_stations= liste_des_stations;
    }

    changementTour(observe){
        for (let i = 0; i < this._wagons_du_train.length; i++) {
            this._wagons_du_train[i].croissance_wagon()

          }



        }

}