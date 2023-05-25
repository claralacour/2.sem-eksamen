//variabler der bruges i blogslide funktionen

let blogContainer = document.getElementById("blog-container");
let post = document.querySelectorAll(".post");
let prevButton = document.getElementById("slide-arrow-prev");
let nextButton = document.getElementById("slide-arrow-next");
let slideInterval;


//først laves en funktion til at rykke til den næste side - man bruger post width til at finde ud af hvor mange pixels skal rykkes pr gang
//
//den finder altså værdien af bredden for et post, og increaser den der hedder scrollLeft af blogcontainer med postwidth



function moveToNextSlide(){
    let postWidth = post[0].offsetWidth;
    blogContainer.scrollLeft += postWidth;

    if (blogContainer.scrollLeft + blogContainer.clientWidth >= blogContainer.scrollWidth - postWidth){
        blogContainer.scrollLeft = 0;
    }
}

function moveToPrevSlide(){
    let postWidth = post[0].offsetWidth;
    blogContainer.scrollLeft -= postWidth;
}

// funktion der starter tidsintervallet
function startSlideInterval(){
    slideInterval = setInterval(moveToNextSlide, 3000);
}

// funktion der stopper tidsintervallet på slides
function stopSlideInterval(){
    clearInterval(slideInterval);
}

//her laves en eventlistener der sørger for at når der bliver klikket på nextButton, rykker slidesne sig med bredden af ét slide
nextButton.addEventListener("click", () => {
    moveToNextSlide();
    stopSlideInterval(); //stopper interval timeren når der bliver trykket på knappen
});

//her gøres det samme med prevButton, bare baglæns haha - og til sidst kan det ses vi har lavet et minus i stedet for plus, det er altså for at minusse postwidth
prevButton.addEventListener("click", () => {
    moveToPrevSlide();
    stopSlideInterval();
});

//her startes funktionen når siden loader
startSlideInterval();




