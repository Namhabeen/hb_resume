$(document).ready(function(){ 
    $(window).scroll(function(){ 
      var scroll = $(window).scrollTop(); 
      if(scroll>1){ 
        $(".navbar").css("background","rgb(245, 221, 3)"); 
      } 
      else{ 
        $(".navbar").css("background","none"); 
      } 
    }) 
  })