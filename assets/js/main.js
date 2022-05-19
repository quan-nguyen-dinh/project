//HEADER FIXED

var itemPopular = document.querySelectorAll(".section__location-item");
console.log(itemPopular);
var statusPopular = true;
var locaLoad = itemPopular[0].offsetTop - 600;
console.log(locaLoad);
window.addEventListener('scroll', function() {
        //LOAD POPULAR
        if (window.pageYOffset > locaLoad) {
            if (statusPopular) {
                itemPopular[0].classList.add("section__location-item-goUp-north");
                itemPopular[1].classList.add("section__location-item-goUp-central");
                itemPopular[2].classList.add("section__location-item-goUp-southern");
                statusPopular = false;
            }
        }


    })
    //SLIDE HEADER
var dot = document.querySelectorAll(".header__section-slide-next li");
var slides = document.querySelectorAll(".header__section-item ");
var count = 0;
for (var i = 0; i < dot.length; i++) {
    dot[i].addEventListener("click", function() {
        for (var i = 0; i < dot.length; i++) {
            dot[i].classList.remove("active");
        }
        this.classList.add("active");
        var dotActive = this;
        var dotLoca = 0;
        for (
            dotLoca = 0;
            (dotActive = dotActive.previousElementSibling); dotLoca++
        ) {
            count++;
        }
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
            slides[dotLoca].classList.add("active");
        }
    });
}

autoSlide();

function autoSlide() {
    var time = setInterval(function() {
        var slideLoca = 0;

        var slideNow = document.querySelector(".header__section-item.active");
        for (
            slideLoca = 0;
            (slideNow = slideNow.previousElementSibling); slideLoca++
        ) {
            count++;
        }
        if (slideLoca == slides.length - 1) {
            slideLoca = 0;
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove("active");
                dot[i].classList.remove("active");
            }
            slides[slideLoca].classList.add("active");
            dot[slideLoca].classList.add("active");
        } else {
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove("active");
                dot[i].classList.remove("active");
            }
            slides[slideLoca].nextElementSibling.classList.add("active");
            dot[slideLoca].nextElementSibling.classList.add("active");
        }
    }, 3000);
}
//SLIDE POPULAR
var leftBtn = document.querySelector(".section__popular-left");
var rightBtn = document.querySelector(".section__popular-right");
var slidesPopular = document.querySelectorAll(".section__popular-item");

var countRight = 0;
rightBtn.addEventListener("click", function() {

    if (countRight < slidesPopular.length - 3) {
        countRight++;
        for (var i = 0; i < slidesPopular.length; i++) {
            slidesPopular[i].style.transform =
                "translateX(" + -countRight * 450 + "px)";
        }
    }
});
leftBtn.addEventListener("click", function() {
    if (countRight > 0) {
        countRight--;
        for (var i = 0; i < slidesPopular.length; i++) {
            slidesPopular[i].style.transform =
                "translateX(" + -countRight * 450 + "px)";
        }
    }
});
//SLIDE FAMILY
var slidesFamily = document.querySelectorAll(".section__family-list");
var seeMore = document.querySelector(".section__family-seemore");
var zoomOut = document.querySelector(".section__family-zoomout");
var sectionFamily = document.querySelector(".section__family");
var countF = 0;
seeMore.addEventListener("click", function() {
    countF++;
    if (countF < slidesFamily.length) {
        slidesFamily[countF].classList.add("active");
        if (countF == slidesFamily.length - 1) {
            sectionFamily.replaceChild(zoomOut, seeMore);
            zoomOut.style.display = "block";
            countF = 0
            ;
        }
    }
});
zoomOut.addEventListener("click", function() {
        for (var i = 1; i < slidesFamily.length; i++) {
            slidesFamily[i].classList.remove("active");
        }
        sectionFamily.replaceChild(seeMore, zoomOut);
        zoomOut.style.display = "none";
    })
    //SLIDE SERVICES
var slidesServices = document.querySelectorAll(".section__services-img");
var btnLeftServices = document.querySelector(".section__services-next-left");
var btnRightServices = document.querySelector(".section__services-next-right");
var countServices = 0;
btnRightServices.addEventListener("click", function() {

    if (countServices < slidesServices.length - 1) {
        countServices++;
        for (var i = 0; i < slidesServices.length; i++) {
            slidesServices[i].style.transform =
                "translateX(" + -countServices * 495 + "px)";
        }
    }
});
btnLeftServices.addEventListener("click", function() {
    if (countServices > 0) {
        countServices--;
        for (var i = 0; i < slidesServices.length; i++) {
            slidesServices[i].style.transform =
                "translateX(" + -countServices * 495 + "px)";
        }
    }
});
var countTime = 0;
autoSlideServices();

function autoSlideServices() {
    console.log(countTime)
    var timeServices = setInterval(function() {
        if (countTime == slidesServices.length) {
            countTime = 0;
        }
        for (var i = 0; i < slidesServices.length; i++) {
            slidesServices[i].style.transform =
                "translateX(" + -countTime * 495 + "px)";;
        }
        countTime++;
    }, 2000)

}