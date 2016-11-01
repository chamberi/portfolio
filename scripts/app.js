'use strict';
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


app.renderIndexPage = function() {
  Article.articles.forEach(function(a){
    $('#articles').append(a.toHtml('project-template'));
    // if($('#category-filter option:contains("'+ a.category + '")').length === 0) {
    //   $('#category-filter').append(a.toHtml('#category-filter-template'));
    // };
    // if($('#author-filter option:contains("'+ a.author + '")').length === 0) {
    //   $('#author-filter').append(a.toHtml('#author-filter-template'));
    // };
  });
  // articleView.handleCategoryFilter();
  // articleView.handleAuthorFilter();
  app.handleMainNav();
  // articleView.setTeasers();
};
Article.fetchAll();
