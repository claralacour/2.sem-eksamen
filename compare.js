
console.log("js is running...");

const benzinList = ["VW T-Roc", "Citroën C4 Cactus", "Ford Fiesta", "Kia Rio", "Audi A1", "Fiat Punto"];


//når vi skriver noget i parantes, betyder det at funktion bruger disse parametre. Vi kan bruge parametrene til at få værdier igennem funktionen
//så når vi kalder funktionen kan vi ændre værdien i disse parametre, vha. funktionen
function autoComplete(benzinInput, benzinList){
    //vi tilføjer en eventlistener der hedder input på vores benzininput, og hertil har vi en anonym funktion der kalder på closeList()
    //den er anonym fordi vi ikke behøver at give den et navn også, når den bare kalder på closeList i think
    benzinInput.addEventListener('input', function(){
        //luk listen hvis den allerede er åben
        closeList();
        
        //hvis input er tomt, så luk funktionen(og "this" er noget man bruger fordi det er i konteksten af det der allerede sker, altså inputtet)
        if (!this.value)
            return;

        //her laver vi en suggestions div
        suggestions = document.createElement('div');
        //her giver vi div'en id'et "suggestions"
        suggestions.setAttribute('id', 'suggestions');
        //og her siger vi at det er et child element til "this"(altså vores benzinInput)
        this.parentNode.appendChild(suggestions);
        
        //så looper vi gennem vores array og finder matches 
        for (let i=0; i<benzinList.length; i++){
            //hvis benzinList inkludere værdien i inputfeltet skydes den næste kodeblok igang
            if (benzinList[i].toUpperCase().includes(this.value.toUpperCase())){
                //først skabes en div der viser én suggestion
                suggestion = document.createElement('div');
                //dernæst ændrer vi teksten i listen til at være det der står i vores array
                suggestion.innerHTML = benzinList[i];
                //her tilføjer vi en eventlistener til vores suggestion liste
                suggestion.addEventListener('click', function(){
                    benzinInput.value = this.innerHTML;
                    closeList();
                });
                //til sidst siger vi at det er et child element til "suggestions", det gør den til en del af vores første liste
                suggestions.appendChild(suggestion);
            }
        }
    });
    function closeList(){
        let suggestions = document.getElementById("suggestions");
        if (suggestions)
        suggestions.parentNode.removeChild(suggestions);
    }
}
autoComplete(document.getElementById('dinbenzin'), benzinList);

//nu til elbilen////////////
const elBilList = ["Skoda Enyaq", "VW ID.4", "Tesla Model Y", "Audi Q4 e-tron", "Polestar 2", "Ford Mustand Mach-E", "BMW iX3"];

function autoComplete(elInput, elBilList){
    benzinInput.addEventListener('input', function(){
        closeList();

        if (!this.value)
            return;

        suggestions = document.createElement('div');
        suggestions.setAttribute('id', 'suggestions');
        this.parentNode.appendChild(suggestions);
        
        for (let i=0; i<elBilList.length; i++){
            if (elBilList[i].toUpperCase().includes(this.value.toUpperCase())){
                suggestion = document.createElement('div');
                suggestion.innerHTML = elBilList[i];
                suggestion.addEventListener('click', function(){
                    elInput.value = this.innerHTML;
                    closeList();
                });
                suggestions.appendChild(suggestion);
            }
        }
    });
    function closeList(){
        let suggestions = document.getElementById("suggestions");
        if (suggestions)
        suggestions.parentNode.removeChild(suggestions);
    }
}
autoComplete(document.getElementById('dinel'), elBilList);


//sammenligningsbox/////////////////////////////
let compareBox = document.getElementById("compare");
let dinBenzin = document.getElementById("dinbenzin");
let dinEl = document.getElementById("dinel");
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
                dinBenzin.placeholder = errorArray[0];
                dinBenzin.style.border = "solid 1px red";
            }
            if (!dinEl.value){
                dinEl.placeholder = errorArray[i];
                dinEl.style.border = "solid 1px red";
            }
        }
    }
}



