const elBilList = ["Skoda Enyaq", "VW ID.4", "Tesla Model Y", "Audi Q4 e-tron", "Polestar 2", "Ford Mustand Mach-E", "BMW iX3"];

function autoComplete(elInput, elBilList){
    benzinInput.addEventListener('input', function(){
        closeList();

        if (!this.value)
            return;

        elSuggestions = document.createElement('div');
        elSuggestions.setAttribute('id', 'elsuggestions');
        this.parentNode.appendChild(elSuggestions);
        
        for (let i=0; i<elBilList.length; i++){
            if (elBilList[i].toUpperCase().includes(this.value.toUpperCase())){
                elsuggestion = document.createElement('div');
                elsuggestion.innerHTML = elBilList[i];
                elsuggestion.addEventListener('click', function(){
                    elInput.value = this.innerHTML;
                    closeList();
                });
                elSuggestions.appendChild(elsuggestion);
            }
        }
    });
    function closeList(){
        let elSuggestions = document.getElementById("elsuggestions");
        if (elSuggestions)
        elSuggestions.parentNode.removeChild(elSuggestions);
    }
}
autoComplete(document.getElementById('dinel'), elBilList);