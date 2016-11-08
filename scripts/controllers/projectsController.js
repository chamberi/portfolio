(function(module) {
  var projectsController = {};

  projectsController.reveal = function() {
    /* TODO: Use your DOM skills to reveal only the articles section! */
    // DONE
    $('.tab-content').hide();
    $('#articles').fadeIn();
  };

  module.projectsController = projectsController;
})(window);
