console.log("js is running...");

let benzinInput = document.getElementById("dinBenzin");
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
    })
}