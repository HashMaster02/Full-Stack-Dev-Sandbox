const accordion = document.querySelector(".accordion");
const illustration = document.querySelector(".card__image");

function onWindowResize() {
    if (window.innerWidth >= 896) {
        illustration.children[0].src = "../starter code/images/illustration-woman-online-desktop.svg"
    } else {
        illustration.children[0].src = "../starter code/images/illustration-woman-online-mobile.svg"
    }
}

function toggleCollapse(item) {
    item.classList.toggle("open");
    item.parentNode.nextElementSibling.classList.toggle("collapse");
}

onWindowResize();

accordion.addEventListener("click", (e) => toggleCollapse(e.target));
window.addEventListener('resize', onWindowResize);