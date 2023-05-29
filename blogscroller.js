let blogContainer = document.getElementById("blog-container");
let post = document.querySelectorAll(".post");

let prevButton = document.getElementById("slide-arrow-prev");
let nextButton = document.getElementById("slide-arrow-next");
let slideInterval;

function moveToNextSlide() {
    let postWidth = post[0].offsetWidth;
  
    for (let i = 0; i < post.length; i++) {
      blogContainer.scrollLeft += postWidth;
  
      if (blogContainer.scrollLeft + blogContainer.clientWidth >= blogContainer.scrollWidth - postWidth) {
        blogContainer.scrollLeft = 0;
      }
    }
  }
  
function moveToPrevSlide() {
    let postWidth = post[0].offsetWidth;
  
    for (let i = 0; i < post.length; i++) {
      blogContainer.scrollLeft -= postWidth;
    }
  }
  

function startSlideInterval() {
  slideInterval = setInterval(moveToNextSlide, 3000);
}

function stopSlideInterval() {
  clearInterval(slideInterval);
}

nextButton.addEventListener("click", () => {
  moveToNextSlide();
  stopSlideInterval();
});

prevButton.addEventListener("click", () => {
  moveToPrevSlide();
  stopSlideInterval();
});

startSlideInterval();




