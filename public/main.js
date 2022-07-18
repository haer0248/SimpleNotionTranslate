$(document).on("click", "#ahoy", function(){ 
  $.ajax({
    type: "POST",
    url: "/submit-form",
    dataType: "json",
    data: {
      title: $("#title").val(),
    },
    success: function(data) {
      $("#result").show();
      if (data[0]?.ans) {
        ans = data[0]?.ans;
      } else {
        ans = "沒有資料";
      }
      if (data[0]?.pinyin) {
        pinyin = data[0]?.pinyin;
      } else {
        pinyin = "沒有資料";
      }
      $("#result").html(`ㄅㄆㄇㄈ：${ans}<br/>Pinyin: ${pinyin}`);
    },
    error: function(jqXHR) {
      $("#result").html("發生錯誤" + jqXHR.status);
    }
  })
});