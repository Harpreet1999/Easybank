$(function(){
    $overlay = $('.header > div');
    $body = $('body');
    $('.header').on('click', '.head_menu', function(){
        $varn = $('.header');
        if($varn.hasClass('open')){ //close overlay
            $varn.removeClass('open');
            $overlay.removeClass('fade-in');
            $overlay.addClass('fade-out');
            $body.removeClass('noscroll');
        }
        else {//open overlay
            $varn.addClass('open'); 
            $overlay.removeClass('fade-out');
            $overlay.addClass('fade-in');
            $body.addClass('noscroll');
        };
    });
});
