$(".span1").click(function () {
  var btnType = $(this).attr("data");
  var inputVal = $("#addResult").val();
  if (btnType == "add") {
    $("#addResult").val(parseInt(inputVal) + 1);
  } else if (btnType == "minus" && inputVal > 1) {
    $("#addResult").val(parseInt(inputVal) - 1);
  }
});
$(".span2").click(function () {
  var btnType = $(this).attr("data");
  var inputVal = $("#addResult2").val();
  if (btnType == "add") {
    $("#addResult2").val(parseInt(inputVal) + 1);
  } else if (btnType == "minus" && inputVal > 1) {
    $("#addResult2").val(parseInt(inputVal) - 1);
  }
});
$(".span3").click(function () {
  var btnType = $(this).attr("data");
  var inputVal = $("#addResult3").val();
  if (btnType == "add") {
    $("#addResult3").val(parseInt(inputVal) + 1);
  } else if (btnType == "minus" && inputVal > 1) {
    $("#addResult3").val(parseInt(inputVal) - 1);
  }
});
$(".span4").click(function () {
  var btnType = $(this).attr("data");
  var inputVal = $("#addResult4").val();
  if (btnType == "add") {
    $("#addResult4").val(parseInt(inputVal) + 1);
  } else if (btnType == "minus" && inputVal > 1) {
    $("#addResult4").val(parseInt(inputVal) - 1);
  }
});
$(".span5").click(function () {
  var btnType = $(this).attr("data");
  var inputVal = $("#addResult5").val();
  if (btnType == "add") {
    $("#addResult5").val(parseInt(inputVal) + 1);
  } else if (btnType == "minus" && inputVal > 1) {
    $("#addResult5").val(parseInt(inputVal) - 1);
  }
});
$(".span6").click(function () {
  var btnType = $(this).attr("data");
  var inputVal = $("#addResult6").val();
  if (btnType == "add") {
    $("#addResult6").val(parseInt(inputVal) + 1);
  } else if (btnType == "minus" && inputVal > 1) {
    $("#addResult6").val(parseInt(inputVal) - 1);
  }
});

$(".showDialogBtn").click(function () {
  $(".dialog").css("display", "block"); // 顯示dialog。
  $(".dialog").animate(
    {
      opacity: "1",
      top: "3700px", // 決定對話框要滑到哪個位置停止。
    },
    550
  );
});

$(".cancelBtn").click(function () {
  $(".dialog").animate(
    {
      opacity: "0",
      top: "-50px", // 需與CSS設定的起始位置相同，以保證下次彈出視窗的效果相同。
    },
    350,
    function () {
      // 此區塊為callback function，會在動畫結束時被呼叫。
      $(".modal").css("display", "none"); // 隱藏modal。
      $(".dialog").css("display", "none"); // 隱藏dialog。
    }
  );
});

$("#addContact").click(function () {
  // 輸入姓名的input值
  var nameVal = $("#firstname").val();
  // 輸入電話的input值
  var phoneVal = $("#name").val();
  var emailVal = $("#email").val();
  var emailqVal = $("#emailq").val();
  var emailaVal = $("#emaila").val();
  var emailzVal = $("#emailz").val();
  var emailwVal = $("#emailw").val();
  // var temp =
  //   '<div class="contact"><p>' +
  //   nameVal +
  //   "</p><p>" +
  //   phoneVal +
  //   '</p><span class="material-symbols-outlined">delete</span></div>';
  //if input value是空的''要跳alert;都有填資料寫回appengArea裏面
  if (
    nameVal == "" &&
    phoneVal == "" &&
    emailVal == "" &&
    emailqVal == "" &&
    emailaVal == "" &&
    emailzVal == "" &&
    emailwVal == ""
  ) {
    alert("資料未填寫完全！");
  } else if (nameVal == "") {
    alert("汪汪");
  } else if (phoneVal == "") {
    alert("沒填好");
  } else if (emailVal == "") {
    alert("沒填好");
  } else {
    $(".appendArea").append(temp);
  }

  $(".material-symbols-outlined").click(function () {
    $(this).parents(".contact").html("");
  });

  $(document).on("click", ".material-symbols-outlined", function () {
    $(this).parents(".contact").html("");
  });
});
