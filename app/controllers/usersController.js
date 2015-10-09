/**
 * Created by shivani on 8/3/15.
 */
(function() {
    var UsersController = function($scope, $window, $log, userFactory) {

        $scope.appUsers = userFactory.getUsers();

        $scope.removeUser = function(username){
            userFactory.removeUser(username).success(function(result) {
                if (result === "error")
                    $location.path("fail");
                else {
                    $scope.appUsers = result;
                }
            }).error(function(data, status, headers, config) {
                $window.alert("Failed " + status);
            });
        }
    };

    UsersController.$inject = ['$scope', '$window', '$log', 'userFactory'];

    angular.module('userManagementApp')
        .controller('UsersController', UsersController);
}())