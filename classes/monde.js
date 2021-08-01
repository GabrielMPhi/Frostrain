class Monde {

    constructor(liste_des_stations){
        this._liste_des_stations= liste_des_stations;
    }

    changementTour(observe){
        for (let i = 0; i < this._liste_des_stations.length; i++) {
            this._liste_des_stations[i].changement_de_tour_station()

        }



        }

}