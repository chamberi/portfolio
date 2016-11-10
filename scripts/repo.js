(function(module) {
  var repos = {};

  repos.allRepos = [];
  repos.requestRepos = function(callback) {
    $.when(
    $.get('/github/users/chamberi/repos', function(data) {
      reposObj.allRepos = data;
    }),
    $.get('/github/users/chamberi/followers', function(data) {
      reposObj.followers = data;
    })
    ).done(callback);
  };

  repos.withTheAttribute = function(myAttr) {
    return repos.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.repos = repos;
})(window);
