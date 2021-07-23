window.addEventListener('load',
function(){
	initialisation_dilemme();
	ajouter_les_observateurs();
	jeu.tour.augmenter();
	update_affichage_joueur();
	modal_intro.classList.add("is-active")
})

function initialisation_dilemme(){
// master list = peins de perso

	let liste_jeu_personnages=  creer_liste_personnage(nombre_de_personnage)
	let liste_des_agents = creer_liste_personnage(4)
	jeu = new Jeu(0, liste_des_wagons, liste_jeu_personnages, liste_des_agents, liste_avantages)
	update_affichage_pays()
	console.log(jeu._monde)
}
function ajouter_les_observateurs(){
	ajouter_dans_listeobservateur_tour(jeu._monde)
	ajouter_dans_listeobservateur_tour(jeu._joueur)
}

affichage_action_btn.onclick = function changement_de_tour_affichage(){
    let dilemme_fabrique_du_tour = selection_des_choix()
	jeu.dilemme_du_tour_objet = dilemme_fabrique_du_tour()
    affichage_choix_a_faire_texte.innerHTML = jeu.dilemme_du_tour_objet.texte
	modal_option1.innerHTML = jeu.dilemme_du_tour_objet.choix_1.nom_choix
	modal_option2.innerHTML = jeu.dilemme_du_tour_objet.choix_2.nom_choix
	update_affichage_joueur()
	update_liste_choix()
	update_affichage_pays()
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