
function tabs(evt, numPage) {
  let i, pages, tablinks;
  pages = document.getElementsByClassName("pages");
  //change le style CSS sur les éléments comportant la class "pages"
  for (i = 0; i < pages.length; i++) {
    pages[i].style.display = "none"; //change le display
    pages[i].style.width = 50 + "vw"; //change la largeur
    pages[i].style.margin = "auto"; //changer la marge
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    //supprimee la class "active sur tous les liens"
    tablinks[i].className = tablinks[i].className.replace(" active", ""); 
  }
  let a = document.getElementById(numPage);
  a.style.display = "block"; //fait apparaitre le bon bloc suivant le lien choisi dans le menu

  evt.currentTarget.className += " active"; //ajoute la classe "active" au lien cliqué
}
