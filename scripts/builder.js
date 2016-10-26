var articles = [];

function Article (options) {
  this.title = options.title;
  this.category = options.category;
  this.abstract = options.abstract;
  this.coders = options.coders;
  this.repoUrl = options.repoUrl;
  this.dateStamp = options.dateStamp;
};

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.attr('data-category', this.category);
  $newArticle.find('.title').text(this.title);
  $newArticle.find('.abstract').text(this.abstract);
  $newArticle.find('a').text(this.coders);
  $newArticle.find('a').attr('href', this.repoUrl);

  // $newArticle.find('section').html(this.abstract);
  $newArticle.find('time[pubdate]').attr('title', this.dateStamp);
  $newArticle.find('time').text('about ' + parseInt((new Date() - new Date(this.dateStamp))/60/60/24/1000) + ' days ago');
  $newArticle.removeClass('template');

  return $newArticle;
};

/* This sort method is a standard JavaScript Array function
   that will iterate over an array and compare its values,
   and then arrange them in ascending or descending order
   according to the return value. We are comparing the
   publishedOn properties to arrange the blog posts in
   descending order (most recent first). */
codeProjects.sort(function(currentObject, nextObject) {
  return (new Date(nextObject.dateStamp)) - (new Date(currentObject.dateStamp));
});

codeProjects.forEach(function(ele) {
  articles.push(new Article(ele));
});

articles.forEach(function(article) {
  $('#articles').append(article.toHtml());
});
