console.log('hello world');


$(window).scroll(function(){
    console.log(window.location.pathname);
    if ($(this).scrollTop() > 50 && window.location.pathname == '/') {
        $('.navbar__inner').addClass('sticky');
        $('nav.navbar').addClass('shadow');

    } else {
        $('.navbar__inner').removeClass('sticky');
        $('nav.navbar').removeClass('shadow');

    }
});
