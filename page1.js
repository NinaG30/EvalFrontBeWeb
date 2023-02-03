//Vide le div "img"
function nomoreImg() {
  let a = document.getElementById("img");
  a.innerHTML = "";
}

//Assigne les bonnes images suivant les liens au div "img"
function getImg(num) {
  let a = document.getElementById("img");
  if (num === 1) {
    a.innerHTML = `<img src="src/img1.jpg">`;
  } else if (num === 2) {
    a.innerHTML = `<img src="src/img2.jpg">`;
  } else if (num === 3) {
    a.innerHTML = `<img src="src/img3.jpg">`;
  }
}
