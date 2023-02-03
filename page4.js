let ul = document.getElementById("liste");
let tab = [];

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



inverser.addEventListener("click", function () {
  let li = document.getElementsByClassName("liPage4");

  console.log(li.length);

  for (i = 0; i < li.length; i++) {
    console.log(li[i].innerHTML);
    tab.push(li[i].innerHTML);
    console.log(tab);
  }
  ul.innerHTML = "";
  tab.reverse();
  console.log(tab);
  for (i = 0; i < tab.length; i++) {
    let liste = document.createElement("li");
    liste.innerHTML = tab[i];
    ul.appendChild(liste);
  }

  
});

