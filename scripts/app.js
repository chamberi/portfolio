var app = {};

app.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    var mainNav = $(this).attr('data-content');
    console.log($(this).attr('data-content'));
    $('#' + mainNav).fadeIn('slow');

  });
  // $('.main-nav .tab:first').click();
};

app.handleMainNav();
