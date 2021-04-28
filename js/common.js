$(document).ready(function(){
    var swiper = new Swiper('.mainSliderArea .swiper-container', {
        navigation: {
          nextEl: '.mainSliderArea .swiper-button-next',
          prevEl: '.mainSliderArea .swiper-button-prev',
        },
    });

    aUnlink();
    mainScroll();
    topBtn();
    mobileMenuClick();
});

function aUnlink(){
    $('.aUnlink').click(function(e){
        e.preventDefault()
    })
}


function mainScroll(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $('header').addClass('on');
        }else{
            $('header').removeClass('on');
        }
    });
}

function topBtn(){
    $('.topBtn').click(function(){
        $('html').animate({scrollTop : 0});
    })
}

function mobileMenuClick(){
    $('header .menuBtn').click(function(){
        $('header nav').toggleClass('active');
        $(this).toggleClass('active');
    })
    
    $('ul.menuArea > li > div button').click(function(){
        $(this).toggleClass('active');
        $(this).parent().next().slideToggle();
    });
}