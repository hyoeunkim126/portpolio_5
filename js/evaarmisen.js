// 메뉴 클릭시 페이지 이동

$(function(){
  var nav = $("#navi ul li");
  var contents = $(".section>section");

  nav.click(function(){
    var index = $(this).index();

    var section = contents.eq(index);
    var offset = section.offset().top;

    $("html, body").animate({scrollTop:offset},400);
  });
});

// 원 호버시 이미지틀 작아짐

$(function(){
    $('.animation-item').hover(
      function(){
        $(this).css('transform', 'scale(0.7, 0.7)');
        $(this).find("img").css('transform', 'scale(1.3, 1.3)');
      },
      function(){
        $(this).css('transform', 'scale(1, 1)');
        $(this).find("img").css('transform', 'scale(1, 1)');
      }
    );
});

// 메뉴 호버

// $(function(){
//   $('.nav-item-box li a').hover(
//     function(){
//       $(this).css('transform', 'scaleX(1)');
//     },
//     function(){
//       $(this).css('transform', 'scale(0)');
//     }
//   );
// });


// 페이지이동하면서 배경화면색 변함

$(function(){
  var ws = 0;
  $(window).scroll(function(){
     ws = $(this).scrollTop();

     if(ws > 700) {
      $('header').css('background-color', 'rgb(240, 219, 213)') //pink색상
                .css('opacity', '0.5');
      } else {
          $('header').css('background-color', 'rgb(250, 247, 240)') //ivory색상
          .css('opacity', '1');
      }
      // about me 
      var s1=$('.about-me').offset().top;
      if(ws < s1-400){
        $('.about-me').css('background-color', 'rgb(240, 219, 213)') //pink색상
                      .css('opacity', '0.5');
      }else {
        $('.about-me').css('background-color', 'rgb(250, 247, 240)') //ivory색상
                      .css('opacity', '1');
        $('header').css('background-color', 'rgb(240, 219, 213)') //pink색상
                   .css('opacity', '0.5');

      }
      // work
      var s2=$('.work').offset().top;
      if(ws < s2-400){
        $('.work').css('background-color', 'rgb(240, 219, 213)') //pink색상
                  .css('opacity', '0.5');
      }else {
        $('.work').css('background-color', 'rgb(250, 247, 240)') //ivory색상
                  .css('opacity', '1');
        $('.about-me').css('background-color', 'rgb(240, 219, 213)') //pink색상
                      .css('opacity', '0.5');
      }
      // collaborations
      var s3=$('.collaborations').offset().top;
      if(ws < s3-400){
        $('.collaborations').css('background-color', 'rgb(240, 219, 213)') //pink색상
                            .css('opacity', '0.5');
      }else {
        $('.collaborations').css('background-color', 'rgb(250, 247, 240)') //ivory색상
                            .css('opacity', '1');
        $('.work').css('background-color', 'rgb(240, 219, 213)') //pink색상
                  .css('opacity', '0.5');
      }
      // news
      var s3=$('.news').offset().top;
      if(ws < s3-400){
        $('.news').css('background-color', 'rgb(240, 219, 213)') //pink색상
                  .css('opacity', '0.5');
      }else {
        $('.news').css('background-color', 'rgb(250, 247, 240)') //ivory색상
                  .css('opacity', '1');
        $('.collaborations').css('background-color', 'rgb(240, 219, 213)') //pink색상
                            .css('opacity', '0.5');
      }
      // shop
      var s3=$('.shop').offset().top;
      if(ws < s3-400){
        $('.shop').css('background-color', 'rgb(240, 219, 213)') //pink색상
                  .css('opacity', '0.5');
      }else {
        $('.shop').css('background-color', 'rgb(250, 247, 240)') //ivory색상
                  .css('opacity', '1');
        $('.news').css('background-color', 'rgb(240, 219, 213)') //pink색상
                            .css('opacity', '0.5');
      }
  });
});
