const image_modal_choix_dilemme = document.querySelector(
  "#image_modal_choix_dilemme"
);
const affichage_tour = document.querySelector("#affichage_tour");
const affichage_score = document.querySelector("#affichage_score");
const affichage_danger = document.querySelector("#affichage_danger");
const affichage_ressources = document.querySelector("#affichage_ressources");
const affichage_choix_passes = document.querySelector(
  "#affichage_choix_passes"
);
const affichage_choix_a_faire_texte = document.querySelector(
  "#affichage_choix_a_faire_texte"
);

const modal_intro = document.querySelector("#modal_intro");
const modal_option1 = document.querySelector("#btn_option1");
const modal_option2 = document.querySelector("#btn_option2");

modal_option1.addEventListener("click", () => {
  ajouter_dans_listeobservateur_tour(jeu.dilemme_du_tour_objet.choix_1);
});
modal_option2.addEventListener("click", () => {
  ajouter_dans_listeobservateur_tour(jeu.dilemme_du_tour_objet.choix_2);
});

const btn_passer_tour_simple = document.querySelector("#btn_passer_tour_simple");

btn_passer_tour_simple.addEventListener("click", () => {
  function_passer_tour_simple()
});



const btn_affichage_wagons = document.querySelector("#btn_affichage_wagons");
const div_affichage_pays = document.querySelector("#div_affichage_pays");

btn_affichage_wagons.addEventListener("click", () => {
  if (div_affichage_pays.classList.contains("is-hidden")) {
    div_affichage_pays.classList.remove("is-hidden");
  } else {
    div_affichage_pays.classList.add("is-hidden");
  }
});

const affichage_avantages = document.querySelector("#div_affichage_avantages")
const btn_affichage_avantages = document.querySelector("#btn_affichage_avantages")

btn_affichage_avantages.addEventListener("click", () => {
  if (affichage_avantages.classList.contains("is-hidden")) {
    affichage_avantages.classList.remove("is-hidden");
  } else {
    affichage_avantages.classList.add("is-hidden");
  }
});



function update_affichage_joueur() {
  affichage_tour.innerHTML = jeu.tour.numero;
  affichage_score.innerHTML = jeu._joueur.score;
  affichage_danger.innerHTML = jeu.joueur.danger;
  affichage_ressources.innerHTML = jeu._joueur.ressources;
  update_affichage_avantages()
  image_modal_choix_dilemme.src = choix_random_image();
}

function choix_random_image() {
  return liste_random_image[
    Math.floor(Math.random() * liste_random_image.length)
  ];
}

const affichage_action_btn = document.querySelector("#modal_btn");

set_bulma_modal(
  "modal_intro",
  [],
  [
    "modal_intro_btn_close",
    "modal_intro_background",
    "btn_debut_partie_modal_card",
  ]
);
set_bulma_modal(
  "modal_choix",
  ["modal_btn"],
  ["modal_btn_close", "btn_option1", "btn_option2", "modal_background"]
);

function set_bulma_modal(id_modal, openers_elements_ids, closers_elements_ids) {
  let modal = document.getElementById(id_modal);
  openers_elements_ids.forEach((element) =>
    document.getElementById(element).addEventListener("click", () => {
      modal.classList.add("is-active");
    })
  );

  closers_elements_ids.forEach((element) =>
    document.getElementById(element).addEventListener("click", () => {
      update_liste_choix();
      update_affichage_wagon();
      modal.classList.remove("is-active");
    })
  );
}

function update_liste_choix() {
  document.getElementById("affichage_choix_passes").innerHTML = "";
  if (jeu.tour.observateurs != []) {
    let liste_choix = jeu.tour.observateurs.filter(
      (element) => element instanceof Choix
    );
    liste_choix.forEach((choix) => {
      let p_choix = document.createElement("p");
      p_choix.innerHTML = "- " + choix.nom_choix + "--- Durée : " + choix.delai;
      document.getElementById("affichage_choix_passes").appendChild(p_choix);
    });
  }
}


function function_passer_tour_simple(){
  jeu.tour.augmenter();
  update_liste_choix();
  update_affichage_joueur();
  update_affichage_wagon();
}

function fermer_bouton_action(button_id) {
  document.getElementById(button_id).remove();
  update_affichage_joueur();
  update_affichage_wagon();
}

modal_option1.onclick = function changement_de_tour_modal() {
  jeu.tour.augmenter();
  update_liste_choix();
  update_affichage_joueur();
};

modal_option2.onclick = function changement_de_tour_modal() {
  jeu.tour.augmenter();
  update_liste_choix();
  update_affichage_joueur();
};
