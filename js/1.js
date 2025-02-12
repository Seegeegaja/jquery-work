// $(document).ready(function defer를 사용하지 않고 이렇게 해도 된다
$(document).ready(function () {
  // let h1 = document.querySelector("h1")이걸 줄여서
  $("h1").click(function () {
    $(this).hide();
  });
  // 클레스를 잡는것
  $(".abc").click(function () {
    $(".abc").hide();
  });
  // id를 잡는것 this를 하든 원하는걸 입력하든 상관없음
  $("#name").click(function () {
    $("#name").hide();
  });
});
