styleSelect.addEventListener("change", function(){
    let css1 = document.getElementById('css1');
    let css2 = document.getElementById('css2'); 
    let css3 = document.getElementById('css3');     
    let p = document.getElementById('petitP');
    console.log(css1);
    let optSelected = this.value;
   if(optSelected == css1.id){
    p.style.background = "red";
    p.style.color = "white";
   }else if(optSelected == css2.id){
    p.style.background = "yellow";
    p.style.color = "black";
   }else if(optSelected == css3.id){
    p.style.background = "blue";
    p.style.color = "white";
   }else {
    p.style.background="";
    p.style.color="";
   }
})
