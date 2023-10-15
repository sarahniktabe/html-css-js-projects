const textarea = document.querySelector('#textarea');
const remaning = document.querySelector('#textarea-remaining');
let MAX_CHARS = 250;


textarea.addEventListener('input', ()=>{
    const TotalRemaning = MAX_CHARS - textarea.value.length;
    const color = TotalRemaning < MAX_CHARS * .1 ? 'red':null;
    remaning.textContent = ` left characters ${TotalRemaning}`;
    remaning.style.color = color
    if(TotalRemaning === 0){
        remaning.textContent = `Limited amount is full ${TotalRemaning}`
    }
})