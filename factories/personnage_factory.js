class PersonnageFactory{

    constructor(){}

    creer_personnage(){
        let genre=this.generer_genre();
        let nom=this.generer_random_nom();
        let prenom=this.generer_random_prenom(genre);
        let surnom=this.generer_random_surnom(genre);
        let age=this.generer_age();
        let taille=this.generer_taille(genre);
        let richesse= this.generer_richesse();
        
        surnom = this.verifier_surnom_genre_taille(genre,taille, surnom)

        return new Personnage(genre, nom, prenom, surnom, age, taille, richesse)
    }

//    peut-être créer une méthode alternative avec des trucs par défaut? genre  get_personnage({_genre=this.generer_genre(), _nom=this.generer_random_nom(), 
//        return new Personnage(genre, nom, prenom, surnom, age, taille, richesse)

    generer_genre (){
        var choix_genre = ressources.liste_genre[Math.floor(Math.random() * ressources.liste_genre.length)]
        return choix_genre
    }

    generer_random_nom(){
        
        let choix_nom = ressources.noms_famille_personnages[Math.floor(Math.random() * ressources.noms_famille_personnages.length)]
        return choix_nom
    }

    generer_random_prenom(genre){
        let prenom_genere = "Bob"
        switch (genre){
        case "Homme":
            prenom_genere = ressources.liste_prenoms_habitant_homme[Math.floor(Math.random() * ressources.liste_prenoms_habitant_homme.length)]
            break; 
        case "Femme": 
            prenom_genere = ressources.liste_prenoms_habitant_femme[Math.floor(Math.random() * ressources.liste_prenoms_habitant_femme.length)]
            break; 
        case "Non-binaire":
            prenom_genere = ressources.liste_prenoms_personnages_total[Math.floor(Math.random() * ressources.liste_prenoms_personnages_total.length)]
            break;
        }
        
        return prenom_genere
    }

    generer_random_surnom(genre){
        
        let surnom_genere = "Le sans surnom"
        const probabilite_avoir_un_surnom = 90;   
        if((Math.floor(Math.random() * 100) < probabilite_avoir_un_surnom )){
        
            switch (genre){
                case "Homme":
                    surnom_genere = ressources.liste_de_surnom_homme[Math.floor(Math.random() * ressources.liste_de_surnom_homme.length)]
                    break; 
                case "Femme": 
                    surnom_genere = ressources.liste_de_surnom_femme[Math.floor(Math.random() * ressources.liste_de_surnom_femme.length)]
                    break;
                case "Non-binaire":
                    surnom_genere = ressources.liste_surnom_total[Math.floor(Math.random() * ressources.liste_surnom_total.length)]
                    break;
                }
            
            
        } else {
            surnom_genere = ""
        }
        
        return surnom_genere
    }

    generer_taille (genre){
        let taille_finale = getRandomNormalInt(70) + 135

        switch (genre){
            case "Homme":
                taille_finale = getRandomNormalInt(75) + 135
                break; 
            case "Femme": 
                taille_finale = getRandomNormalInt(65) + 135
                break; 
            case "Non-binaire":
                taille_finale = getRandomNormalInt(70) + 135
                break;
            }

        let random_pourcentage = getRandomInt(20)
        if (random_pourcentage == 1){
            taille_finale=taille_finale-getRandomInt(15)
        }
        else if (random_pourcentage == 4){
            taille_finale=taille_finale-getRandomInt(10)
        }
        else if (random_pourcentage == 5){
            taille_finale=taille_finale+getRandomInt(35)
        }

        return taille_finale
    }

    generer_age(){
        let age_final = 18
        let random_age = getRandomInt(10);
            if (random_age < 3){
                age_final = (getRandomNormalInt(10) + 18)
            }
            else if (random_age > 3 && random_age < 7){
                age_final = (getRandomNormalInt(30) + 18)
            }
            else if (random_age >= 7 ){
                age_final = (getRandomNormalInt(45) + 18)
            }
       
        return age_final
    }


    generer_richesse(){
        return getRandomInt(10)
    }

    verifier_surnom_genre_taille(genre, taille, surnom){

        if (taille >= 188 && genre=="Homme"){
            surnom = "le très grand"
        } 
        else if (taille >= 188 && genre=="Femme"){
            surnom = "la très grande"
        } 
        return surnom
    }



}