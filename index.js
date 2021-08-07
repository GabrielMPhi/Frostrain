window.addEventListener('load',
function(){
	initialisation_jeu();
	ajouter_les_observateurs();
	jeu.tour.augmenter();
	update_affichage_joueur();
	modal_intro.classList.add("is-active")
})

function initialisation_jeu(){
	let liste_des_agents = creer_liste_personnage(4)
	jeu = new Jeu(0, liste_des_wagons, liste_des_agents, liste_avantages, liste_des_stations)
	console.log(jeu._monde._liste_des_stations)
	jeu._joueur._station_actuelle = jeu._monde._liste_des_stations[index_montreal_station]
	console.log(jeu._joueur)
	console.log(jeu._monde)
	update_affichage_wagon()
}
function ajouter_les_observateurs(){
	ajouter_dans_listeobservateur_tour(jeu._monde)
	ajouter_dans_listeobservateur_tour(jeu._joueur)
}

function changement_de_tour_affichage(){
	console.log("DILEMME!!!")
    let dilemme_fabrique_du_tour = selection_des_choix()
	jeu.dilemme_du_tour_objet = dilemme_fabrique_du_tour()
    affichage_choix_a_faire_texte.innerHTML = jeu.dilemme_du_tour_objet.texte
	modal_option1.innerHTML = jeu.dilemme_du_tour_objet.choix_1.nom_choix
	modal_option2.innerHTML = jeu.dilemme_du_tour_objet.choix_2.nom_choix
	update_affichage_joueur()
	update_liste_choix()
	update_affichage_wagon()
}


function selection_des_choix(){
    let choix_du_tour_numero = getRandomInt(liste_des_choix.length)
	return liste_des_choix[choix_du_tour_numero]
}

function creer_liste_personnage(nb_perso){
	let personnage_factory = new PersonnageFactory()
	let liste_perso_a_retourner = []
	for (let i = 0; i < nb_perso; i++){
		liste_perso_a_retourner.push(personnage_factory.creer_personnage())
		};
	return liste_perso_a_retourner
	}


function prendre_x_personnages_de_liste(liste, nombre_a_prendre){
	let liste_de_personnage_selectionnes = []
	for(let i = 0; i< nombre_a_prendre; i++){
		let index = getRandomInd(list.length);
		liste_de_personnage_selectionnes.push(liste.splice(index, 1))
	}
	return liste_de_personnage_selectionnes
}