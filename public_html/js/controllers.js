/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global app */

'use strict';

var myAppControllers = angular.module('myAppControllers', []);

myAppControllers.controller('MainCtrl', ['$scope',
    function ($scope) {
        $scope.message = "Hello World";
    }]);

myAppControllers.controller('ShowCtrl', ['$scope',
    function ($scope) {
        $scope.message = "Show The World";
    }]);
        