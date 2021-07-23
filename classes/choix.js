class Choix{
    constructor(nom_choix, effet, delai, repetition){
        this.nom_choix = nom_choix,
        this.effet = effet,
        this.delai = delai,
        this.repetition = repetition
    }

    changementTour(observe){
        if (this.repetition){
            this.appliquer_effet()
        }

        if (this.delai > 0){
            console.log("Delai diminuer")
            console.log(this.delai)
            this.delai--
            console.log(this.delai)
        } else if (this.delai <= 0 && !this.repetition){
            this.appliquer_effet()
            observe.observateurs = arrayRemove(observe.observateurs, this)
        } else {
            observe.observateurs = arrayRemove(observe.observateurs, this)
        }
    }

    appliquer_effet(){
        if (Number.isInteger(this.effet)){
            jeu.monde.danger += this.effet
            } 
        if (typeof this.effet === "function") {
            this.effet()
        }

    }

}
