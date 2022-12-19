$(document).ready(function(){

    var click_num = 0;
    $('#right03').click(function(){

        click_num++;

        if( click_num > 2 ){
            click_num = 0;
        }

        $('#img_wrap').animate({
            left: -1160 * click_num,
        });
        

    });

    $('#left03').click(function(){

        click_num--;

        if( click_num < 0){
            click_num = 2;
        }
        
        $('#img_wrap').animate({
            left: -1160 * click_num,
        })

    });

    //텍스트 슬라이드 효과 이벤트
    let mainText = document.querySelector("#text_wrap")
    window.addEventListener('scroll',function(){
        let value = window.scrollY
        console.log("scrollY",value);

        if(value > 200){
            mainText.style.animation="disappear 1s ease-out forwards";

        }else{
            mainText.style.animation= "textMove 1s ease-out"; 
        }
    });

    // 베스트 아이템 슬라이드------------------------

    var vi = setInterval(function(){

        $('#con02_wrap .con02').eq(0).appendTo('#con02_wrap');
    },1000);

    $('#con02_wrap').hover(function(){

        clearInterval(vi);
    },function(){

        vi = setInterval(function(){
            $('#con02_wrap .con02').eq(0).appendTo('#con02_wrap');
        },1000);
    });

    // main_slide----------------------------
    var a = 3;
    $('.box_list').click(function(){

         a--;

         if( a == 0 ){
            $('.box_list .box').fadeIn();
            a = 3;
         }else{
            $('.box_list .box').eq(a).fadeOut();
         }

    });

    setInterval(function(){

        $('.box_list').trigger('click');


    },2000);

    // header 배경색 변화----------------
   
    $(window).scroll(function(){
        if($(this).scrollTop()> 0){
            $('header').addClass('sticky');
        }else{
            $('header').removeClass('sticky');
        }
    });








});//end