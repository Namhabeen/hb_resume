$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $("#jtitle").height()){
            $(".navbar").css({"background-color":"rgb(245, 221, 3)"});
          
        }
        else{
            $(".navbar").css({"background":"none"});
        }

    })
})