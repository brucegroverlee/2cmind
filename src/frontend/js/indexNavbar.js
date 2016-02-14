(function () {
  $('#btnMenu').on('click', function () {
    $('#navbarMenu').toggleClass('header-menu-list-show')
  })

  var time = 400
  var margin_top = $('#view-0').height()

  section('view-1')
  section('view-2')
  section('view-3')
  section('view-4')

  function section (section_div) {
    $('#a-' + section_div).on('click', function () {
      $('body,html').animate({
        scrollTop: $('#' + section_div).position().top - margin_top
      }, time)
      $('#navbarMenu').toggleClass('header-menu-list-show')
    })
  }

})()