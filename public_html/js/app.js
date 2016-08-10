/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var myApp = angular.module('myApp', [
    'ngRoute',
    'myAppControllers',
    'myAppservices'
]);

//define routes

myApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider.
                when('/',
                        {
                            templateUrl: 'partials/main.html',
                            controller: 'BlogCtrl'
                        }).
                when('/blogpost/:id',
                        {
                            templateUrl: 'partials/blogpost.html',
                            controller: 'BlogViewCtrl'
                        }).
                when('/main',
                        {
                            templateUrl: 'partials/main.html',
                            controller: 'MainCtrl'
                        }).
                when('/show',
                        {
                            templateUrl: 'partials/show.html',
                            controller: 'ShowCtrl'
                        }).
                when('/customer',
                        {
                            templateUrl: 'partials/customer.html',
                            controller: 'CustomerCtrl'
                        }).
                when('/addcustomer',
                        {
                            templateUrl: 'partials/newcustomer.html',
                            controller: 'AddCustomerCtrl'
                        }).
                when('/addedcustomer/:customer/:city',
                        {
                            templateUrl: 'partials/addedCustomer.html',
                            controller: 'AddedCustomerCtrl'
                        });
        $locationProvider.html5Mode(false).hashPrefix('!');
    }
]);

