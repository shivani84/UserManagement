/**
 * Created by shivani on 7/30/15.
 */
(function (){
    var app = angular.module('userManagementApp', ['ngRoute']);

    app.config(function ($routeProvider){
        $routeProvider
            .when('/', {
                controller: 'LoginController',
                templateUrl: 'partials/login.html'
            })
            .when('/success', {
                controller: 'LoginController',
                templateUrl: 'partials/success.html'
            })
            .when('/fail', {
                controller: 'LoginController',
                templateUrl: 'partials/fail.html'
            })
            .when('/users', {
                controller: 'UsersController',
                templateUrl: 'partials/userslist.html'
            })
            .when('/userdetails/:username', {
                controller: 'UserDetailsController',
                templateUrl: 'partials/user_details.html'
            })
            .when('/adduser', {
                controller: 'UserDetailsController',
                templateUrl: 'partials/add_user.html'
            })
            .otherwise({ redirectTo: '/' } );
    })

}());