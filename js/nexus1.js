
var w=window.innerWidth;
function prev(){
    $('.slide li:last').prependTo('.slide');
    $('.slide').css({marginLeft:-w}); 
    $('.slide').stop().animate({marginLeft:0},1000);
}

function next(){
    $('.slide').stop().animate({marginLeft:-w},1000, function(){
    $('.slide li:first').appendTo('.slide');
    $('.slide').css({marginLeft:0});
    });
}

function slide(){
    $('.slide').stop().animate({marginLeft:-w},1000, function(){
    $('.slide li:first').appendTo('.slide');
    $('.slide').css({marginLeft:0});
    });
}

setInterval(slide, 3000);

$('.prev').click(function(){
prev();
});

$('.next').click(function(){
next();
});




$(function(){
    $(window).scroll(function(){
        var ws=$(this).scrollTop();
        // 아래쪽에서
        if(ws>400){
            $('.p01').css("transform","translateY(0px)").css("opacity","1");
        }
        
        if(ws>500){
            $('.p02').css("transform","translateY(0px)").css("opacity","1");
        }
        
        if(ws>800){
            $('.p03').css("transform","translateY(0px)").css("opacity","1");
        }
        
        if(ws>1000){
            $('.p04').css("transform","translateY(0px)").css("opacity","1");
        }
        
        if(ws>1500){
            $('.p05').css("transform","translateY(0px)").css("opacity","1");
        }
        
        if(ws>1700){
            $('.p06').css("transform","translateY(0px)").css("opacity","1");
        }

    });
});

$(function(){
    $(".mini_nav").click(function(){
        $(".nav_s").slideToggle();
    });
});

$(window).resize(function(){
    if(window.innerWidth>=599){
        $('.nav_s').show();
    }
});