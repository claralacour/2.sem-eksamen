//variabler der bruges i blogslide funktionen

let blogContainer = document.getElementById("blog-container");
let post = document.querySelectorAll(".post");
let prevButton = document.getElementById("slide-arrow-prev");
let nextButton = document.getElementById("slide-arrow-next");

//her laves en eventlistener der sørger for at når der bliver klikket på nextButton, rykker slidesne sig med bredden af ét slide
//den finder altså værdien af bredden for et post, og increaser den der hedder scrollLeft af blogcontainer med postwidth
nextButton.addEventListener("click", (event) => {
    let postWidth = post[0].offsetWidth;
    blogContainer.scrollLeft += postWidth;
});

//her gøres det samme med prevButton, bare baglæns haha - og til sidst kan det ses vi har lavet et minus i stedet for plus, det er altså for at minusse postwidth
prevButton.addEventListener("click", () => {
    let postWidth = post[0].offsetWidth;
    blogContainer.scrollLeft -= postWidth;
});