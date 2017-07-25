(function () {
  'use strict';
  // scrollspy
  $('body').scrollspy({
    target: '#global-navigation',
    offset: 110
  });
  // smoothScroll
  $('.l-header__info__logo a').smoothScroll({
    offset: -100
  });
  $('#header-info-links a').smoothScroll({
    offset: -100
  });
  $('#global-navigation a').smoothScroll({
    offset: -100,
    beforeScroll: function () {
      $('.navbar-collapse.collapse.in').collapse('hide');
    }
  });
  $('a.smooth-scroll').smoothScroll({
    offset: -100
  });
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
  $('.panel.panel-toggle .panel-heading').on('click', function () {
    // $(this).toggleClass('is-close');
    $(this).next('.panel-body').slideToggle();
  });
  var $document = $(document);
  if ($document.width() < 768) {
    $('.panel.panel-toggle .panel-heading').trigger('click');
  }
  // navbar
  var $navbar = $('.l-header .navbar');
  var $points = $('#points').offset();
  if (typeof $points !== 'undefined') {
    $document.on('scroll', function () {
      if ($document.scrollTop() > $points.top) {
        $navbar.addClass('is-paint');
      } else {
        $navbar.removeClass('is-paint');
      }
    });
  }
  // 埋め込みのレスポンシブ対応
  $('iframe[src^="https://www.youtube.com/embed/"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
  $('iframe[src^="https://www.youtube.com/embed/"]').addClass('embed-responsive-item');
  $('iframe[src^="https://www.google.com/maps/"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
  $('iframe[src^="https://www.google.com/maps/"]').addClass('embed-responsive-item');
  // tableのレスポンシブ対応
  $('.table').wrap('<div class="table-responsive"></div>');
  // matchHeight
  $('.thumbnails').imagesLoaded(function() {
    $('.thumbnails .thumbnail').matchHeight();
  });
  $('.c-banners').imagesLoaded(function() {
    $('.c-banners .c-banner').matchHeight();
  });
  // shuffleContent
  function shuffleContent(container) {
    var content = container.find('> *');
    var total = content.length;
    content.each(function() {
      content.eq(Math.floor(Math.random() * total)).prependTo(container);
    });
  }
  shuffleContent($('.l-footer__ad > .row'));
  // このページの先頭に戻る
  $document.scroll(function () {
    if ($document.scrollTop() > 100) {
      $('#return-pagetop').fadeIn('slow');
    } else {
      $('#return-pagetop').fadeOut('slow');
    }
  });
})();
