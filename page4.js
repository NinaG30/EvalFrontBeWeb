let ul = document.getElementById("liste");
let tab = [];

//Premier essai :

// UP.addEventListener("click", function () {
//   let liste = `<li>- Un petit 1</li>
//     <li>- Un petit 2</li>
//     <li>- Un petit 3</li>
//     <li>- Un petit 4</li>`;
//   ul.innerHTML = liste;
// });

// DOWN.addEventListener("click", function () {
// let liste = `<li>- Un petit 4</li>
//   <li>- Un petit 3</li>
//   <li>- Un petit 2</li>
//   <li>- Un petit 1</li>`;
// ul.innerHTML = liste;
// });

//second essai / Inverse le sens des li
inverser.addEventListener("click", function () {
  let li = document.getElementsByClassName("liPage4");
  for (i = 0; i < li.length; i++) {
    tab.push(li[i].innerHTML); //pousse la valeur des li dans un array
  }
  ul.innerHTML = ""; //supp les li
  tab.reverse(); //inverse les valeurs de l'array

  //creation de nouveaux li avec l'array "retourné"
  for (i = 0; i < tab.length; i++) {
    let liste = document.createElement("li");
    liste.innerHTML = tab[i];
    ul.appendChild(liste);
  }
});
