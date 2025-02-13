$(document).ready(function(){
  $.ajax({
    type : "GET",
    url : 'https://jsonplaceholder.typicode.com/posts?_limit=10',
    success : function(data){
      let result = '';
      data.map((x,y)=>{
        result = result +`
      <tr>
      <td>${x.userId}</td>
      <td>${x.id}</td>
      <td>${x.title.slice(0,15)}</td>
      <td>${x.body.slice(0,20)}</td>
      <td>
      <button class="btnxxx" data-id="${x.id}">짜세${x.id}</button> 
      </td>
      </tr>
      `
      });
     $("#ajaxOut").html(result)
    }
  })
  $(document).on("click", ".btnxxx" , function(){
    let find = $(this).data("id")
    $.ajax({
      type : "GET",
      url : 'https://jsonplaceholder.typicode.com/posts?_limit=10',
      success : function(data){
        let qwe = data.find(x=>x.id === find)
        $("#nada").text(qwe.body).fadeIn()
        
      }
    })
   })
  $("#close").on("click",function(){
    $("#nada").fadeToggle()
  })
})
