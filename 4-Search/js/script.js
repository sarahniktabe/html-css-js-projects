var search = document.querySelector(".search");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

btn.addEventListener('click', addStyle);

function addStyle () {
    search.classList.toggle('active');
}