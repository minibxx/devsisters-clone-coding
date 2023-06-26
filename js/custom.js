jQuery(document).ready(function ($) {
    $('body').prepend('<header></header>');
    // $('body').append('<footer></footer>');
    $('header').load('./header.html nav');
    
    $(".counter1").counterUp({
        delay: 10,
        time: 1000,
    });
});
