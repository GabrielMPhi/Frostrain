class Personnage {
    constructor(
      genre,
      nom,
      prenom,
      surnom,
      age,
      taille,
      richesse,
    ) {
      this._genre = genre;
      this._nom = nom;
      this._prenom = prenom;
      this._surnom = surnom;
      this._age = age;
      this._taille = taille;
      this._richesse = richesse;
    }
  
    get nom() {
      return this._nom;
    }
  
    set nom(e) {
      this._nom = e;
    }
  
    get prenom() {
      return this._prenom;
    }
  
    set prenom(e) {
      this._prenom = e;
    }
  
    get surnom() {
      return this._surnom;
    }
  
    set surnom(e) {
      this._surnom = e;
    }
  
    get age() {
      return this._age;
    }
  
    set age(e) {
      this._age = e;
    }
  
    get taille() {
      return this._taille;
    }
  
    set taille(e) {
      this._taille = e;
    }
  
    get richesse() {
      return this._richesse;
    }
  
    set richesse(e) {
      this._richesse = e;
    }
  
 

  }
  