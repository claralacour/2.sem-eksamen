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
    if(dinBenzin.value || dinEl.value != ""){
        compareBox.classList.toggle("unhide");
        dinBenzin.style.border = "none";
        dinEl.style.border = "none";
}

    else{
        for (let i = 0; i < errorArray.length; i++){
            if (!dinBenzin.value){
                dinBenzin.placeholder = errorArray[i];
                dinBenzin.style.border = "solid 1px red";
            }
            if (!dinEl.value){
                dinEl.placeholder = errorArray[i];
                dinEl.style.border = "solid 1px red";
            }
        }
    }
}

