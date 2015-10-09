/**
 * Created by shivani on 7/28/15.
 */
(function() {
    var LoginController = function($scope, $window, $log, userFactory) {
        $scope.greet = function(user) {
            userFactory.authenticateUser(user);
        };
    };

    LoginController.$inject = ['$scope', '$window', '$log', 'userFactory'];

    angular.module('userManagementApp')
        .controller('LoginController', LoginController);

}());
