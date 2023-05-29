function updateProgressBar(){
    const{scrollTop, scrollHeight} = document.documentElement;
    const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%';
    console.log(scrollPercent);
    //update progress bar to the total height
    document.getElementById("progress-bar").style.setProperty('--progress', scrollPercent);

}

//eventlistener for the scroll
document.addEventListener('scroll', updateProgressBar);