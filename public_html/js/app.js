/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strct';
angular.module('myApp.directives', []);
var myApp = angular.module('myApp', [
    'ngRoute',
    'myAppControllers'

]);

//define routes

myApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider.
                when('/',
                        {
                            templateUrl: 'partials/main.html',
                            controller: 'HomeCtrl'
                        }).
                when('/products',
                        {
                            templateUrl: 'partials/products.html',
                            controller: 'ProductsCtrl'
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

//angular.module('myApp.directives').directive('slideit', function () {
//    
//  return {
//    link: function (scope, element, attrs) {  
//      console.log("$element"+element);
//      
//    }
//  };
//});

