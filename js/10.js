$(document).ready(function () {
  let data = [
    { name: "쎄게가자", age: 32 },
    { name: "씨게가자", age: 30 },
    { name: "교회가자", age: 25 },
    { name: "싸고가자", age: 24 },
    { name: "박고가자", age: 25 },
    { name: "둘이가자", age: 18 },
  ];
  $("#btnForloop").on("click", function () {
    let result = "";
    for (let i = 0; i < data.length; i++) {
      result =
        result +
        `
      <tr>
      <td>${i + 1}</td>
      <td>${data[i].name}</td>
      <td>${data[i].age}</td>
      </tr>
      `;
    }
    $("#forOut").html(result);
  });
  $("#btnForEach").on("click", function () {
    let result = '';
    data.map((item, index) => {
      result =
        result +
        `
      <tr>
      <td>${index + 1}</td>
      <td>${item.name}</td>
      <td>${item.age}</td>
      </tr>
      `;
    });

    $("#forEachOut").html(result);
  });

  $("#btnJqueryfor").on("click", function () {
    let result = '';
    $.each(data, (x, index)=>{
      result = result + `
      <tr>
      <td>${x + 1}</td>
      <td>${index.name}</td>
      <td>${index.age}</td>
      </tr>
      `
    })
    $("#juqeryOut").html(result)
  });
});
