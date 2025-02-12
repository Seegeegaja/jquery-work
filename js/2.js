$(document).ready(function(){
  $("#intro").click(function(){
    $("body").css("background-color", "red")
    $(this).css("background-color", "yellow")
    $("p .intro").css("background-color", "green")
// p하고 띄어쓰기 . 하면 p테그 밑에 하위태그의 클레스가 선택됨
    
  })
  $(".btn_1").click(function(){
    $("li:last").css("color", "green")
  })
  $("#btn_2").click(function(){
    $("[href]").css("background-color","gold")
  })
  $("#btn_3").click(function(){
    $("[href!='www.daum.net']").css("color" , "green")
  })
  $("#btn_4").click(function(){
    $("tr:even").css("background-color" , "gold")
    // even 짝수 odd 홀수
  })
})