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