$(document).ready(function(){
  // Getter : text() : 태그 안쪽의 텍스트만 
  // ,html() 태그 안쪽의 html 코드 포함의 텍스트, 
  // val() : value의 줄임말 말그대로 태그 안에 있는 name의 value
  // ,attr() : 어트리뷰트는 태그 안에 있는 name id <span style="font-weight: bold;" name="asd">안유진</span>
  // Setter : text(value),html(value),val(value),attr(value)
  $("#btn_get").on("click", function(){
    alert($("#message").text())
    alert($("#message").html())
  })
  $("#getName").on("click", function(){
    // let myName = document.querySelector("#name").value
    let myName = $("#name").val()
    alert(myName)
  })
  $("#attr-url").on("click",function(){
    let url = $("#daum").attr("href")
    $("#getDaumUrl").val(url)
  })
  $("#btn_set").on("click" , function(){
    $("#setName")
    .text("윈터")
    .css("color" , "skyblue")
  })
  $("#btn_set2").on("click" , function(){
    $("#setName")
    .html("<b>닝닝</b>")
    .css("color" , "red")
  })
  $("#btn_ive").on("click", function(){
    $("#ive").text(function(index,origin){
      let str = "안녕하세요." +  origin+"입니다."+"index = "+ index
      return str
    })
  })
  $("#btn_girl_group").on("click",function(){
    $(".girl-group").text(function(index,origin){
      let str = "안녕하세요." + (index+1)+"번" +origin+"입니다."
      return str;
    })
  })
  $("#btn_change").on("click" , function(){
    if($("#site").text()=="구글"){
      $("#site").text("네이버").attr("href" , "http://www.naver.com")
    }else{
      $("#site").text("구글").attr("href" , "http://google.com")
    }
  })
  
  // if($("#site").text("네이버")){ 비교가 없어서 한번뿐이 안됨
  //   $("#btn_change").on("click" , function(){
  //     $("#site").text("구글")
  //     .attr("href" , "http://google.com")
  //   })
  // }else{
  //   $("#btn_change").on("click" , function(){
  //     $("#site").text("네이버")
  //     .attr("href" , "http://www.naver.com")
  //   })
  // }
})