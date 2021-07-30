
function update_affichage_liste_station_destinations() {
    affichage_liste_station_destinations.innerHTML = "";
  
    if (jeu.joueur._station_actuelle != []) {
      let affichage_liste_option_station_destinations =
        document.createElement("table");
        affichage_liste_station_destinations.appendChild(affichage_liste_option_station_destinations)
      affichage_liste_option_station_destinations.createTHead();
      let nom_option_destination = document.createElement("th");
      let action_option_destination = document.createElement("th");
      nom_option_destination.innerHTML = "Nom de l'option";
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
          console.log(destination)
          console.log(jeu._monde._liste_des_stations)
          console.log(jeu._monde._liste_des_stations.find(station => station._id === destination))
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
            button_choisir_destionation.id = "btn_choisir_destination_" + jeu._monde._liste_des_stations.find(station => station._id === destination)._nom;
            button_choisir_destionation.type = "button";
            button_choisir_destionation.className = "button is-small is-success";
            button_choisir_destionation.value = "En route! All aboard!";
            button_choisir_destionation.addEventListener("click", () => {
                jeu.joueur.score+=5
                jeu.joueur.danger+=5
                update_affichage_joueur();
                update_affichage_wagon();
              });





  
        }
      );
    }
  }
  