$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navigation').addClass('fix');
        } else {
            $('.navigation').removeClass('fix');
        }
    });
});