$(document).ready(function(){
    var swiper = new Swiper('.mainSliderArea .swiper-container', {
        navigation: {
          nextEl: '.mainSliderArea .swiper-button-next',
          prevEl: '.mainSliderArea .swiper-button-prev',
        },
    });

    mainScroll();
    mobileMenuClick();
});


function mainScroll(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $('header').addClass('on');
        }else{
            $('header').removeClass('on');
        }
    });
}


function mobileMenuClick(){
    $('header .menuBtn').click(function(){
        $('header nav').toggleClass('active');
    })
    
    $('ul.menuArea > li > a').click(function(){
        $(this).next().slideToggle();
    });
}