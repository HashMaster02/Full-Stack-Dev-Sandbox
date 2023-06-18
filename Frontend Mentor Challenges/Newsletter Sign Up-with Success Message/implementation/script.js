const newsletter = document.querySelector(".newsletter");
const subscribeBtn = newsletter.querySelector("#subscribe-btn");
const thankyou = document.querySelector(".thankyou");
const dismissBtn = thankyou.querySelector("#dismiss-btn");

const image = document.querySelector(".graphic");

onWindowResize();

function onWindowResize() {
    if (window.innerWidth >= 896) {
        image.children[0].src = "../starter code/assets/images/illustration-sign-up-desktop.svg"
    } else {
        image.children[0].src = "../starter code/assets/images/illustration-sign-up-mobile.svg"
    }
}

function validateEmail() {
    const email = newsletter.querySelector("#email-box").value;
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// function validateEmail(email) {
//     var re = /\S+@\S+\.\S+/;
//     return re.test(email);
// }

function subscribe() {
    if (validateEmail()) {
        newsletter.classList.add("hide");
        thankyou.classList.remove("hide");
    } else {
        newsletter.querySelector("#email-box").classList.add("invalid");
    }
}

function dismissMessage() {
    thankyou.classList.add("hide");
}

window.addEventListener('resize', onWindowResize);
subscribeBtn.addEventListener('click', subscribe);
dismissBtn.addEventListener('click', dismissMessage);