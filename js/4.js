$(document).ready(function(){
  $(".outer").mouseover(function(){
    console.log("Outer Mouse Over Evet")
  })
  $(".outer").mouseenter(function(){
    console.log("Ouer Mouse Enter Event")
  })
  $(".inner").mouseover(function(){
    console.log("Inner Mouse Over Evet")
  })
  $(".inner").mouseenter(function(){
    console.log("Inner Mouse Enter Event")
  })
  //초점이 들어가는건 focus 빠져나가는거는 불러
  $("input[type='password']").focus(function(){
    $(this).css("background-color", "pink")
  })
  $("input[type='password']").blur(function(){
    $(this).css("background-color", "yellow")
  })
})