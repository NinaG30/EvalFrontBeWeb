function afficher() {
  clear();
  checkANDmake();
}

//fonction qui enlève le contenu d'un div spécifique
function clear() {
  let emptyDiv = document.getElementById("emptyDiv");
  emptyDiv.innerHTML = "";
}

function checkANDmake() {
  let valeur = [];
  console.log(valeur);
  let input = document.getElementsByClassName("case");
  for (i = 1; i <= input.length; i++) {
    let check = document.getElementById(`case${i}`).checked;
    if (check) {
      //pousse les valeurs choisies dans un tableau
      valeur.push(document.getElementById(`case${i}`).name);
    }
  }
  //Si le radio div est coché :
  if (document.querySelector("input[value=div]:checked")) {
    let myDiv = document.createElement("div");

    //boucle pour la création du texte dans le div avec les valeurs du tableau
    for (j = 0; j < valeur.length; j++) {
      myDiv.innerHTML += valeur[j] + "<br>";
    }
    emptyDiv.appendChild(myDiv); //attache le contenu au contenant
  //Si le radio Select est coché :
  } else {
    let mySelect = document.createElement("select");
    let codeSelect = "";
    //boucle pour la création des opt du select avec les valeurs du tableau
    for (j = 0; j < valeur.length; j++) {
      codeSelect += `<option>${valeur[j]}</option>`;
    }
    mySelect.innerHTML = codeSelect;
    emptyDiv.appendChild(mySelect); //attache le contenu au contenant
  }
}
