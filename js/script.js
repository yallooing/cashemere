$(document).ready(function(){
    $(".menu li:nth-child(1)").click(function(){
        $("html, body").animate({scrollTop:$("#cont_01 article:nth-child(1)").offset().top},1000);
        return false;
    })
    $(".menu li:nth-child(2)").click(function(){
        $("html, body").animate({scrollTop:$("#cont_01 article:nth-child(2)").offset().top}, 1000);
        return false;
    });

    $(".menu li:nth-child(3)").click(function(){
        $("html, body").animate({scrollTop:$("#cont_02 article:nth-child(1)").offset().top}, 1000);
        return false;
    });

    $(".menu li:nth-child(4)").click(function(){
        $("html, body").animate({scrollTop:$("#cont_02 article:nth-child(2)").offset().top}, 1000);
        return false;
    });

});