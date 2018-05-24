$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navigation').addClass('fix');
        } else {
            $('.navigation').removeClass('fix');
        }
    });
});

$(document).ready(function(){
    var section_items=$('.section'),
        navigation_items=$('#navigation a');

    updateNavigation();
    $(window).on('scroll', function(){
        updateNavigation();
    });

    navigation_items.on('click',function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    $('.scroll_down').on('click',function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    function updateNavigation() {
        section_items.each(function(){
            $this = $(this);
            var activeSection = $('#navigation a[href="#'+$this.attr('id')+'"]').data('number') - 1;
            if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
                navigation_items.eq(activeSection).addClass('active');
            }else {
                navigation_items.eq(activeSection).removeClass('active');
            }
        });
    }

    function smoothScroll(target){
        $('body,html').animate(
            {'scrollTop':target.offset().top}
            ,600);
    }

});