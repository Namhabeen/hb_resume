$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $("#jtitle").height()){
            $(".navbar").css({"background-color":"yellow"});
            $(".navbar").css({"width":"100%"});   
            $(".navbar").css({"margin-left:":"0%"});
        }
        else{
            $(".navbar").css({"background":"none"});
        }

    })
})