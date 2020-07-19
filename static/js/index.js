$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $("#jtitle").height()){
            $(".navbar").css({"background-color":"rgb(245, 221, 3)"});
            $(".navbar").css({"min-width":"100%"});   
            $(".navbar").css({"margin-right:":"1.5%"});
            $(".navbar").css({"margin-top":"0px"}); 
        }
        else{
            $(".navbar").css({"background":"none"});
        }

    })
})