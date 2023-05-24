let compareBox = document.getElementById("compare");

//den her funktion sørger for at sammenligningsboxen bliver vist, når der bliver trykket på knappen, med
//vores lille animation wuhu 


let dinBenzin = document.getElementById("dinBenzin");
let dinEl = document.getElementById("dinEl");
let dinBenzinBil = document.getElementById("dinBenzinBil");
let dinElBil = document.getElementById("dinElBil");




function carCompare(){
    dinBenzinBil.innerHTML = dinBenzin.value;
    dinElBil.innerHTML = dinEl.value;
    
}

function show(){  
if(dinBenzin.value && dinEl.value != ""){
    compareBox.classList.toggle("unhide");
}

else{
    dinBenzin.placeholder = "Du skal udfylde feltet for at det virker makker!";
    dinBenzin.style.backgroundColor = "red"
}
}