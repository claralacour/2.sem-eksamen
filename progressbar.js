//run a function that compares the total height to the current position on the page
//det der sker, er at js får fat i scroll top og scroll height fra dommen
//derefter udregner vi scrolltop dividered med scrollheight(-window.innerheight) ganger det med 100 og får det i procent
//når vi consollogger kan så se hvor mange procent vi er nede på siden
function updateProgressBar(){
    const{scrollTop, scrollHeight} = document.documentElement;
    const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%';
    console.log(scrollPercent);
    //update progress var to the total height
    document.getElementById("progress-bar").style.setProperty('--progress', scrollPercent);

}

//eventlistener for the scroll
document.addEventListener('scroll', updateProgressBar);