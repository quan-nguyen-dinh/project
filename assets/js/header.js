var headerNavbarLmh = document.querySelector(".header__navbar-lmh");
var statusFixed = true;


var statusPopular = true;

window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            if (statusFixed) {
                headerNavbarLmh.classList.add("header__navbar-lmh-fixed");
                statusFixed = false;
            }
        } else {
            if (!statusFixed) {
                headerNavbarLmh.classList.remove("header__navbar-lmh-fixed");
                statusFixed = true;
            }
        }  

    })