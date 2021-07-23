
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