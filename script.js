let nav = document.querySelector("#sideMenu");
let button = document.querySelector("#buttonHolder");
let mask = document.querySelector("#mask");

button.onclick = () => {
    nav.classList.toggle("open");
}

mask.onclick = () => {
    nav.classList.toggle("open");
}