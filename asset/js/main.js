$(document).ready(function() {

    $(".owl-carousel").owlCarousel({
        autoplay:true,
        autoplayTimeout:3000,
        items: 7,
        loop: true,
        dots: false,
        slideTransition: 'ease',
        smartSpeed: 1000,
        responsiveClass:true,
        responsive:{
            0:{
                items:2
            },
            900:{
                items:7
            },
        }
    });
    
    });