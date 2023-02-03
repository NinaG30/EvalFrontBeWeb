let infos = [];

createTable();

function inputsToJson() {
  let prenom = document.getElementById("prenom").value;
  let nom = document.getElementById("nom").value;
  return (infosJson = {
    "prenom" : prenom,
    "nom" : nom,
  });
}

btnAdd.addEventListener("click", function () {
  newInfos = inputsToJson();
  infos.push(newInfos);  
  createTable();
});

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
