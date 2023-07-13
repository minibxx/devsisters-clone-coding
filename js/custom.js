jQuery(document).ready(function ($) {
    $('body').prepend('<header></header>');
    $('body').append('<footer></footer>');
    $('header').load('./header.html nav');
    $('footer').load('./footer.html .ft');

    $(".counter1 code").counterUp({
        delay: 10,
        time: 1000,
    });
    
});
