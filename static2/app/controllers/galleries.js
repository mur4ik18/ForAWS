(function () {

'use strict';

var CATEGORIES = ['read', 'watch', 'listen', 'see'],
    SUBCATEGORIES = ['whateva', 'science', 'food', 'human', 'spirit', 'nature', 'tech'];

// Display categories
GalleriesController.$inject = ['$rootScope'];
function GalleriesController($rootScope) {
  this.PAGES = CATEGORIES;
  $rootScope.section = 'galleries';
  $rootScope.legendCtrl.hide();

  this.onMouseover = function (category) {
    this.info = category;
  };

  this.onMouseout = function () {
    this.info = null;
  };
}


CategoryController.$inject = ['$rootScope', '$routeParams'];
function CategoryController($rootScope, $routeParams) {
  this.category = $routeParams.category;
  this.PAGES = SUBCATEGORIES;
  $rootScope.section = 'galleries';
  $rootScope.legendCtrl.hide();

  this.onMouseover = function (subcategory) {
    this.info = subcategory;
  };

  this.onMouseout = function () {
    this.info = null;
  };
}

function splitArticles(articles) {
  var l1 = [], l2 = [], i;
  for (i = 0; i < articles.length; i++) {
    if (i % 2 == 0) {
      l1.push(articles[i]);
    } else {
      l2.push(articles[i]);
    }
  }

  return [l1, l2];
}

SubcategoryController.$inject = [
  '$rootScope', '$scope', '$routeParams', '$sce', '$timeout', 'article', 'Article', 'articles',
];
function SubcategoryController($rootScope, $scope, $routeParams, $sce, $timeout,
                               article, Article, articles) {
  var self = this;
  this.articles = articles;
  this.articleLists = splitArticles(articles);

  this.category = $routeParams.category;
  this.subcategory = $routeParams.subcategory;

  this.SUBCATEGORIES = SUBCATEGORIES;
  this.CATEGORIES = CATEGORIES;

  this.order = 'most recent';
  $rootScope.section = 'galleries';

  $rootScope.legendCtrl.setLegend('galleries', this);

  this.fetchSiblings = function () {
    // if (this.article.previous) {
    //   this.previous = Article.get({
    //     id: this.article.previous,
    //     subcategory: this.subcategory
    // });
    // } else {
    //   this.previous = null;
    // }
    if (this.article.next) {
      this.next = Article.get({
        id: this.article.next,
        subcategory: this.subcategory
      });
    } else {
      this.next = null;
    }
  };

  this.setArticle = function (article) {
    // recalculate lists if month changed
    $timeout(function () {
      self.object = self.article = article;
      if (self.article) {
        self.fetchSiblings();
        if ('short_description' in self.article) {
          self.article.short_description = $sce.trustAsHtml(article.short_description);
        }
        if ('content' in self.article) {
          self.article.content = $sce.trustAsHtml(article.content);
        }
      }
      $scope.$broadcast('video:reset');
    })
  };

  this.nextArticle = function () {
    $scope.$broadcast('slide:next');
  };

  this.previousArticle = function () {
    $scope.$broadcast('slide:previous');
  }
  this.more = function () {
    $scope.$broadcast('stopPlaying');
    $rootScope.lightboxCtrl.setLightbox('article', {
      article: this.article,
      category: this.category
    });
  };

  this.jump = function (article) {
    if (this.article.id == article.id) {
      return;
    }
    this.next = article;
    $timeout(function () {
      self.nextArticle();
    })
  }

  this.setArticle(article);
}

ArticleSearchController.$inject = ['$scope', 'Article'];
function ArticleSearchController($scope, Article) {
  var self = this;
  this.results = null;

  this.search = function () {
    this.results = Article.query({
      search: $scope.query
    });
  };

  $scope.$watch('query', function (query) {
    if (query) {
      self.search();
    } else {
      self.results = null;
    }
  });
}




galleriesConfig.$inject = ['$routeProvider'];
function galleriesConfig($routeProvider) {
  $routeProvider
    .when('/galleries', {
      controller: 'GalleriesController',
      controllerAs: 'ctrl',
      templateUrl: 'galleries/index.html'
    })
    .when('/galleries/:category', {
      controller: 'CategoryController',
      controllerAs: 'ctrl',
      templateUrl: 'galleries/category.html'
    })
    .when('/galleries/:category/whateva', {
      controller: 'SubcategoryController',
      controllerAs: 'ctrl',
      templateUrl: 'galleries/subcategory.html',
      resolve: {
        article: ['$route', '$q', 'Article', function ($route, $q, Article) {
          return $q(function (resolve, reject) {
            Article.mostRecent($route.current.params, function (article) {
              resolve(article);
            }, function () {
              resolve(null);
            });
          });
        }],

        articles: ['$route', '$q', 'Article', function ($route, $q, Article) {
          return Article.query($route.current.params).$promise;
        }]
      }
    })
    .when('/galleries/:category/:subcategory', {
      controller: 'SubcategoryController',
      controllerAs: 'ctrl',
      templateUrl: 'galleries/subcategory.html',
      resolve: {
        article: ['$route', '$q', '$location', 'Article', function ($route, $q, $location, Article) {
          if ('article' in $location.search()) {
            return Article.get({id: $location.search()['article']}).$promise;
          }
          return $q(function (resolve, reject) {
            Article.mostRecent($route.current.params, function (article) {
              resolve(article);
            }, function () {
              resolve(null);
            });
          });
        }],

        articles: ['$route', '$q', 'Article', function ($route, $q, Article) {
          return Article.query($route.current.params).$promise;
        }]
      }
    });
}

angular.module('mofa.galleries', [])
  .controller('GalleriesController', GalleriesController)
  .controller('CategoryController', CategoryController)
  .controller('SubcategoryController', SubcategoryController)
  .controller('ArticleSearchController', ArticleSearchController)
  .config(galleriesConfig);

})();
