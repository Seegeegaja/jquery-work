$(document).ready(function(){
  $("#karina").on("click" , function(){
    $("#karina").hide('slow')
  })
  $("button").on("click" , function(){
    $("#karina").show('fast')
  })
  $("#karina").on("mouseenter", function(){
    $("#karina").hide(500)
  })
  $("#btn_fadeIn").on("click", function(){
    $(".a").fadeIn('slow')
    $(".b").fadeIn('slow')
    $(".c").fadeIn('slow',function(){
      alert('다나옴')
    })
  })
  $("#btn_fadeOut").on("click", function(){
    $(".a").fadeOut('slow')
    $(".b").fadeOut('slow')
    $(".c").fadeOut('slow',function(){
    })
  })
  $("#btn_fadeToggle").on("click", function(){
    $(".a").fadeToggle('slow')
  })
  // 점점흐려지기
  $("#btn_fadeTo").on("click", function(){
    $(".a").fadeTo(3000,0)
  })

})