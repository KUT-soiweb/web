$(function(){
    $('.labMenu').click(function(){
      outContents();
      setTimeout(function(){
          $(".circle").fadeIn(500);
          $(".labContents").fadeIn(500);
          $(".labDetail").fadeIn(500);
      }, 500);
    });

    $('.studyMenu').click(function(){
      outContents();
      setTimeout(function(){
          $(".circle").fadeIn(500);
          $(".studyContents").fadeIn(500);
          $(".studyDetail").fadeIn(500);
      }, 500);
    });

    $('.mapMenu').click(function(){
      outContents();
      setTimeout(function(){
          $(".mapContents").fadeIn(500);
      }, 500);
    });

    $('.academyMenu').click(function(){
      outContents();
      setTimeout(function(){
          $(".circle").fadeIn(500);
          $(".academyContents").fadeIn(500);
          $(".academyDetail").fadeIn(500);
      }, 500);
    });

    function outContents(){
      $(".circle").fadeOut(500);
      $(".mapContents").fadeOut(500);
      $(".detail").fadeOut(500);
      setTimeout(function(){
          $(".ocMainContents").hide();
      }, 500);
    }
});
