$(function () {
  $('.btn-menu').on('click', function () {
    $(this).toggleClass('open');
    $('.header').toggleClass('open');
    let menuHeight = $(window).height()
    $('header').css('--menu-height', menuHeight + 'px');
    $('.header__wrapper').fadeIn()
    $('.header-bottom').fadeIn()
  })
 

  $('#fullpage').fullpage({
    //options here
    anchors: ['firstPage', 'secondPage', 'thirdPage'],
    menu: '#header-category-menu__list',
    autoScrolling: true,
    scrollHorizontally: true,
    scrollingSpeed: 1000,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    onLeave: function (origin, destination, direction, trigger) {
      if (destination.index >= 1 && direction == 'down') {
        $('.home-logo').addClass('scroll')
        if (window.innerWidth < 767) {
          $('.header__wrapper').slideUp()
          $('.header-bottom').slideUp()
        }
      }
      if (destination.index == 0 && direction == 'up') {
        $('.home-logo').removeClass('scroll')
        $('.header-category-menu__list li').removeClass('active')
        if (window.innerWidth < 767) {
          $('.header__wrapper').slideDown()
          $('.header-bottom').slideDown()
        }
      }
      if (destination.index == 5 && direction == 'down') {
        $('.header-bottom').fadeOut()
        $('.home-logo').fadeOut()
        $('.header-btn-menu').addClass('black')
      } else {
        if (window.innerWidth > 767) {
          $('.header-bottom').fadeIn()
        }
        $('.home-logo').fadeIn()
        $('.header-btn-menu').removeClass('black')
      }
    },

  });
  /** home page  */
})