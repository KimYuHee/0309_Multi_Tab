$(document).ready(function(){
    /*멀티탭 시작*/
    $("button:nth-child(1)").click(function(){
        $("button").css({
            "border":"none",
            "top":"0px"
        });

        $(this).css({
            "border":"1px solid #aaa",
            "border-bottom":"none",
            "top":"1px"
        });
        $("div#tabContent1").css({"display":"block"});
        $("div#tabContent2").css({"display":"none"});
    });
});

$(document).ready(function(){
    $("button:nth-child(2)").click(function(){
        $("button").css({
            "border":"none",
            "top":"0px"
        });

        $(this).css({
            "border":"1px solid #aaa",
            "border-bottom":"none",
            "top":"1px"
        });
        $("div#tabContent1").css({"display":"none"});
        $("div#tabContent2").css({"display":"block"});
    });
});
//$(function(){    }); 단축표현
/*멀티탭 끝*/

/*모달레이어 시작*/
$("#tabArea span.modalPoint").click(function(){
    $()
});
/*모달레이어 끝*/
