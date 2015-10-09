/**
 * Created by shivani on 8/3/15.
 */
(function() {
    var UserDetailsController = function($scope, $routeParams, $window, $log, userFactory, $location) {
        var username = $routeParams.username;
        $scope.userDetails = {}
        userFactory.getUserDetails(username).success(function(result) {
            if (result === "error")
                $location.path("fail");
            else {
                $scope.userDetails = result;
            }
        }).error(function(data, status, headers, config) {
            $window.alert("Failed " + status);
        });

        $scope.addUserDetails = function(userDetails){
            userFactory.addUser(userDetails);
        };
        //$window.alert(userDetails);
    };

    UserDetailsController.$inject = ['$scope', '$routeParams', '$window', '$log', 'userFactory', '$location'];

    angular.module('userManagementApp')
        .controller('UserDetailsController', UserDetailsController);
}())