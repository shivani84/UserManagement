/**
 * Created by shivani on 7/29/15.
 */
(function(){
    var userFactory = function($http, $window, $location) {
        var factory = {};
        appUsers = {};
        var authenticateUrl = "http://localhost:4567/authenticate";
        var userDetailsUrl = "http://localhost:4567/userdetails";
        var addUserUrl = "http://localhost:4567/adduser";
        var removeUserUrl = "http://localhost:4567/removeuser";

        factory.authenticateUser = function(user) {
            return $http({
                method: "POST",
                url: authenticateUrl,
                data: user,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(result) {
                if (result === "error")
                    $location.path("fail");
                else {
                    appUsers = result;
                    $location.path("users");
                }
            }).error(function(data, status, headers, config) {
                    $window.alert("Failed " + status);
            });
        };

        factory.getUserDetails = function(username) {
            return $http({
                method: "POST",
                url: userDetailsUrl,
                data: username,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            });
        };

        factory.addUser = function(userDetails) {
            return $http({
                method: "POST",
                url: addUserUrl,
                data: userDetails,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(result) {
                if (result === "error")
                    $location.path("fail");
                else {
                    appUsers = result;
                    $location.path("users");
                }
            }).error(function(data, status, headers, config) {
                $window.alert("Failed " + status);
            });
        };

        factory.removeUser = function(username) {
            return $http({
                method: "POST",
                url: removeUserUrl,
                data: username,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            });
        };

        factory.getUsers = function() {
            return appUsers;
        }
        return factory;
    };

    userFactory.$inject = ['$http', '$window', '$location'];

    var app = angular.module('userManagementApp');

    app.factory('userFactory',
        userFactory);

}());