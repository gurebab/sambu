$(document).ready(function(){
    //팝업
    $(".pop .close-btn").click(function(){
        var video = $('.pop').find('video');
        $(".pop").addClass("active");
        video.get(0).pause();
    });
    //헤더 애니메이션
    $(function(){
        var lastScrollTop = 0, data = 5;
        $(window).scroll(function(e){
           var st = $(this).scrollTop();
           if(Math.abs(lastScrollTop - st) <= data){
              return;
            }
            if ((st > lastScrollTop) && (lastScrollTop>0)){
          $("header").css("top","-80px");
      
       } else {
          $("header").css("top","0px");
       }
           lastScrollTop = st;
        });
    });
    
    //헤더 메뉴 관련
    $(function(){
        //헤더 높이 컨트롤 ((평시에는 1차메뉴 line-height값과 같음))
        var height = $(".header-inner .list ul").css('line-height');
        var headerH = $("header").height();
        var ulH = $(".header-inner .list ul").height()
        
        

        $(".header-inner .list").mouseover(function(){
            $("header").height(ulH);
            $(this).addClass("active");
            $(".header-inner .header-img").addClass("active");
            $(".header-inner .header-img").height(ulH - 80);
        });
        $(".header-inner .list").mouseleave(function(){
            $("header").height(height);
            $(this).removeClass("active");
            $(".header-inner .header-img").removeClass("active");
            $(".header-inner .header-img").height(0);
        });
        $(".header-inner .list ul > li").mouseover(function(){
            var ind = $(this).index();
            console.log(ind);
            if(ind == 0){
                $(".header-inner .header-img").css({
                   'background-image' : 'url(./img/header-img01.jpg)'
                });
                $(".header-inner .header-img span.change-text").text("당신이 사는 세상을 더 아름답게");
            }
            if(ind == 1){
                $(".header-inner .header-img").css({
                    'background-image' : 'url(./img/header-img02.jpg)'
                });
                $(".header-inner .header-img span.change-text").text("내일을 향한 거침없는 전진");
            }
            if(ind == 2){
                $(".header-inner .header-img").css({
                    'background-image' : 'url(./img/header-img03.jpg)'
                });
                $(".header-inner .header-img span.change-text").text("세상의 중심을 향한 도전");
            }
            if(ind == 3){
                $(".header-inner .header-img").css({
                    'background-image' : 'url(./img/header-img04.jpg)'
                });
                $(".header-inner .header-img span.change-text").text("아름다움을 만드는");
            }
            if(ind == 4){
                $(".header-inner .header-img").css({
                    'background-image' : 'url(./img/header-img05.jpg)'
                });
                $(".header-inner .header-img span.change-text").text("독보적인 기술 , 도전적인 변화");
            }
        });
    });

    // 메인비주얼 슬라이드 관련
    $(".sec1-slide-wrap").slick({
        dots : true,
        arrows : false,
        autoplay: true,
        autoplaySpeed: 6000,
        speed : 1000,
        pauseOnHover:false,
        fade : true,
    });
    //재생, 멈춤
    $(".slick-dots").append('<li class="li-btn"></li>');
    $(".slick-dots li.li-btn").append('<div class="start active b"></div>');
    $(".slick-dots li.li-btn").append('<div class="pause b"></div>');
    $(".slick-dots li .pause").click(function(){
        $(".sec1-slide-wrap").slick('slickPause');
        $(this).addClass("active");
        $(".slick-dots li .start").removeClass("active");
    });
    $(".slick-dots li .start").click(function(){
        $(".sec1-slide-wrap").slick('slickPlay');
        $(this).addClass("active");
        $(".slick-dots li .pause").removeClass("active");
    });

    //스크롤 애니메이션
    $(window).scroll(function(){
        
        var scr = $(window).scrollTop();

        //섹션2
        var sec2set = $(".sec2").offset().top;
        if(scr >= sec2set / 1.5){
            $(".sec2 .sec-name").addClass("active");
            $(".sec2 .con .sec2-item-wrap .item").addClass("active");
        }else{
            $(".sec2 .sec-name").removeClass("active");
            $(".sec2 .con .sec2-item-wrap .item").removeClass("active");
        }

        //섹션3
        var sec3set = $(".sec3").offset().top;
        if(scr >= sec3set / 1.5){
            $(".sec3").addClass("active");
            $(".sec3 .con .sec-name").addClass("active");
        }else{
            $(".sec3").removeClass("active");
            $(".sec3 .con .sec-name").removeClass("active");
        }

        //섹션4
        var sec4set = $(".sec4").offset().top;
        if(scr >= sec4set / 1.2){
            $(".sec4 .sec-name").addClass("active");
            $(".sec4 .con .news-wrap").addClass("active");
            $(".sec4 .con .sec4-wrap .news-list ul").addClass("active");
            $(".sec4 .con .sec4-wrap .news-list .news-list-name").addClass("active");
            var count = 100;
            var durate = setInterval(cunttihs, 50);
            var today = 1585;
            function cunttihs(){
            count = count+105;
            if(count >= today){
                clearInterval(durate);
            }
            $(".countNum").text(count);
        }

            
        }else{
            $(".sec4 .sec-name").removeClass("active");
            $(".sec4 .con .news-wrap").removeClass("active");
            $(".sec4 .con .sec4-wrap .news-list ul").removeClass("active");
            $(".sec4 .con .sec4-wrap .news-list .news-list-name").removeClass("active");
            $(".countNum").text(today);
            
        }
        // ir 관련 카운트
        var sec5set = $(".sec5").offset().top;
        if(scr >= sec5set * 0.9){
            $(".sec5 .sec-name").addClass("active");
            $(".sec5 .sec5-bg-box").addClass("active");
            
        }else{
            $(".sec5 .sec-name").removeClass("active");
            $(".sec5 .sec5-bg-box").removeClass("active");
        }
        var sec5Bot = $(".sec5-bot-wrap").offset().top;
        if(scr >= sec5set){
            $(".sec5-bot-wrap").addClass("active");
        }
        else{
            $(".sec5-bot-wrap").removeClass("active");
        }
    });
    //섹션4 카드 넓이 랜덤 생성
    $(function(){
        var maxwidth = $("body .con .news-wrap").width();
        var sec4height = $("body .con .news-wrap").height();
        var minwidth = 500;
        var width = Math.random() * (maxwidth / 2 - minwidth) + minwidth;
        var height = $(".new-item > .wrap");
        console.log(width);
        
        $(".new-item.standard").css({'width' : width});
        $(".new-item.follower").css({'width' : maxwidth - $(".standard").width() - 66 });
        $(".new-item").height(height);
        console.log(sec4height +"높이");
        if($(window).width() < 799){
            $(".new-item.standard").css({'width' : '100%'});
            $(".new-item.follower").css({'width' : '100%'});
        }
    });

    //섹션5
    $(function(){
        $(".sec5 .sec5-bot-wrap .con .btn ul").hide();
        $(".sec5 .sec5-bot-wrap .con .btn span").click(function(){
            $(this).next().slideToggle(300);
            if($(window).width() < 900){
                $(".sec5 .sec5-bot-wrap .con .btn ul").hide();
            }
        });
    });
    //섹션6 패럴렉스
    $(window).scroll(function(e){
		parallax();
	});
	function parallax(){

		var scrolled = $(window).scrollTop();

		$('.sec4-re .sec4-re-img').css('background-position-y',-(scrolled*0.4)+'px');
        $('body').css('background-position-y',-(scrolled*0.5)+'px');
	}





    //모바일 메뉴관련
    $(".moblie-menu-btn").click(function(){
        $(".mobile-nav-list-wrap").addClass("active");
        $('body').css({
            'overflow-y' : 'hidden',
        });
    });
    $(".mobile-nav-list-wrap .close-btn , .void").click(function(){
        $(".mobile-nav-list-wrap").removeClass("active");
        $('body').css({
            'overflow-y' : 'inherit',
        });
    });
    $(function(){
        $(".direction").mouseover(function(){
            $(".direction").addClass("active");
        });
        $(".direction").mouseleave(function(){
            $(".direction").removeClass("active");
        });
    });
    
    $(function(){
        $(".mobile-nav-list-wrap > .list-box nav ul li ul").hide();
        $(".mobile-nav-list-wrap > .list-box nav ul li p").click(function(){
            $(this).next().slideToggle(500);
            $(".mobile-nav-list-wrap > .list-box nav ul li p").not(this).next().slideUp(500);
        });
    });
});