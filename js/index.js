var myswiper = new Swiper(".swiper-container", {
    loop: true,
    autoplay: 3000,
    autoplayDisableOnInteraction: false,
    pagination: ".swiper-pagination",
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
    effect: 'fade',
    fade: {
        crossFade: false,
    }
});

var zy = new Swiper('.main2', {
    loop: true,
    autoplay: 5000,
    speed: 1000,
    autoplayDisableOnInteraction: false,
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next'
});

$(function () {
    $("#content_one>div>ul>li") .hover(function () {
        var index=$(this).index()
        $(".po").show()
        $(".po>div").eq(index).show().siblings().hide();
    },function () {
        $(".po>div").hover(function () {

        },function () {
            $(".po").hide();
            $(".po>div").hide()

        })
    })
    var num=0;
    $(".po>div>p").click(function () {
        num++;
        $(".car").html(num)
        var  con=$(this).html()
        var p=$("<p>"+con+"</p>")
        $(".car_div").append(p)
    })
    $(".li").hover(function () {
        $(".car_div").stop().slideDown();
    },function(){

        $(".car_div").hover(function () {
            $(".car_div").show();
        },function () {
            $(".car_div").hide()
        })
    })
})