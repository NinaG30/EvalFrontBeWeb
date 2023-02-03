let infos = [];

createTable();

//mettre les données des inputs collectées au format JSON
function inputsToJson() {
  let prenom = document.getElementById("prenom").value;
  let nom = document.getElementById("nom").value;
  return (infosJson = {
    "prenom" : prenom,
    "nom" : nom,
  });
}

//transforme inputs en JSON, pousse les infos dans un array, créé une table avec les infos tirées de l'array
btnAdd.addEventListener("click", function () {
  newInfos = inputsToJson();
  infos.push(newInfos);  
  createTable();
});

//sert à créer la table html avec les infos des inputs
function createTable() {
  let tableau = document.getElementById("table");
  let table = `<table id="table">
    <tr>
    <th>Prenom</th>
    <th>Nom</th>
    </tr>`;
  for (i = 0; i < infos.length; i++) {
    table += "<tr>";
    table += "<td>" + infos[i]["prenom"] + "</td>";
    table += "<td>" + infos[i]["nom"] + "</td>";
    table += "</tr>";
  }
  table += "</table>";
  tableau.innerHTML = table;
}
