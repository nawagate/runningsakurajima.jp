(function () {
  'use strict';
  // scrollspy
  $('body').scrollspy({
    target: '#global-navigation',
    offset: 110
  });
  // smoothScroll
  $('#header-info-links a').smoothScroll({
    offset: -100
  });
  $('#global-navigation a').smoothScroll({
    offset: -100
  });
  $('#faq-headings a').smoothScroll();
  $('#return-pagetop a').smoothScroll();
  // countdown
  $('#countdown-timer').countdown('2017/12/3 10:00:00').on('update.countdown', function (event) {
    $(this).html(event.strftime(
      '<div class="p-section--home__countdown__timer__frame"><div class="p-section--home__countdown__timer__frame__number">%-D</div><div class="p-section--home__countdown__timer__frame__label">Days</div></div>' +
      '<div class="p-section--home__countdown__timer__frame"><div class="p-section--home__countdown__timer__frame__number">%H</div><div class="p-section--home__countdown__timer__frame__label">Hours</div></div>' +
      '<div class="p-section--home__countdown__timer__frame"><div class="p-section--home__countdown__timer__frame__number">%M</div><div class="p-section--home__countdown__timer__frame__label">Minutes</div></div>' +
      '<div class="p-section--home__countdown__timer__frame"><div class="p-section--home__countdown__timer__frame__number">%S</div><div class="p-section--home__countdown__timer__frame__label">Seconds</div></div>'));
  }).on('finish.countdown', function () {
    $('#countdown-message').addClass('hidden');
    $(this).addClass('hidden');
  });
  // panel-toggle
  $('.panel.panel-toggle .panel-heading').on('click', function() {
    // $(this).toggleClass('is-close');
    $(this).next('.panel-body').slideToggle();
  });
  if ($(window).width() < 768) {
    $('.panel.panel-toggle .panel-heading').trigger('click');
  }
  // navbar
  var $document = $(document);
  var $navbar = $('.l-header .navbar');
  var $points = $('#points').offset();
  $(window).on('scroll', function() {
    if ($document.scrollTop() > $points.top ) {
      $navbar.addClass('is-paint');
    } else {
      $navbar.removeClass('is-paint');
    }
  });
  // このページの先頭に戻る
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $('#return-pagetop').fadeIn('slow');
    } else {
      $('#return-pagetop').fadeOut('slow');
    }
  });
})();






// // common head グローバルナビの高さ調整
// (function() {
//   'use strict';
// })();
// // 共通
// (function() {
//   'use strict';
//   // パネルをトグル化
// })();
// // トップページ
// (function() {
//   'use strict';
//   // ニュースのサムネイルの高さを揃える
//   if ($(window).width() >= 992) {
//     // $('#top-news [class^="col-] > a').tile(4);
//     $('#top-news [class^="col-sm"] > a').tile(4);
//   }
//   // スマートフォンの時のグローバルナビゲーションの動き
//   var $body = $('body');
//   $('#return-pagetop a').smoothScroll();
//   $('.navbar-scroll a').smoothScroll({
//     beforeScroll: function() {
//       $body.addClass('smooth-scroll-scrolling');
//       $('.navbar-collapse.collapse.in').collapse('hide');
//     },
//     afterScroll: function() {
//       $body.removeClass('smooth-scroll-scrolling');
//     }
//   });
// })();
