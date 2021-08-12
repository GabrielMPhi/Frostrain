const affichage_population_par_wagon = document.querySelector(
    "#affichage_population_par_wagon"
  );
  
const btn_affichage_population_par_wagon = document.querySelector("#btn_affichage_population_par_wagon")

  btn_affichage_population_par_wagon.addEventListener("click", () => {
    if (affichage_population_par_wagon.classList.contains("is-hidden")) {
        affichage_population_par_wagon.classList.remove("is-hidden");
    } else {
        affichage_population_par_wagon.classList.add("is-hidden");
    };
  });
  
  function update_affichage_population_par_wagon() {

    affichage_population_par_wagon.innerHTML = "";

    jeu.joueur._wagons_du_train.forEach((wagon) => {

    if (wagon._liste_population != []) {
        let affichage_nom_wagon = document.createElement("h2");
        affichage_nom_wagon.classList.add("subtitle")
        affichage_nom_wagon.innerHTML = wagon.nom
        affichage_population_par_wagon.appendChild(affichage_nom_wagon);

      let affichage_population_par_wagon_actuelle_tableau = document.createElement("table");
      affichage_population_par_wagon_actuelle_tableau.createTHead();

      let prenom_habitation_wagon = document.createElement("th");
      let nom_habitation_wagon = document.createElement("th");
      let ressources_habitation_wagon = document.createElement("th");
      let action_population_wagon = document.createElement("th");
      
      prenom_habitation_wagon.innerHTML = "Prenom"
      nom_habitation_wagon.innerHTML = "Nom";
      ressources_habitation_wagon.innerHTML = "Ressources";
      action_population_wagon.innerHTML = "Actions";
  
      affichage_population_par_wagon_actuelle_tableau.appendChild(prenom_habitation_wagon);
      affichage_population_par_wagon_actuelle_tableau.appendChild(nom_habitation_wagon);
      affichage_population_par_wagon_actuelle_tableau.appendChild(ressources_habitation_wagon);
      affichage_population_par_wagon_actuelle_tableau.appendChild(action_population_wagon);
      affichage_population_par_wagon.appendChild(affichage_population_par_wagon_actuelle_tableau);

      wagon._liste_population.sort((a, b) => {
        let fa = a.nom.toLowerCase(),
          fb = b.nom.toLowerCase();
  
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });

      let tbody_habitant_wagon = document.createElement("tbody");

      wagon._liste_population.forEach((habitant) => {
        let tr_habitant_wagon = document.createElement("tr");
        let td_habitant_wagon_prenom = document.createElement("td");
        let td_habitant_wagon_nom = document.createElement("td");
        let td_habitant_wagon_richesse = document.createElement("td");
  
        let td_option_action = document.createElement("td");
  
        td_habitant_wagon_prenom.innerHTML = habitant.prenom;
        td_habitant_wagon_nom.innerHTML = habitant.nom;
        td_habitant_wagon_richesse.innerHTML = habitant.richesse;
  

        tr_habitant_wagon.appendChild(td_habitant_wagon_prenom);
        tr_habitant_wagon.appendChild(td_habitant_wagon_nom);
        tr_habitant_wagon.appendChild(td_habitant_wagon_richesse);
        tr_habitant_wagon.appendChild(td_option_action);
        tbody_habitant_wagon.appendChild(tr_habitant_wagon);
  
        affichage_population_par_wagon.appendChild(affichage_population_par_wagon_actuelle_tableau);
        affichage_population_par_wagon_actuelle_tableau.appendChild(tbody_habitant_wagon);
    
            
        let button_info_personnage_wagon = document.createElement("input");
        td_option_action.appendChild(button_info_personnage_wagon);
        button_info_personnage_wagon.id = "btn_vendre_avantage_" + habitant.nom;
        button_info_personnage_wagon.type = "button";
        button_info_personnage_wagon.className = "button is-small is-success";
        button_info_personnage_wagon.value = "Info";
        button_info_personnage_wagon.addEventListener("click", () => {
          document.getElementById("modal_desription_perso").classList.add("is-active");
        })
        button_info_personnage_wagon.addEventListener("click", () => {
            affichage_information_personnage_modal(habitant)
            update_affichage_joueur();
            update_affichage_wagon();
          });
      
      
      
  
      });
    }



  })
}