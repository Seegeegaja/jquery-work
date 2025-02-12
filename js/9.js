$(document).ready(function(){
  //자식으로 추가는 append(앞),prepend(뒤)
  $("#btn_append").on("click",function(){
    // $("p").append(" HI~~~~~~~")
    // $("p").prepend(" bye~~~")
    $("p").prepend("방가~").append(" Bye~")
  })
  $("#btn_item_prepend").on("click" , function(){
    $("ol").prepend("<li>히든 아이템</li>")
  })
  $("#btn_item_append").on("click" , function(){
    $("ol").append("<li>히든 아이템</li>")
  })
  // 형제로 추가 after , befor?
  $("#img_add").on("click",function(){
    let left = $("<img></img>")
    .attr("src","./image/화면 캡처 2025-02-11 125332.jpg")
    .css("width","100px")
    let right = $("<img></img>")
    .attr("src","./image/화면 캡처 2025-02-11 130624.jpg")
    .css("width","100px")
    $("img").before(left).after(right)
  })
  $("#remove").on("click",function(){
    $(".del").remove()
  })
  $("#empty").on("click",function(){
    $(".del").empty()
  })
})