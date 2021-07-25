
let NormalrandNum = function creer_rand_num(){
    return (Math.random() + Math.random() + Math.random()) / 3
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomNormalInt(max) {
    return Math.floor(NormalrandNum() * Math.floor(max));
}

function arrayRemove(arr, value){
	return arr.filter(function(ele){
        return ele !== value 
    })
}

function ajouter_dans_listeobservateur_tour(objet){
	jeu.tour.observateurs.push(objet)
}


function disableButtons(buttonName){
    buttonName.disabled = true
}


function enableButtons(buttonName){
    buttonName.disabled = false
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