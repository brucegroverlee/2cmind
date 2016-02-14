(function () {
  $('#btnMenu').on('click', function () {
    $('#navbarMenu').toggleClass('header-menu-list-show')
    $('header').toggleClass('header-moved')
  })

  window.onscroll = function () {
    //console.log(window.scrollY)
    if( window.scrollY > 40 ) {
      $('header').addClass('header-white')
    } else {
      $('header').removeClass('header-white')
    }
  }

  var time = 400

  section('view-1')
  section('view-2')
  section('view-3')
  section('view-4')

  function section (section_div) {
    $('#a-' + section_div).on('click', function () {
      $('body,html').animate({
        scrollTop: $('#' + section_div).position().top
      }, time)
      $('#navbarMenu').toggleClass('header-menu-list-show')
      $('header').toggleClass('header-moved')
    })
  }

  function getStarted () {
    $('#view-1 .btn').on('click', function () {
      $('body,html').animate({
        scrollTop: $('#view-4').position().top
      }, time)
    })
  }

  getStarted()

})()