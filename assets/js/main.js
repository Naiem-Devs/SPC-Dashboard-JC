(function($) {
  "use strict";

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('header').addClass("sticky");
      }
      else{
        $('header').removeClass("sticky");
      }
    });
  
     // menu 
    $('.navBtn').click( function (){ 
      $('.side-Nav').toggleClass('hide');   
      $('.body-content').toggleClass('navHide');   
    }); 
     // menu 
    $(' #navBtn').click( function (){ 
      $(this).toggleClass('active');    
      $('.side-Nav').toggleClass('active');    
      $('.bodyOverly').toggleClass('show');    
    }); 
     // menu 
    $(' .bodyOverly').click( function (){ 
      $('.mobile_Nav button').removeClass('active');    
      $('.side-Nav').removeClass('active');    
      $(this).removeClass('show');    
    }); 


    $('select').niceSelect();


    // $('.thm_btn').text(($('.thm_btn').text().replace(/[A-Za-z$-]/g, "")));
 
})(jQuery);
