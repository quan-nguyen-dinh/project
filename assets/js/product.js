var btnContact = document.querySelector(".section__product-title-contact button");
var formContact = document.querySelector(".section__popular-contact");
var opacity = document.querySelector(".opacity-screen");
var exitProduct = document.querySelector(".section__product-form-contact span i");
var btnSummit = document.querySelector(".section__contact-list-submit button");
var submitBell = document.querySelector(".submit__bell");
var btnSubmitSucc = document.querySelector(".submit__bell-success button");
btnContact.onclick = function() {
    formContact.classList.add("active");
    opacity.classList.add("active");
}

function onSubmit() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var regexName = /^[A-Za-z0-9]{6,32}$/;
    var regexPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    var regexEmail = /^[A-Za-z0-9_.]{6,32}@([a-zA-Z0-9]{2,12})(.[a-zA-Z]{2,12})+$/;
    if (!regexName.test(name.value)) {
        name.style.border = "1px solid red";
    } else {
        name.style.border = "1px solid #ddd";

    }
    if (!regexEmail.test(email.value)) {
        email.style.border = "1px solid red";
    } else {
        email.style.border = "1px solid #ddd";

    }
    if (!regexPhone.test(phone.value)) {
        phone.style.border = "1px solid red";
    } else {
        phone.style.border = "1px solid #ddd";

    }
    if (regexName.test(name.value) && regexEmail.test(email.value) && regexPhone.test(phone.value)) {
        formContact.classList.remove("active");
        submitBell.classList.add("active");
    }
    return false;
}
btnSubmitSucc.onclick = function() {
    submitBell.classList.remove("active");
    opacity.classList.remove("active");
}
exitProduct.onclick = function() {
    formContact.classList.remove("active");
    opacity.classList.remove("active");
}