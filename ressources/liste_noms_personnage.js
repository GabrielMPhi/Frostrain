let liste_prenoms_habitant_homme = [
    "Bernard", 
    "Martin", 
    "Gabriel", 
    "Mathieu", 
    "Arthur", 
    "Thomas", 
    "Christian", 
    "Simon", 
    "Geralt", 
    "Alexandre", 
    "Étienne", 
    "François", 
    "Quark", 
    "Luc", 
    "Maxime"
];

let liste_prenoms_habitant_femme = [
    "Catherine", 
    "Florence", 
    "Sophia", 
    "Morgane", 
    "Rieke", 
    "Julia", 
    "Linda", 
    "Christina", 
    "Anne-Sophie", 
    "Anne-Marie", 
    "Marie-Pier", 
    "Marie", 
    "Anne", 
    "Anzhe", 
    "Anna", 
    "Rapunzel", 
    "Éloise", 
    "Elionor",
    "Samantha", 
    "Arlette", 
    "Ilona", 
    "Ida", 
    "Louise", 
    "Gabriella"
];

let noms_famille_personnages = [
    "Monette", 
    "Ducharme", 
    "Carel", 
    "Dax", 
    "Rideout", 
    "Delorme", 
    "Picard", 
    "Sisko", 
    "Janeway", 
    "Pratte", 
    "Séguin", 
    "Gagné", 
    "Turpin", 
    "Bouras", 
    "De Rivia", 
    "Côté", 
    "Gingras", 
    "Delorme", 
    "Picard", 
    "Sisko", 
    "Janeway", 
    "Pratte", 
    "Séguin", 
    "Gagné", 
    "Turpin", 
    "Bouras", 
    "De Rivia", 
    "Côté", 
    "Gingras", 
    "Jorkunite", 
    "Oloye"]

let liste_genre = [
    "Homme", 
    "Femme", 
    "Homme", 
    "Femme", 
    "Homme", 
    "Femme", 
    "Non-binaire"
]
let liste_de_surnom_homme = [
    "Sharp", 
    "Le gros", 
    "Le juste", 
    "Toujours perdu", 
    "Le sauvage", 
    "Le fêtard", 
    "Doigts crochus", 
    "Oeil de lynx", 
    "Le ténébreux", 
    "Le Beau", 
    "le monstre", 
    "le courtisan"
]
let liste_de_surnom_femme = [
    "La juste", 
    "L'orgueilleuse", 
    "L'intriguante", 
    "La naine", 
    "la traîtresse", 
    "La grande", 
    "La fourbe", 
    "L'érudite", 
    "La sage", 
    "La grande", 
    "la subtile"
]





ressources.noms_famille_personnages = noms_famille_personnages
ressources.liste_genre = liste_genre
ressources.liste_de_surnom_femme = liste_de_surnom_femme

ressources.liste_prenoms_habitant_homme = [].concat(liste_prenoms_habitant_homme, ressources.liste_prenoms_habitant_homme)
ressources.liste_prenoms_habitant_femme = [].concat(liste_prenoms_habitant_femme, ressources.liste_prenoms_habitant_femme)

ressources.liste_prenoms_personnages_total = [].concat(ressources.liste_prenoms_habitant_homme, ressources.liste_prenoms_habitant_femme)
ressources.liste_surnom_total = [].concat(ressources.liste_de_surnom_homme, ressources.liste_de_surnom_femme)

console.log(ressources)