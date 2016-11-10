(function(module) {
  var app = {};

  app.renderIndexPage = function() {
    Article.articles.forEach(function(a){
      $('#articles').append(a.toHtml('#project-template'));
    });
    $('footer').text('The total lines of code is: ' + Article.statsAll());
  };
  Article.fetchAll();
  module.app = app;
})(window);
