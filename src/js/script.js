$(document).ready(function(){
    // hamburger on click function 
  $('.hamburger').click(function(){
    $(this).hide();
    $('.close').show(300);
    $('.overlay').fadeIn(300);
    $('.navbar').show(300);
  }) 
  
//   close on click function 
  $('.close').click(function(){
    $(this).hide();
    $('.hamburger').show(300);
    $('.overlay').fadeOut(300);
    $('.navbar').hide(300);
  }) 


    
  $(window).scroll(function() {
  if ($('.hire-button').is(':visible')) {
    // do your special stuff here
    $('.hire-button').addClass("animate-pulse")
  }
});
})