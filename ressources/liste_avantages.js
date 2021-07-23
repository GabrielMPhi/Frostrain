
// liste functions effets


function effet_bureau_a_vilnius(){
    console.log("Effet Bureau à Vilnius")

}

let the_avantages_factory = new Avantage_factory(); 

let bureau_a_vilnius = the_avantages_factory.get_avantage({
    nom : "Bureau à Vilnius",
    cout : 10,
    effet : effet_bureau_a_vilnius,
    actif : false
})

let bureau_a_londres = the_avantages_factory.get_avantage({
    nom : "Bureau à Londres",
    cout : 10,
    effet : effet_bureau_a_vilnius,
    actif : false
})



liste_avantages.push(bureau_a_vilnius, bureau_a_londres)