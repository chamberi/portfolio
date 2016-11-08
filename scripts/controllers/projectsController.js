(function(module) {
  var projectsController = {};

  projectsController.reveal = function() {
    $('.tab-content').hide();
    $('#articles').fadeIn();
  };

  module.projectsController = projectsController;
})(window);
