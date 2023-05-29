let scrollBtn = document.getElementById("scrollbtn");



window.onscroll = function () {scrollButton()};

function scrollButton(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

//når brugeren klikker på knappen scroller den til toppen
function scrollToTop(){
    document.body.scrollTop = 0; //til safari browsere
    document.documentElement.scrollTop = 0;
}
