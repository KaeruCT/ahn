var newsListApp = angular.module('newsListApp', []);

newsListApp.controller('NewsListCtrl', function ($scope, $http) {
    var newsUrl = 'http://api.ihackernews.com/page?format=jsonp&callback=JSON_CALLBACK';

    $http({
        method: 'jsonp',
        url: newsUrl,
        cache: true
    }).success(function (data) {
        var news = [],
            url, i, item;

        for (i in data.items) {
            item = data.items[i];
            if (item.title.match(/^Ask HN/)) {
                url = 'https://news.ycombinator.com/item?id=' + item.id;
            } else {
                url = item.url;
            }

            news.push({
                id: item.id,
                title: item.title,
                url: url,
                commentCount: item.commentCount,
                commentUrl: 'https://news.ycombinator.com/item?id=' + item.id,
                points: item.points,
                postedAgo: item.postedAgo,
                postedBy: item.postedBy,
                postedByUrl: 'https://news.ycombinator.com/user?id=' + item.postedBy,
            });
        }

        $scope.news = news;
    });
});
