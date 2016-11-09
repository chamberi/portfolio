(function(module) {
  var repoView = {};
  var repoCompiler = Handlebars.compile($('#repo-template').html());
  repoView.renderRepos = function() {
    $('#repo').empty().append(
      repos.withTheAttribute('name')
      .map(repoCompiler)
    );
  };

  repos.requestRepos(repoView.renderRepos);

  module.repoView = repoView;
})(window);
