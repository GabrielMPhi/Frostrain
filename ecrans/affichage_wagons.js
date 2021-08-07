function update_affichage_wagon() {
    document.getElementById("affichage_stats_pays").innerHTML = "";
    if (jeu.monde._wagons_du_train != []) {
      let affichage_tableau_wagon = document.createElement("table");
      affichage_tableau_wagon.createTHead();
      let titre_wagon_nom = document.createElement("th");
      let titre_wagon_population = document.createElement("th");
      let titre_wagon_ressources = document.createElement("th");
      let titre_wagon_infrastructure = document.createElement("th");
      let titre_wagon_corruption = document.createElement("th");
      let titre_wagon_influence_du_joueur = document.createElement("th");
      let titre_actions = document.createElement("th");
      titre_wagon_nom.innerHTML = "Nom du pays";
      titre_wagon_population.innerHTML = "Population";
      titre_wagon_ressources.innerHTML = "Ressources générale"
      titre_wagon_infrastructure.innerHTML = "Infrastructure";
      titre_wagon_corruption.innerHTML = "Corruption";
      titre_wagon_influence_du_joueur.innerHTML = "Influence du joueur";
      titre_actions.innerHTML = "Actions";
      affichage_tableau_wagon.appendChild(titre_wagon_nom);
      affichage_tableau_wagon.appendChild(titre_wagon_population);
      affichage_tableau_wagon.appendChild(titre_wagon_ressources);
      affichage_tableau_wagon.appendChild(titre_wagon_infrastructure);
      affichage_tableau_wagon.appendChild(titre_wagon_corruption);
      affichage_tableau_wagon.appendChild(titre_wagon_influence_du_joueur);
      affichage_tableau_wagon.appendChild(titre_actions);
  
      jeu._joueur._wagons_du_train.forEach((wagon) => {
        document
          .getElementById("affichage_stats_pays")
          .appendChild(affichage_tableau_wagon);
        let tbody_wagon = document.createElement("tbody");
        affichage_tableau_wagon.appendChild(tbody_wagon);
        let tr_pays = document.createElement("tr");
        tbody_wagon.appendChild(tr_pays);
        let td_wagon_nom = document.createElement("td");
        let td_wagon_population = document.createElement("td");
        let td_wagon_ressources = document.createElement("td")
        let td_wagon_infrastructure = document.createElement("td");
        let td_wagon_corruption = document.createElement("td");
        let td_wagon_influence_du_joueur = document.createElement("td");
        td_wagon_nom.innerHTML = wagon.nom;
        td_wagon_population.innerHTML = wagon.population;
        td_wagon_ressources.innerHTML = wagon._ressources + " £";
        td_wagon_infrastructure.innerHTML = wagon.infrastructure;
        td_wagon_corruption.innerHTML = wagon.corruption + " %";
        td_wagon_influence_du_joueur.innerHTML = wagon.influence_du_joueur;
        affichage_tableau_wagon.appendChild(td_wagon_nom);
        affichage_tableau_wagon.appendChild(td_wagon_population);
        affichage_tableau_wagon.appendChild(td_wagon_ressources);
        affichage_tableau_wagon.appendChild(td_wagon_infrastructure);
        affichage_tableau_wagon.appendChild(td_wagon_corruption);
        affichage_tableau_wagon.appendChild(td_wagon_influence_du_joueur);
  
        let td_btn_actions = document.createElement("td");
        affichage_tableau_wagon.appendChild(td_btn_actions);
  
        if (jeu.joueur.ressources >= wagon.cout_influence) {
          let button_influence = document.createElement("input");
          td_btn_actions.appendChild(button_influence);
          button_influence.id = "btnInfluence_pays_" + wagon.nom;
          button_influence.type = "button";
          button_influence.className = "button is-small is-success";
          button_influence.value = `+Influence. Cout : ${wagon.cout_influence}`;
          button_influence.addEventListener("click", () => {
            wagon.influence_du_joueur += 1;
            jeu._joueur.ressources -= wagon.cout_influence;
            fermer_bouton_action(button_influence.id);
          });
        }
  
        if (wagon._influence_du_joueur >= 1) {
          let button_influence_pour_richesse = document.createElement("input");
          td_btn_actions.appendChild(button_influence_pour_richesse);
          button_influence_pour_richesse.id = "btnInfluence_pour_richesse_pays_" + wagon.nom;
          button_influence_pour_richesse.type = "button";
          button_influence_pour_richesse.className = "button is-small is-success";
          button_influence_pour_richesse.value = "Influence pour richesse";
          button_influence_pour_richesse.addEventListener("click", () => {
            wagon.influence_du_joueur -= 1;
            jeu._joueur.ressources += parseInt((wagon.cout_influence/2),10);
            wagon.appauvrissement_au_hasard_dans_wagon(parseInt((wagon.cout_influence/2),10))
            fermer_bouton_action(button_influence_pour_richesse.id);
            update_affichage_population_par_wagon()
          });
        }
  
        if (wagon._influence_du_joueur >= 10 && jeu._joueur._ressources >= parseInt((wagon.cout_influence),10)) {
          let button_influence_pour_corruption = document.createElement("input");
          td_btn_actions.appendChild(button_influence_pour_corruption);
          button_influence_pour_corruption.id = "btnInfluence_pour_corruption_pays_" + wagon.nom;
          button_influence_pour_corruption.type = "button";
          button_influence_pour_corruption.className = "button is-small is-success";
          button_influence_pour_corruption.value = "Influence pour corruption";
          button_influence_pour_corruption.addEventListener("click", () => {
            wagon._corruption +=1
            wagon.influence_du_joueur -= 10;
            jeu._joueur.ressources += parseInt((wagon.cout_influence),10);
            fermer_bouton_action(button_influence_pour_corruption.id);
            update_affichage_population_par_wagon()
          });
        }
  
  
  
      });
    }
  }