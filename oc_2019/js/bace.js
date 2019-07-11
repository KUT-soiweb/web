$(function(){
$(document).ready(function(){
    $(".content-item").on("click", function() {
      $(this).next().slideToggle(300);
  
      $(this).toggleClass("ac");
      $(this).next("content-item").slideToggle();
  
    });
  });
});