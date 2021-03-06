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
	jeu._joueur._station_actuelle = jeu._monde._liste_des_stations[index_montreal_station]
	update_affichage_wagon()
}
function ajouter_les_observateurs(){
	ajouter_dans_listeobservateur_tour(jeu._monde)
	ajouter_dans_listeobservateur_tour(jeu._joueur)
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