
jQuery(document).ready(function ($) {
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        dots: false,
        arrows: false,
        swipe: false,
        cssEase: 'linear',
        pauseOnHover: true,
        speed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    pauseOnHover: false,
                }
            }]
    });

    $('.carousel2').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        dots: false,
        arrows: false,
        cssEase: 'linear',
        pauseOnHover: true,
        speed: 4000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    pauseOnHover: false,
                }
            }]
    });

    $('.carousel3').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        dots: false,
        arrows: false,
        swipe: false,
        cssEase: 'linear',
        pauseOnHover: true,
        speed: 8000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    pauseOnHover: false,
                }
            }]
    });
});









