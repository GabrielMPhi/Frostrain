function update_affichage_wagon() {
    document.getElementById("affichage_stats_pays").innerHTML = "";
    if (jeu.monde._wagons_du_train != []) {
      let affichage_tableau_pays = document.createElement("table");
      affichage_tableau_pays.createTHead();
      let titre_pays_nom = document.createElement("th");
      let titre_pays_population = document.createElement("th");
      let titre_pays_gdp = document.createElement("th");
      let titre_pays_infrastructure = document.createElement("th");
      let titre_pays_corruption = document.createElement("th");
      let titre_pays_influence_du_joueur = document.createElement("th");
      let titre_actions = document.createElement("th");
      titre_pays_nom.innerHTML = "Nom du pays";
      titre_pays_population.innerHTML = "Population";
      titre_pays_gdp.innerHTML = "Richesse générale"
      titre_pays_infrastructure.innerHTML = "Infrastructure";
      titre_pays_corruption.innerHTML = "Corruption";
      titre_pays_influence_du_joueur.innerHTML = "Influence du joueur";
      titre_actions.innerHTML = "Actions";
      affichage_tableau_pays.appendChild(titre_pays_nom);
      affichage_tableau_pays.appendChild(titre_pays_population);
      affichage_tableau_pays.appendChild(titre_pays_gdp);
      affichage_tableau_pays.appendChild(titre_pays_infrastructure);
      affichage_tableau_pays.appendChild(titre_pays_corruption);
      affichage_tableau_pays.appendChild(titre_pays_influence_du_joueur);
      affichage_tableau_pays.appendChild(titre_actions);
  
      jeu.monde._wagons_du_train.forEach((pays) => {
        document
          .getElementById("affichage_stats_pays")
          .appendChild(affichage_tableau_pays);
        let tbody_pays = document.createElement("tbody");
        affichage_tableau_pays.appendChild(tbody_pays);
        let tr_pays = document.createElement("tr");
        tbody_pays.appendChild(tr_pays);
        let td_pays_nom = document.createElement("td");
        let td_pays_population = document.createElement("td");
        let td_pays_gdp = document.createElement("td")
        let td_pays_infrastructure = document.createElement("td");
        let td_pays_corruption = document.createElement("td");
        let td_pays_influence_du_joueur = document.createElement("td");
        td_pays_nom.innerHTML = pays.nom;
        td_pays_population.innerHTML = pays.population;
        td_pays_gdp.innerHTML = pays._gdp + " £";
        td_pays_infrastructure.innerHTML = pays.infrastructure;
        td_pays_corruption.innerHTML = pays.corruption + " %";
        td_pays_influence_du_joueur.innerHTML = pays.influence_du_joueur;
        affichage_tableau_pays.appendChild(td_pays_nom);
        affichage_tableau_pays.appendChild(td_pays_population);
        affichage_tableau_pays.appendChild(td_pays_gdp);
        affichage_tableau_pays.appendChild(td_pays_infrastructure);
        affichage_tableau_pays.appendChild(td_pays_corruption);
        affichage_tableau_pays.appendChild(td_pays_influence_du_joueur);
  
        let td_btn_actions = document.createElement("td");
        affichage_tableau_pays.appendChild(td_btn_actions);
  
        if (jeu.joueur.ressources >= pays.cout_corruption) {
          let button_influence = document.createElement("input");
          td_btn_actions.appendChild(button_influence);
          button_influence.id = "btnInfluence_pays_" + pays.nom;
          button_influence.type = "button";
          button_influence.className = "button is-small is-success";
          button_influence.value = `+Influence. Cout : ${pays.cout_corruption}`;
          button_influence.addEventListener("click", () => {
            pays.influence_du_joueur += 1;
            jeu._joueur.ressources -= pays.cout_corruption;
            fermer_bouton_action(button_influence.id);
          });
        }
  
        if (pays._influence_du_joueur >= 1) {
          let button_influence_pour_richesse = document.createElement("input");
          td_btn_actions.appendChild(button_influence_pour_richesse);
          button_influence_pour_richesse.id = "btnInfluence_pour_richesse_pays_" + pays.nom;
          button_influence_pour_richesse.type = "button";
          button_influence_pour_richesse.className = "button is-small is-success";
          button_influence_pour_richesse.value = "Influence pour richesse";
          button_influence_pour_richesse.addEventListener("click", () => {
            pays.influence_du_joueur -= 1;
            jeu._joueur.ressources += parseInt((pays.cout_corruption/2),10);
            fermer_bouton_action(button_influence_pour_richesse.id);
          });
        }
  
        if (pays._influence_du_joueur >= 10 && jeu._joueur._ressources >= parseInt((pays.cout_corruption),10)) {
          let button_influence_pour_corruption = document.createElement("input");
          td_btn_actions.appendChild(button_influence_pour_corruption);
          button_influence_pour_corruption.id = "btnInfluence_pour_corruption_pays_" + pays.nom;
          button_influence_pour_corruption.type = "button";
          button_influence_pour_corruption.className = "button is-small is-success";
          button_influence_pour_corruption.value = "Influence pour corruption";
          button_influence_pour_corruption.addEventListener("click", () => {
            pays._corruption +=1
            pays.influence_du_joueur -= 10;
            jeu._joueur.ressources += parseInt((pays.cout_corruption),10);
            fermer_bouton_action(button_influence_pour_corruption.id);
          });
        }
  
  
  
      });
    }
  }