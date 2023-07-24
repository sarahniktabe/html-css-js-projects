const progress = document.querySelector(".progross-bar");
window.addEventListener("scroll", scrollIndicator);

function scrollIndicator(){
    const winScroll =window.pageYOffset;
    console.log(winScroll); 
}