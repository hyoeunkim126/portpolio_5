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

$(function(){
  var ws = 0;
  $(window).scroll(function(){
     ws = $(this).scrollTop();

     if(ws > 700) {
      $("header").css('background-color', 'rgb(240, 219, 213)'); //pink색상
      } else {
          $("header").css('background-color', 'rgb(250, 247, 240)'); //ivory색상
      }
  });
});
