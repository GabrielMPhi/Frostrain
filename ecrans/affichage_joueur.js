const affichage_station_actuelle = document.querySelector(
  "#affichage_station_actuelle"
);
const affichage_liste_station_destinations = document.querySelector(
  "#affichage_liste_station_destinations"
);




function update_affichage_station_actuelle() {
  affichage_station_actuelle.innerHTML = "";

    let affichage_station_actuelle_tableau =
      document.createElement("table");
      affichage_station_actuelle.appendChild(affichage_station_actuelle_tableau)
      affichage_station_actuelle_tableau.createTHead();
    let nom_station_actuelle = document.createElement("th");
    let population_station_actuelle = document.createElement("th");
    let reserve_charbon_station_actuelle = document.createElement("th");
    let action_station_actuelle = document.createElement("th");
    nom_station_actuelle.innerHTML = "Nom de la station";
    population_station_actuelle.innerHTML = "Population de la station"
    reserve_charbon_station_actuelle.innerHTML = "Réserve de charbon"
    action_station_actuelle.innerHTML = "Actions";


    affichage_station_actuelle_tableau.appendChild(
      nom_station_actuelle
    );

    affichage_station_actuelle_tableau.appendChild(
      population_station_actuelle
    );

    affichage_station_actuelle_tableau.appendChild(
      reserve_charbon_station_actuelle
    );

    affichage_station_actuelle_tableau.appendChild(
      action_station_actuelle
    );

    affichage_station_actuelle.appendChild(
      affichage_station_actuelle_tableau
    );
    let tbody_station_actuelle = document.createElement("tbody");
    affichage_station_actuelle_tableau.appendChild(
      tbody_station_actuelle
    );
    let tr_station_actuelle = document.createElement("tr");
    tbody_station_actuelle.appendChild(tr_station_actuelle);
    let td_station_actuelle_nom = document.createElement("td");
    let td_station_actuelle_population = document.createElement("td");
    let td_station_actuelle_reserve_charbon = document.createElement("td");
    let td_option_action = document.createElement("td");


    td_station_actuelle_nom.innerHTML = jeu._joueur._station_actuelle.nom
    td_station_actuelle_population.innerHTML = jeu._joueur._station_actuelle._liste_population.length
    td_station_actuelle_reserve_charbon.innerHTML = jeu._joueur._station_actuelle._reserve_de_charbon

    affichage_station_actuelle_tableau.appendChild(
      td_station_actuelle_nom
    );
    affichage_station_actuelle_tableau.appendChild(
      td_station_actuelle_population
    );

    affichage_station_actuelle_tableau.appendChild(
      td_station_actuelle_reserve_charbon
    );

    affichage_station_actuelle_tableau.appendChild(
      td_option_action
    );

    let button_acheter_charbon = document.createElement("input");
    td_option_action.appendChild(button_acheter_charbon);
    button_acheter_charbon.id = "btn_acheter_charbon";
    button_acheter_charbon.type = "button";
    button_acheter_charbon.className = "button is-small is-success";
    button_acheter_charbon.value = "Acheter du charbon!";
    button_acheter_charbon.addEventListener("click", () => {
        jeu._joueur._ressources-=10
        jeu._joueur._reserve_de_charbon_totale+=5
        jeu._joueur._station_actuelle._reserve_de_charbon-=5
        update_affichage_joueur();
        update_affichage_wagon();

        
      });
      if (jeu._joueur._ressources <= 10){button_acheter_charbon.disabled = true}

  }




function update_affichage_liste_station_destinations() {
    affichage_liste_station_destinations.innerHTML = "";
  
    if (jeu.joueur._station_actuelle != []) {
      let affichage_liste_option_station_destinations =
        document.createElement("table");
        affichage_liste_station_destinations.appendChild(affichage_liste_option_station_destinations)
      affichage_liste_option_station_destinations.createTHead();
      let nom_option_destination = document.createElement("th");
      let action_option_destination = document.createElement("th");
      nom_option_destination.innerHTML = "Nom de la potentielle destination";
      action_option_destination.innerHTML = "En route";
      affichage_liste_option_station_destinations.appendChild(
        nom_option_destination
      );
      affichage_liste_option_station_destinations.appendChild(
        action_option_destination
      );
  
      jeu.joueur._station_actuelle._destinations_possible.forEach(
        (destination) => {
          affichage_liste_station_destinations.appendChild(
            affichage_liste_option_station_destinations
          );
          let tbody_options_destinations = document.createElement("tbody");
          affichage_liste_option_station_destinations.appendChild(
            tbody_options_destinations
          );
          let tr_option = document.createElement("tr");
          tbody_options_destinations.appendChild(tr_option);
          let td_option_nom = document.createElement("td");
          td_option_nom.innerHTML = jeu._monde._liste_des_stations.find(station => station._id === destination)._nom;
  
          let td_option_action = document.createElement("td");
          affichage_liste_option_station_destinations.appendChild(
            td_option_nom
          );
          affichage_liste_option_station_destinations.appendChild(
            td_option_action
          );


            let button_choisir_destionation = document.createElement("input");
            td_option_action.appendChild(button_choisir_destionation);
            let station_actuelle = jeu._monde._liste_des_stations.find(station => station._id === destination)
            button_choisir_destionation.id = "btn_choisir_destination_" + station_actuelle._nom;
            button_choisir_destionation.type = "button";
            button_choisir_destionation.className = "button is-small is-success";
            button_choisir_destionation.value = "En route! All aboard!";
            button_choisir_destionation.addEventListener("click", () => {
                jeu._joueur.changement_station(station_actuelle)
                function_passer_tour_simple();
                update_affichage_joueur();
                update_affichage_wagon();

                
              });

  
        }
      );
    }
  }
  