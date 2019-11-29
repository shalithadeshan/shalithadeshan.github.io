$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleclass('open');
        $('.top-nav').toggleclass('open');
    });
});