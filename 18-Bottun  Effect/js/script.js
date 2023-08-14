const button =document.querySelectorAll(a);

button.forEach((btn)=>{
btn.addEventListener('click', function(e){
let x = e.clientX;
console.log(x)
})
})