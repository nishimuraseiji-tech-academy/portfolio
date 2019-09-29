// ボタンの表示／非表示を切り替える関数
function updateButton() {
  if ($(this).scrollTop() >= 300) {
    $(".back-to-top").fadeIn();
  } else {
    // ボタンを非表示
    $(".back-to-top").fadeOut();
  }
}


$(document).ready(function() {
  updateButton();

  // スクロールされる度にupdateButtonを実行
  $(window).scroll(updateButton);

  // ボタンをクリックしたらページトップにスクロールする
  $(".back-to-top").click(function() {
    // 600ミリ秒かけてトップに戻る
    $("html, body").animate(
      {
        scrollTop: 0
      },
      600
    );

    // ボタンのhrefに遷移しない
    return false;
  });
});