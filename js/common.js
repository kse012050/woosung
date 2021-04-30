$(document).ready(function(){
    

    // a 링크 막기
    aUnlink();
    // 메뉴 스크롤 이벤트
    menuScroll();
    // 메인
    mainSlider()

    // 자주 묻는 질문
    serviceOften();

    // 모바일
    mobileMenuClick();
    topBtn();


    
});

function aUnlink(){
    $('.aUnlink').click(function(e){
        e.preventDefault()
    })
}

function mainSlider(){
    var mainSwiper = new Swiper('.mainSliderArea .swiper-container', {
        navigation: {
          nextEl: '.mainSliderArea .swiper-button-next',
          prevEl: '.mainSliderArea .swiper-button-prev',
        },
    });
}

function menuScroll(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $('header').addClass('on');
        }else{
            $('header').removeClass('on');
        }
    });

    $(window).resize(function(){
        var windowWidth = $(window).width() + 20;
        if(windowWidth > 1200){
            $('header nav > ul.menuArea > li > ul').css('display','block');
        }
    })
}

function topBtn(){
    $('.topBtn').click(function(){
        $('html').animate({scrollTop : 0});
    })
}

function mobileMenuClick(){
    $('header .menuBtn').click(function(){
        $('header').toggleClass('active');
        $('header nav').toggleClass('active');
        $(this).toggleClass('active');
    })
    
    $('ul.menuArea > li > div button').click(function(){
        $(this).toggleClass('active');
        $(this).parent().next().slideToggle();
    });


}

function serviceOften(){
    $('.oftenList button').click(function(){
        $(this).toggleClass('active');
        $(this).next().slideToggle();
    });
}