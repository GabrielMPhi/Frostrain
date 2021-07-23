class Avantage {

    constructor(nom, cout, effet, actif){
        this._nom = nom;
        this._cout = cout;
        this._effet = effet;
        this._actif = actif;
    }

    get nom (){
        return this._nom
    }
    set nom(e){
        this._nom = e
    }



    get cout (){
        return this._cout
    }
    set cout(e){
        this._cout = e
    }




    get effet (){
        return this._effet
    }
    set effet(e){
        this._effet = e
    }




    get actif (){
        return this._actif
    }
    set actif(e){
        this._actif = e
    }







}