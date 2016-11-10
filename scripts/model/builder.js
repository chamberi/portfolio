'use strict';
(function(module) {

  function Article (options) {
    for (var keys in options) {
      this[keys] = options[keys];
    }
  }
  Article.articles = [];

  Article.prototype.toHtml = function(scriptTemplatId) {
    this.daysAgo = parseInt((new Date() - new Date(this.dateStamp)) / 60 / 60 / 24 / 1000);
    this.publishStatus = this.dateStamp ? 'Posted ' + this.daysAgo + ' days ago on' : '(draft)';

    var source = $(scriptTemplatId).html();
    var templateRender = Handlebars.compile(source);
    return templateRender(this);
  };

  Article.loadAll = function(inputData) {
    Article.articles = inputData.sort(function(a,b) {
      return (new Date(b.dateStamp)) - (new Date(a.dateStamp));
    })
    .map(function(ele) {
      return new Article(ele);
    });
  };

  Article.fetchAll = function() {
    if (localStorage.blogArticles) {
      var storedData = JSON.parse(localStorage.blogArticles);
      Article.loadAll(storedData);
      app.renderIndexPage();
    } else {
      $.getJSON('data/projData.json',
        function(data) {
          var projectJSON = JSON.stringify(data);
          localStorage.setItem('blogArticles', projectJSON);
          Article.loadAll(data);
          app.renderIndexPage();
        });
    }
  };

  Article.statsAll = function() {
    return Article.articles.reduce(function(acc, cur) {
      acc += cur.codeCount;
      return acc;
    }, 0);
  };
  module.Article = Article;
}) (window);
