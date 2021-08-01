class Tour {
    constructor(){
      this.numero = 0;
      this.observateurs = [];
    }
  
    augmenter = function(){ 
      console.log(jeu._monde._liste_des_stations)
      this.numero++
      this.signaler();
    }
  
    signaler = function(){
      this.observateurs.forEach(objet_observateur => objet_observateur.changementTour(this)); 
    }  
}