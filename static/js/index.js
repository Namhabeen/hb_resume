$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height()){
            $(".navbar").css({"background-color":"yellow"});   
        }
        else{
            $(".navbar").css({"background":"none"});
        }

    })
})