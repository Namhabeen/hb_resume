AOS.init();

$(document).ready(function() { alert("Internet Explorer보다 Chrome 사용을 권장합니다! (Explorer 사용시 pdf 다운을 지원하지 않습니다.)"); });

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

var _showPage = function() {
    var loader = $("div.loader");
    var container = $("div.container");
    loader.css("display","none");
    container.css("display","block");
  };