/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var myApp=angular.module('myApp',[
    'ngRoute',
    'myAppControllers'
]);

//define routes

myApp.config(['$routeProvider','$locationProvider',
            function ($routeProvider, $locationProvider){
                $routeProvider.
                when('/',
                {
                    templateUrl: 'partials/main.html',
                    controller: 'MainCtrl'
                }).
                when('/show',
                {
                    templateUrl:'partials/show.html',
                    controller: 'ShowCtrl'
                });
            $locationProvider.html5Mode(false).hashPrefix('!');    
            }  
]);

