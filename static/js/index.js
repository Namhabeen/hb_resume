$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $("#jtitle").height()){
            $(".navbar").css({"background-color":"rgb(245, 221, 3)"});
            $(".navbar").css({"min-width":"100%"});   
            $(".navbar").css({"margin-top":"0px"}); 
            $(".nav-link").css({"color":"black"});
            $(".navbar-brand").css({"color":"black"});  
        }
        else{
            $(".navbar").css({"background":"none"});
            $(".navbar").css({"min-width":"100%"});   
            $(".navbar").css({"margin-top":"0px"}); 
            $(".nav-link").css({"color":"white"});
            $(".navbar-brand").css({"color":"white"}); 
        }

    })
})