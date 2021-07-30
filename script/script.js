
// header scroll event
var prev = 0;

$(window).on("load", ()=>{
    var prev = window.scrollY;
    console.log(prev);
});

$(window).on("scroll", ()=>{
    var now = window.scrollY;
    if(prev > now){
        $("header").css({"position" : "fixed"});
    }else {
        $("header").css({"position" : "absolute"});
    }
    prev = now;
});

// archive title item show
$(".archive-item").on("click", ()=>{
    $("#archive-title-item-go").fadeIn("slow");
});
$(".archive-item-go-discover").on("click", ()=>{
    $("#archive-title-item-go").fadeOut("fast");
});