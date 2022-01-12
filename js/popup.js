var $images = $('.gallery-photo'); // 이미지 태그를 선택한다
var $imageArray = $images.clone().toArray(); // 이미지태그를 복제후(jquery 객체)  -> Domelement로 변환(array)
var $popup = $('.popup'); 
var $imgWrap = $('.popup-container'); 
var $close = $('.close'); 
var $prev = $('.prev'); 
var $next = $('.next'); 
var total = $imageArray.length; 
var incre = 0; 

// 이미지 버튼
$images.on('click',function(e){
  incre=$images.index(this);
  showImage(incre);
  $popup.show(); 
});

$next.on('click',function(e){
  showImage(++incre);
});

$prev.on('click',function(e){
  showImage(--incre);
});

$close.on('click',function(e){
  $popup.hide();
});

// // 선택(클릭)한 이미지 보여주기
// function showImage(idx){
//   $('button').attr('disabled',false); // disabled(next,prev)를 활성화 시킴
//   if(idx>=total-1){
//     $next.attr("disabled",true); // idx(incre) 와  total-1 같으면 다음버튼 비활성화
//   } else if(idx <= 0) { 
//     $prev.attr("disabled",true); // idx(incre) 와  0 같으면 이전버튼 비활성화
//   }
//   $imgWrap.empty().append($imageArray[idx]); // 선태된 이미지 태그 삽입
// }