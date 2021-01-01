$(document).ready(function() {
    $('nav a[href*="#"]').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 5
        }, 2000);
    });

    $('#up_button').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });



    AOS.init({
        easing: 'ease',
        duration: 1800
    });
});