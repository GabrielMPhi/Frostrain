const affichage_avantages = document.querySelector("#div_affichage_avantages");
const btn_affichage_avantages = document.querySelector(
  "#btn_affichage_avantages"
);

btn_affichage_avantages.addEventListener("click", () => {
  if (affichage_avantages.classList.contains("is-hidden")) {
    affichage_avantages.classList.remove("is-hidden");
  } else {
    affichage_avantages.classList.add("is-hidden");
  }
});

function update_affichage_avantages() {
    affichage_avantages.innerHTML = "";
    if (jeu.joueur.liste_avantages != []) {
      let affichage_tableau_avantages = document.createElement("table");
      affichage_tableau_avantages.createTHead();
      let nom_avantage = document.createElement("th");
      let action_avantage = document.createElement("th");
      nom_avantage.innerHTML = "Nom de l'avantage";
      action_avantage.innerHTML = "Action liée à l'avantage"
      affichage_tableau_avantages.appendChild(nom_avantage)
      affichage_tableau_avantages.appendChild(action_avantage)
  
      jeu.joueur.liste_avantages.forEach((avantage) => {
        
        if (avantage.actif == true){
          affichage_avantages.appendChild(affichage_tableau_avantages);
          let tbody_avantage = document.createElement("tbody");
          affichage_tableau_avantages.appendChild(tbody_avantage);
          let tr_avantage = document.createElement("tr");
          tbody_avantage.appendChild(tr_avantage);
          let td_avantage_nom = document.createElement("td");
          td_avantage_nom.innerHTML=avantage.nom
          
          let td_avantage_action = document.createElement("td");
          affichage_tableau_avantages.appendChild(td_avantage_nom)
          affichage_tableau_avantages.appendChild(td_avantage_action)


            let button_vendre_avantage = document.createElement("input");
            td_avantage_action.appendChild(button_vendre_avantage);
            button_vendre_avantage.id = "btn_vendre_avantage_" + avantage.nom;
            button_vendre_avantage.type = "button";
            button_vendre_avantage.className = "button is-small is-success";
            button_vendre_avantage.value = "Abolir";
            button_vendre_avantage.disabled = true;
            button_vendre_avantage.addEventListener("click", () => {
                jeu.joueur.ressources+=100
                jeu.joueur.danger+=5
                eliminer_x_de_liste_y(avantage, jeu.joueur._liste_avantages)
                update_affichage_joueur();
                update_affichage_wagon();
                disableButtons(button_vendre_avantage)
              });


            if (jeu.joueur.ressources <= 199 && button_vendre_avantage.disabled){
                enableButtons(button_vendre_avantage)
            } 
            //else {
            //    disableButtons(button_vendre_avantage)
            //}

  
        }
  
      })
  
    }
  
  }


