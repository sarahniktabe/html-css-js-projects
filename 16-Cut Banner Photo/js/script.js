const skewed = document.querySelector('.angel');
window.addEventListener('scroll', function(){
    let values = -10 + window.scrollY/50;
    skewed.style.transform = "skewY("+values+"deg)"
})