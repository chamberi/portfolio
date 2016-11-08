(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    /* TODO: Use your DOM skills to reveal only the articles section! */
    // DONE
    console.log('About was fired');
    $('.tab-content').hide();
    $('#about').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
