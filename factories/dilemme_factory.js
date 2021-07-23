class Dilemme_factory{

    constructor(){}

    getDilemme({texte, choix_1, choix_2}){
        let choix1 = new Choix(choix_1.nom_choix, choix_1.effet, choix_1.delai, choix_1.repetition)
        let choix2 = new Choix(choix_2.nom_choix, choix_2.effet, choix_2.delai, choix_2.repetition)
        return new Dilemme(texte, choix1, choix2)
    }

}
