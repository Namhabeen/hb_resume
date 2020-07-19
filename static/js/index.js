$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $("#brace").height()){
            $(".navbar").css({"background-color":"yellow; width:100%; margin-left:0;"});   
        }
        else{
            $(".navbar").css({"background":"none"});
        }

    })
})