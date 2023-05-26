const benzinCars = ["VW T-Roc", "VW T-Roc Life", "VW T-Roc Style"];
const elCars = ["Škoda Enyaq", "Škoda Enyaq Coupé"];

let benzinInput = document.getElementById("dinBenzin");
let elInput = document.getElementById("dinEl");

let benzinList = document.getElementById("benzinList");
let elList = document.getElementById("elList");



benzinInput.addEventListener("input", () => {
    //her clear vi listen
    benzinList.innerHTML ="";
    //vi laver et loop der looper gennem arrayet 
    for (let i = 0; i < benzinCars.length; i++) {
            let benzinSuggestion = document.createElement("div");
            benzinSuggestion.textContent = benzinCars[i];
            benzinList.appendChild(benzinSuggestion);
        }
    } 

);


// function suggestEl

// let benzinInput = document.getElementById("dinBenzin");
// let elInput = document.getElementById("dinEl");
// const benzinOptions = ["VW T-Roc", "VW T-Roc Life", "VW T-Roc Style"];
// const elOptions = ["Škoda Enyaq", "Škoda Enyaq Coupé"];



