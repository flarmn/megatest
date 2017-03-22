 

$(document).ready(function(){

// STATIC VARS
steps = 1;

// ----------------------------------------------------------------------------- GETHERING and SETTING PARAMETERS
var onloadcaruselsetup;
    clearTimeout(onloadcaruselsetup);
    onloadcaruselsetup = setTimeout(window_resize_completed, 700);
    


//........................................................................... MAIN MOVE FORWARD TIMER
carouselDefaultAnim = setInterval(function(){
caruselMoveForward();
}, 5000);
//..................................................................../

// ---------------------------------------------------------------------------------- ONWINDOW RESIZE 
var windowresizetimer;
$(window).resize(function() {
    clearTimeout(windowresizetimer);
    windowresizetimer = setTimeout(window_resize_completed, 500);
    
//--------------------------------------/
});


//....................................................................
$(document).on('click',".carousel-back-control",function() {
clearInterval(carouselDefaultAnim);
caruselMoveForward();
});
//..................................................................../


//....................................................................
$(document).on('click',".carousel-forward-control",function() {
clearInterval(carouselDefaultAnim);
caruselMoveBackward();
});


//**********************************************************
});





// ----------------------------------------------------------------------------------- FUNCTIONS SECTION

function window_resize_completed(){

steps = 0;
clearInterval(carouselDefaultAnim);
$(".carousel-frames").css("left", "0px");



// getting window size (width)
window_width = $(window).width();

// getting image size
image_width = $(".carousel-frames li:nth-child(1) img").width();

image_height = $(".carousel-frames li:nth-child(1)").height();

// getting image proportions
image_proprotions = image_width / image_height;

// getting total count of list members >li
film_strip_frames_total = $( ".carousel-frames>li" ).length;

// calculating film strip total length:
film_strip_length = film_strip_frames_total * window_width;


$(".carousel-container").width(window_width);
$(".carousel-container").height(window_width / image_proprotions);



$(".carousel-frames").width(film_strip_length);
$(".carousel-frames").height(window_width / image_proprotions);

// >li
$(".carousel-container>li").width(window_width);
$(".carousel-container>li").height(window_width / image_proprotions);


carouselDefaultAnim = setInterval(function(){
caruselMoveForward();
}, 5000);

}



function caruselMoveForward(){
//var z = film_strip_frames_total;
if(steps < film_strip_frames_total -2 ){
$(".carousel-frames").animate({left: '+=-'+ $(".carousel-container li").width() +'px'}, 700);
steps = steps + 1;
}else{
$(".carousel-frames").css("left", "0px");
steps = 0;
}
// -------- ./caruselMoveForward()
}



function caruselMoveBackward(){
if(steps < film_strip_frames_total -2 && steps > 0 ){
$(".carousel-frames").animate({left: '-=-'+ $(".carousel-container li").width() +'px'}, 700);
steps = steps - 1;
}else{
$(".carousel-frames").css("left", "0px");
steps = 0;
}
// -------- ./caruselMoveForward()
}
