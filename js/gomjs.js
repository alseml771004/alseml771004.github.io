$(document).ready(function(){

  //--------------------------------------------
  // sec01 main slider ==================================== 
    var mask_a = $('#sec01_img_wrap img').width();

   $('#sec01_right').click(function(){

    $('#sec01_img_wrap').animate({
        left : -mask_a,
    },2000,function(){
        $('#sec01_img_wrap').css({
            left:0,
        }).find('img').first().appendTo('#sec01_img_wrap');
    });

   });


   function time_pc(){
    si = setInterval(function(){
        $('#sec01_right').trigger('click');
    },3000);
    }

    time_pc();

    $('.sec01_btn').hover(function(){

        clearInterval(si);

    },function(){

        time_pc();

    });

    // --------------------------------------------------
    // 모바일 main slider --============================

    var mask_w = $('#sec01_moimg_wrap img').width();

    $('#sec01_mo_right').click(function(){
 
     $('#sec01_moimg_wrap').animate({
         left : -mask_w,
     },2000,function(){
         $('#sec01_moimg_wrap').css({
             left:0,
         }).find('img').first().appendTo('#sec01_moimg_wrap');
     });
 
    });
 
 
    function time(){
     mi = setInterval(function(){
         $('#sec01_mo_right').trigger('click');
     },3000);
     }
 
     time();
 
     $('.sec01_btn').hover(function(){
 
         clearInterval(mi);
 
     },function(){
 
         time();
 
     });





    // -------------------------------------------------
    // sec02 slider =========================================

    function init(){
        $('#sec02_img_wrap').addClass('hidden');
        $('#sec02_img_wrap li:first').removeClass('hidden');
    }

    init();

    $('#sec02_right').click(function(){

        $('.sec02_con').eq(0).appendTo('#sec02_img_wrap');
        init();

    });

    $('#sec02_left').click(function(){

        $('.sec02_con').last().prependTo('#sec02_img_wrap');
        init();

    });

    // -------------------------------------------------------
    // sec03 널 위해 준비했다곰 slider =========================================
    
    var si = setInterval(function(){
        $('#sec03_img_wrap img').eq(0).appendTo('#sec03_img_wrap');
    },1000);


    $('#sec03_img_wrap').hover(function(){

        clearInterval(si);

    },function(){

        si = setInterval(function(){
            $('#sec03_img_wrap img').eq(0).appendTo('#sec03_img_wrap');
        },1000);

    });

    // sec07 탭메뉴===================================

    var tabBtn = $('.tab');
    var tabCont = $('#sec07 #sec07_container01');

    tabCont.hide().eq(0).show();
    tabBtn.click(function(e){
        e.preventDefault();
        var target = $(this);
        var index = target.index();
   
        $(tabCont).css({   
            display:'none',
        });
        $(tabCont).eq(index).css({
            display:'block',
        });

    });
 
    $('#btn02').click(function(){
         $('#btn02').css({
            backgroundColor:'rgb(1, 177, 200)',
            color:'#fff',
         });

         $('#btn01').css({
            backgroundColor:'rgba(1,177,200,0.5)',
         });
       
    });

    $('#btn01').click(function(){
        $('#btn01').css({
           backgroundColor:'rgb(1, 177, 200)',
           color:'#fff',
        });

        $('#btn02').css({
           backgroundColor:'rgba(1,177,200,0.5)',
        });


    });
    
    // -----------------------------------------------------------
    //  top  버튼 ================
    $(window).scroll(function(){
            
        sct = $(window).scrollTop();
      
        if(sct > 250 ){
            $('#top_btn').css('display','block');
        }else{
            $('#top_btn').css('display','none');
        }

    });

    $('#top_btn').click(function(){

        $('html,body').animate({
            scrollTop : 0,
        },500);
    });

    // ---------------------------------------------------------------
    // 띠배너 텍스트 효과

    let mainTxt = document.querySelector("#sec05_txt_wrap")
    window.addEventListener('scroll',function(){
        let value = window.scrollY
        console.log("scrollY",value);

        if(value > 3300){
            mainTxt.style.animation="sec05_txt_wrap_move 1s ease-out";

        }else{
            mainTxt.style.animation= "disappear 1s ease-out forwards"; 
        }
    });

   
   });//end



     





