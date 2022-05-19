var submitBell = document.querySelector(".submit__bell");
var btnSubmitSucc = document.querySelector(".submit__bell-success button");
var opacity = document.querySelector(".opacity-screen");

function onSubmit() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var content = document.getElementById("content");
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
    if (!content.value) {
        content.style.border = "1px solid red";
    } else {
        content.style.border = "1px solid #ddd";
    }
    if (content.value && regexEmail.test(email.value) && regexPhone.test(phone.value) && regexName.tes
    t(name.value)) {
        submitBell.classList.add("active");
        opacity.classList.add("active");
    }
    return false;
}
btnSubmitSucc.onclick = function() {
    submitBell.classList.remove("active");
    opacity.classList.remove("active");
}