$(document).ready(function(){

  // 프로젝트 가이드 서브페이지 동작

      $('.guide_con').click(function(){

        $('#sec04_sub_container').css({

            left:'0%',
        });
        
      });

      $('#sec04_sub_container').click(function(){

        $('#sec04_sub_container').css({
            left:'-97%',
        });
      });

      $('#limas_btn01').click(function(){

        $('#sec05_sub_container').css({

            left:'0%',
        });
      });

      $('#sec05_sub_container').click(function(){

        $('#sec05_sub_container').css({
            left:'-97%',
        });
      });

      // sec03 메인 텍스트 동작 구현 

      let mainTxst = document.querySelector("#sec03_main_name_wrap")
      window.addEventListener('scroll',function(){
          let value = window.scrollY
          // console.log("scrollY",value);
  
          if(value > 1600){
              mainTxst.style.animation="sec03_txt_wrap_move 1s ease-out";
  
          }else{
              mainTxst.style.animation= "disappear 1s ease-out forwards"; 
          }
      });
      
    


    //  skill 동작구현
    
    $('.skill_in_con').css({
          
          top:'0px',
    });

   
// 페이지 스크롤시 타이핑 텍스트 동작 시작

    window.addEventListener('scroll',function(){
        let value = window.scrollY
        // console.log("scrollY",value);

        if(value > 4500){
           $('#contact_con').css({
            display:'block',
           })

        }else{
          $('#contact_con').css({
              display:'none',
            }) 
        }
    });

// sub_menu li 클릭시 menu_wrap 숨기기 

$('#sub_menu_wrap li').click(function(){

  $("input:checkbox[id='menuicon']").prop("checked",false);


  

});



      

});//end