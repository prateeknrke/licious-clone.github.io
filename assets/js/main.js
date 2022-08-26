// banner carousel
$('.carousel-banner').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    items: 1,
    navText: [`<i class="fa-solid fa-chevron-left"></i>`, `<i class="fa-solid fa-chevron-right"></i>`],
    smartSpeed: 1000,
    responsive: {
        0: {
            nav: false,
            autoplay: true,
            autoplayTimeout: 5000,
            loop: true,
            autoplaySpeed: 1000,
        },
        768: {

        }
    }
})

// best seller carousel
$('.carousel-best-seller').owlCarousel({
    loop: false,
    // margin: 10,
    nav: true,
    dots: false,
    slideBy: 4,
    items: 4,
    navText: [`<i class="fa-solid fa-chevron-left"></i>`, `<i class="fa-solid fa-chevron-right"></i>`],
    responsive: {
        // breakpoint from 0 up
        0: {
            items: 2,
            slideBy: 2,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplaySpeed: 1000,
            loop: true,
        },
        576: {
            items: 2,
            slideBy: 2,
        },
        767: {
            items: 3,
            slideBy: 3,
        },
        991: {
            items: 3,
            slideBy: 3,
        },
        1400: {
            items: 4,
            slideBy: 4,
        },
    },
})

// news carousel
$('.carousel-news-section').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    slideBy: 5,
    items: 5,
    navText: [`<i class="fa-solid fa-chevron-left"></i>`, `<i class="fa-solid fa-chevron-right"></i>`],
    responsive: {
        // breakpoint from 0 up
        0: {
            items: 2,
            slideBy: 2,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplaySpeed: 1000,
            loop: true,
        },
        502: {
            items: 3,
            slideBy: 3,
        },
        767: {
            items: 3,
            slideBy: 3,
        },
        1033: {
            items: 4,
            slideBy: 4,
        },
        1400: {
            items: 5,
            slideBy: 5,
        },
    },
})

// subscribe icon onscroll functionality
window.onscroll = function () {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.querySelector(".top-header").style.display = "none";
        document.querySelector("header").classList.add("header-active");
    }
    else {
        document.querySelector(".top-header").style.display = "block";
        document.querySelector("header").classList.remove("header-active");
    }

    // for scroll top btn
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $(".scroll-top").show();
    }
    else {
        $(".scroll-top").hide();
    }

}


// menu toggle
$('.burger').click(function () {
    $('body').toggleClass('menu-open');
    $('html').toggleClass('menu-open');
    $('.burger').toggleClass('clicked');
})

// scroll top
$(".scroll-top").click(function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})