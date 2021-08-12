const affichage_info_personnage_wagon_modal = document.querySelector("#affichage_info_personnage_wagon_modal");

function affichage_information_personnage_modal(perso){
    affichage_info_personnage_wagon_modal.innerHTML = ""

    let info_perso_div = document.createElement("div")
    let affichage_nom = document.createElement("p");
    let affichage_genre = document.createElement("p") 

      affichage_nom.textContent = "Nom : " + perso.prenom + " " + perso.nom
      affichage_genre. innerHTML = "Genre : " + perso.genre

      info_perso_div.appendChild(affichage_nom);
      info_perso_div.appendChild(affichage_genre)
      affichage_info_personnage_wagon_modal.appendChild(info_perso_div);


}