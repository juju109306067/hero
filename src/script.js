//點擊start後，圖片和按鈕移除
$(".start").click(function () {
  $(this).remove(".start");
  $(".iconplayGame").remove(".iconplayGame");

  $(".content2").css("opacity", "1");
});

i = 0;

$(".hintBox").click(function () {
  if (i == 0) {
    $(".content2_english").css("opacity", "1");
    i = i + 1;
  } else if (i == 1) {
    $(".content2_pollute").css("opacity", "1");
    i = i + 1;
  } else if (i == 2) {
    $(".content2_apple").css("opacity", "1");
    i = i + 1;
  } else if (i == 3) {
    $(".content2_run").css("opacity", "1");
    i = i + 1;
  } else if (i == 4) {
    $(".content2_computerFather").css("opacity", "1");
    i = i + 1;
  } else if (i == 5) {
    $(".content2_aiFather").css("opacity", "1");
    i = i + 1;
  } else if (i == 6) {
    $(".content2_king").css("opacity", "1");
    i = i + 1;
  } else if (i == 7) {
    $(".content2_gay").css("opacity", "1");
    i = i + 1;
  } else {
    $(".content2_imoitation").css("opacity", "1");
  }
});

$(".answer").click(function () {
  $(this).remove(".answer");
  $(".content2").css("opacity", "0");

  $(".content3").css("opacity", "1");
});

$(".nextPage").click(function () {
  $(this).remove(".nextPage");
  $(".content3").css("opacity", "0");
  $(".content4").css("opacity", "1");
});
