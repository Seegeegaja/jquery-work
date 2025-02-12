$(document).ready(function(){
  // 동기= 앞에작업이 끝나야 실행하는 순서를 지킴
  // 비동기 = 순서 상관없이 실행
  // 콜백 함수는 비동기를 동기화작업을 하는 아이
  $("#btn_1").on("click",function(){
    $("p").hide("slow" , function(){
     alert("잘사라짐")
     $("p").show("slow")
    })
  })
  $("#btn_2").on("click" , function(){
    $(".chain")
    .css("color", "red")
    .slideUp(1000)
    .slideDown(1000)
  })
  
})