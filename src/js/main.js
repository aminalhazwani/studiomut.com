$('.header__menu').click(function(){
    $('.header__menu').toggleClass('is-open');
    $('.navigation').toggleClass('is-open');
    $('main').toggleClass('is-hidden');
});