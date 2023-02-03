function afficher() {
  clear();
  check();
}

function clear() {
  let emptyDiv = document.getElementById("emptyDiv");
  emptyDiv.innerHTML = "";
}

function check() {
  let valeur = [];
  console.log(valeur);
  let input = document.getElementsByClassName("case");
  for (i = 1; i <= input.length; i++) {
    let check = document.getElementById(`case${i}`).checked;
    if (check) {
      valeur.push(document.getElementById(`case${i}`).name);
    }
  }

  if (document.querySelector("input[value=div]:checked")) {
    let myDiv = document.createElement("div");

    for (j = 0; j < valeur.length; j++) {
      myDiv.innerHTML += valeur[j] + "<br>";
    }
    emptyDiv.appendChild(myDiv);
  } else {
    let mySelect = document.createElement("select");
    let codeSelect = "";
    for (j = 0; j < valeur.length; j++) {
      codeSelect += `<option>${valeur[j]}</option>`;
    }
    mySelect.innerHTML = codeSelect;
    emptyDiv.appendChild(mySelect);
  }
}
