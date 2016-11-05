'use strict';

// iife this one too

// i personally don't like the word options for this but it's not a big deal.
function Article (options) {
  for (var keys in options) {
    this[keys] = options[keys];
  }
}
Article.articles = [];

Article.prototype.toHtml = function(scriptTemplatId) {
  this.daysAgo = parseInt((new Date() - new Date(this.dateStamp))/60/60/24/1000);
  this.publishStatus = this.dateStamp ? 'Posted ' + this.daysAgo + ' days ago on' : '(draft)';

  var source = $(scriptTemplatId).html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};

Article.loadAll = function(inputData) {
  inputData.sort(function(a,b) {
    return (new Date(b.dateStamp)) - (new Date(a.dateStamp));
  })
  .forEach(function(ele) {
    Article.articles.push(new Article(ele));
  });
};

// I know you don't need to, but you could include the etag check thing
Article.fetchAll = function() {
  if (localStorage.blogArticles) {
    var storedData = JSON.parse(localStorage.blogArticles);
    Article.loadAll(storedData);
    app.renderIndexPage();
  } else {
    $.getJSON('data/projData.json',
      function(data, message, xhr) {
        var projectJSON = JSON.stringify(data);
        localStorage.setItem('blogArticles', projectJSON);
        Article.loadAll(data);
        app.renderIndexPage();
      });
  }
};
