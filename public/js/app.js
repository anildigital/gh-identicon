function App($scope) {
    var username;
    if (window.location.pathname !== "/") {
        username = window.location.pathname.replace("/", "");
    }
    else {
        var usernames = Array("unclebob", "dhh", "martinfowler", "matz", "defunkt");
        username = usernames[Math.floor(Math.random()*usernames.length)];
    }
    $scope.query = username

    $scope.tweet = function() {
        var text = "My GitHub Identicon is http://github.com/identicons/" + $scope.query +".png Check out yours at " + "http://" +window.location.host;
        var href="http://twitter.com/intent/tweet?text=" + encodeURI(text);
        window.open(href, '_blank');
    }

}
