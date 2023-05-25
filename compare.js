let compareBox = document.getElementById("compare");

//den her funktion sørger for at sammenligningsboxen bliver vist, når der bliver trykket på knappen, med
//vores lille animation wuhu 


let dinBenzin = document.getElementById("dinBenzin");
let dinEl = document.getElementById("dinEl");
let dinBenzinBil = document.getElementById("dinBenzinBil");
let dinElBil = document.getElementById("dinElBil");
let errorArray = ["Du skal udfylde feltet med en gyldig benzinbil", "Du skal udfylde feltet med en gyldig elbil."];





function carCompare(){
    dinBenzinBil.innerHTML = dinBenzin.value;
    dinElBil.innerHTML = dinEl.value;
    
}

function show(){  
if(dinBenzin.value && dinEl.value != ""){
    compareBox.classList.toggle("unhide");
    dinBenzin.style.border = "none";
    dinBenzin.style.border = "none";
}

else{
    dinBenzin.placeholder = errorArray[0];
    dinBenzin.style.border = "solid 1px red";
    dinEl.placeholder = errorArray[1];
    dinEl.style.border = "solid 1px red";
}
}

