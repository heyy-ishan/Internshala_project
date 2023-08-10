$('.powered-tabs .supply-tab').on('click',function(){
    console.log("supply clicked");                // debugging not necessary
    $('.page11').css('display','flex');
    console.log($('.page11').css('display'));
    $('.page22').css('display','none');
    $('.powered-tabs .supply-tab').css("background-color", "#3469fa")
    $('.powered-tabs .supply-tab').css("color", "#fff")
    $('.powered-tabs .Trade-tab').css("background-color", "#fff")
    $('.powered-tabs .Trade-tab').css("color", "#3469fa")
    // $('.carouseltext3').css('display','none');
    // $('.carouseltext4').css('display','none');


})

$('.powered-tabs .Trade-tab').on('click',function(){
    console.log("trade clicked");                // debugging not necessary
    $('.page11').css('display','none');
    $('.page22').css('display','flex');
    $('.powered-tabs .Trade-tab').css("background-color", "#3469fa")
    $('.powered-tabs .Trade-tab').css("color", "#fff")
    $('.powered-tabs .supply-tab').css("background-color", "#fff")
    $('.powered-tabs .supply-tab').css("color", "#3469fa")
    // $('.carouseltext4').css('display','none');
    // $('.carouseltext2').css('display','block');
})

