$(document).ready(function(){
    // 스크롤업            
    $('.scroll-up').click(function(){
        $('html,body').animate({scrollTop:0},1000);
    });

    
    //메뉴이동
    $('.menu li a').click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},500);
        
    });

    //포폴
    $('.portfolio li').click(function(){
        $('.portfolio-tab li').removeClass('active');
        $(this).addClass('active'); 

        let tab = $(this).attr('rel');
        console.log(tab);
        $('#'+tab).removeClass('portfolio-view');
        $('.portfolio-view').slideUp();
        $('#'+tab).slideDown();
        $('#'+tab).addClass('portfolio-view');
    });

    //프로필
    $(window).scroll(function(){
        // console.log($(window).scrollTop());
        //console.log($('.profile-img').offset().top);

        let screen = $(window).scrollTop();
        let offset = $('.profile-img, .profile ul').offset().top - $(window).height()/2 - 500 ;

        if (screen > offset){
            $('.profile-img, .profile ul').addClass('active');
        }else{
            $('.profile-img, .profile ul').removeClass('active');
        }

    });

    //TEXT
    new TypeIt("#hello", {
        strings: "HELLO：） <BR> NICE TO MEET YOU",
        speed: 50,
        waitUntilVisible: true,
      }).go();



});