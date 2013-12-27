var newsListApp = angular.module('newsListApp', []);

newsListApp.controller('NewsListCtrl', function ($scope, $http) {
    var newsUrl = 'http://api.ihackernews.com/page?format=jsonp&callback=JSON_CALLBACK';

    $http({
        method: 'jsonp',
        url: newsUrl,
        cache: true
    }).success(function (data) {
        $scope.news = data.items;
    });
});
