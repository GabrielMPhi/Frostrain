const affichage_population_station_actuelle = document.querySelector(
  "#affichage_population_station_actuelle"
);


const btn_affichage_population_station_actuelle = document.querySelector("#btn_affichage_population_station_actuelle")

btn_affichage_population_station_actuelle.addEventListener("click", () => {
  if (affichage_population_station_actuelle.classList.contains("is-hidden")) {
    affichage_population_station_actuelle.classList.remove("is-hidden");
  } else {
    affichage_population_station_actuelle.classList.add("is-hidden");
  };
});

function update_affichage_population_station_actuelle() {
  affichage_population_station_actuelle.innerHTML = "";

  if (jeu.joueur._station_actuelle != []) {
    let affichage_affichage_population_station_actuelle_tableau =
      document.createElement("table");
    affichage_population_station_actuelle.appendChild(
      affichage_affichage_population_station_actuelle_tableau
    );
    affichage_affichage_population_station_actuelle_tableau.createTHead();
    let prenom_habitation_station_actuelle = document.createElement("th");
    let nom_habitation_station_actuelle = document.createElement("th");
    let ressources_habitation_station_actuelle = document.createElement("th");
    let action_population_station_actuelle = document.createElement("th");
    prenom_habitation_station_actuelle.innerHTML = "Prenom"
    nom_habitation_station_actuelle.innerHTML = "Nom";
    ressources_habitation_station_actuelle.innerHTML =
      "Ressources";
    action_population_station_actuelle.innerHTML = "Actions";

    affichage_affichage_population_station_actuelle_tableau.appendChild(
      prenom_habitation_station_actuelle
    );

    affichage_affichage_population_station_actuelle_tableau.appendChild(
        nom_habitation_station_actuelle
      );

    affichage_affichage_population_station_actuelle_tableau.appendChild(
      ressources_habitation_station_actuelle
    );

    affichage_affichage_population_station_actuelle_tableau.appendChild(
      action_population_station_actuelle
    );
    jeu.joueur._station_actuelle._liste_population.sort((a, b) => {
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
    jeu.joueur._station_actuelle._liste_population.forEach((habitant) => {
      affichage_population_station_actuelle.appendChild(
        affichage_affichage_population_station_actuelle_tableau
      );
      let tbody_habitant_station_actuelle = document.createElement("tbody");
      affichage_affichage_population_station_actuelle_tableau.appendChild(
        tbody_habitant_station_actuelle
      );
      let tr_habitant_station_actuelle = document.createElement("tr");
      tbody_habitant_station_actuelle.appendChild(tr_habitant_station_actuelle);
      let td_habitant_station_actuelle_prenom = document.createElement("td");
      let td_habitant_station_actuelle_nom = document.createElement("td");
      let td_habitant_station_actuelle_richesse = document.createElement("td");

      let td_option_action = document.createElement("td");

      td_habitant_station_actuelle_prenom.innerHTML = habitant.prenom;
      td_habitant_station_actuelle_nom.innerHTML = habitant.nom;
      td_habitant_station_actuelle_richesse.innerHTML = habitant.richesse;

      affichage_affichage_population_station_actuelle_tableau.appendChild(
        td_habitant_station_actuelle_prenom
      );
      affichage_affichage_population_station_actuelle_tableau.appendChild(
        td_habitant_station_actuelle_nom
      );
      affichage_affichage_population_station_actuelle_tableau.appendChild(
        td_habitant_station_actuelle_richesse
      );

      affichage_affichage_population_station_actuelle_tableau.appendChild(
        td_option_action
      );
    });
  }
}
