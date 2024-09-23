$('div.menu-content').css("top", "60px !important");
$(window).scroll(function(){

    if ($(this).scrollTop() > 50 && window.location.pathname == '/') {
        $('.navbar__inner').addClass('sticky');
        $('nav.navbar').addClass('shadow');

    } else {
        $('.navbar__inner').removeClass('sticky');
        $('nav.navbar').removeClass('shadow');

    }


    if ($(this).scrollTop() > 0 && window.location.pathname.includes("api-reference")) {

        $('div.menu-content.sc-dFqmTM.iTCLLz').css("top", "60px !important");

    }
});




