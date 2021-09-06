// ヘッダーの背景が表示されるためのJS
$(window).scroll(function(){
	if ($(window).scrollTop() > 600) {
		$('header').addClass('scroll');
	} else {
		$('header').removeClass('scroll');
	}
});

$(function () {

//セクションタイトルaimation呼び出し
  if ($('.js-scroll-trigger').length) {
      scrollAnimation();
  }
  // aimation関数
  function scrollAnimation() {
      $(window).scroll(function () {
          $(".js-scroll-trigger").each(function () {
              let position = $(this).offset().top,
                  scroll = $(window).scrollTop(),
                  windowHeight = $(window).height();
              if (scroll > position - windowHeight + 30) {//"フェードインするタイミング
                  $(this).addClass('is-active');
              }
          });
      });
  }
  $(window).trigger('scroll');
});
//ハンバーガーメニュの記述
$('.burger-btn').on('click',function(){ //"burger-btn"をクリックしたら、
    $('.burger-btn').toggleClass('cross'); //ハンバーガーボタンに"cross"というclassをつけたり外したりする
    $('.header-nav').fadeToggle(300); //ヘッダーナビゲーションを300ミリ秒でフェードイン、フェードアウトさせる
    $('body').toggleClass('noscroll') //bodyに対して"noscroll"というclassをつけたり外したりする
  });
  if( $(window).width() <= 768 ){ //デバイスの幅が768以下のとき
    $('.nav-item>a').on('click',function(){ //.nav-item>aをクリックすると
      $('.header-nav').fadeOut(300); //.header-navが0.3秒でフェードアウト(メニューのフェードアウト)
      $('.burger-btn').removeClass('cross'); // .burger-btnのcrossクラスを削除
      $('body').removeClass('noscroll'); //bodyのnoscrollクラスを削除
    });
  }
// Googleフォームのajax動作
$(document).ready(function () {

  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/hogehoge",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown();
          $(".submit-btn").fadeOut();
          //window.location.href = "thanks.html";
        },
        200: function () {
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });

});
// <!-- ＃リンクのスムーススクロール -->
$('a[href^="#"]').click(function() {
  // スクロールの速度
  let speed = 400; // ミリ秒で記述
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? 'html' : href);
  let position = target.offset().top;
  $('body,html').animate({
    scrollTop: position
  }, speed, 'swing');
  return false;
});

// インスタ埋め込み
$.ajax({
  type: 'GET',
  url: 'https://graph.facebook.com/v11.0/17841448055944754?fields=name%2Cmedia.limit(4)%7Bcaption%2Clike_count%2Cmedia_url%2Cpermalink%2Cthumbnail_url%7D&access_token=EAAEeVnvWE30BABBgmF4x1LxkeVZBLHxESeUL0g3ZBhLsbiZBzPBCZAee9ClmOcid2yxeEcI5LALPvrXKQZCUo9dZBSOXghvgMuZAH6w1yguzmmfqChq4JxSN1e6Wy33N44uZAK7wSaHIdWp2C5ZCk4rZA0nyRRUgEh4E50eVZBWpQ5dZBYgqZAEcHMQyK',
  dataType: 'json',
   success: function(json) {
  var ig = json.media.data;
  var html = "";
  for (var i = 0; i < ig.length; i++) {
  var link = ig[i].permalink;
  var image
  if(!ig[i].thumbnail_url) {
  // 動画の場合はこちら
  image = ig[i].media_url;}
  else {
  // 写真の場合はこちら
  image = ig[i].thumbnail_url;
  }
  html += '<div><a href="' + link + '" target="_blank"><img src="' + image + '"></a></div>'
  }
  $(".instagram").append(html);
  }
  });

//グラデーションで背景が変わるスクリプト
//スクロール発火イベント
window.addEventListener( "scroll" ,function(){

  //スクロールの高さを取得
  let scroll = window.pageYOffset;
  
  if( scroll > 3000 ){ 
    document.body.style.backgroundColor = 'rgba(229, 221, 241, 1)';
  }else if( scroll > 1500 ){
    document.body.style.backgroundColor = 'rgba(248, 233, 233, 1)';
  }else{
    document.body.style.backgroundColor = 'rgba(248, 233, 233, 1)';
  }
});

