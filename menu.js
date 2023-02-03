//Toggle event menu button
btn.addEventListener("click", function () {
  let menu = document.getElementById("menu");
  if (menu.style.visibility == "hidden") {
    menu.style.visibility = "visible";
  } else {
    menu.style.visibility = "hidden";
  }
});
