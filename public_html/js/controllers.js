/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global app */

'use strict';

var myAppControllers = angular.module('myAppControllers', []);
//chapter 5

myAppControllers.controller('BlogCtrl', [
    '$scope',
    function BlogCtrl($scope) {
        $scope.blogList = [
            {
                "_id": 1,
                "date": 1400623623107,
                "introText": "This is a blog post about AngularJS,\n\
We will cover how to build",
                "blogText": "This is a blog post about AngularJS,\n\
We will cover how to build a blog and how to add comments to blog post "
            },
            {
                "_id": 2,
                "date": 1800623623107,
                "introText": "This is a blog post about AngularJS,\n\
We will cover how to build",
                "blogText": "This is a blog post about AngularJS,\n\
We will cover how to build a blog and how to add comments to blog post "
            }
        ];
    }
]);

myAppControllers.controller('BlogViewCtrl', [
    '$scope', '$routeParams',
    function BlogViewCtrl($scope, $routeParams) {
        var blogId = $routeParams.id;
        var blog1 = {
            "_id": 1,
            "date": 1400623623107,
            "introText": "This is a blog post about AngularJS,\n\
We will cover how to build",
            "blogText": "This is a blog post about AngularJS,\n\
We will cover how to build a blog and how to add comments to blog post ",
            "comments": [
                {
                    "commentText": "Very good post. I love it."
                },
                {
                    "commentText": "When can we learn services."
                }
            ]
        };

        var blog2 = {
            "_id": 2,
            "date": 1400625623107,
            "introText": "This is a blog post about AngularJS,\n\
We will cover how to build",
            "blogText": "This is a blog post about AngularJS,\n\
We will cover how to build a blog and how to add comments to blog post ",
            "comments": [
                {
                    "commentText": "Very good post. I love it."
                },
                {
                    "commentText": "When can we learn services."
                }
            ]
        };
        if (blogId==='1'){
            $scope.blogEntry=blog1;
        }else if(blogId==='2'){
            $scope.blogEntry=blog2;
        }

    }
]);

myAppControllers.controller('MainCtrl', ['$scope', '$location', '$http',
    function MainCtrl($scope, $location, $http) {
        $scope.message = "Hello World";
    }]);

myAppControllers.controller('ShowCtrl', ['$scope', '$location', '$http',
    function ShowCtrl($scope, $location, $http) {
        $scope.message = "Show The World";
    }]);

myAppControllers.controller('CustomerCtrl', ['$scope',
    function CustomerCtrl($scope) {
        $scope.customerName = "Paijo";
        $scope.customerNumber = "123456";

        //add method to scope
        $scope.changeCustomer = function () {
            $scope.customerName = $scope.cName;
            $scope.customerNumber = $scope.cNumber;
        };
    }
]);

myAppControllers.controller('AddCustomerCtrl',
        ['$scope', '$location',
            function AddCustomerCtrl($scope, $location) {
                $scope.submit = function () {
                    $location.path('/addedcustomer/' + $scope.cName + "/" + $scope.cCity);
                };
            }
        ]);

myAppControllers.controller('AddedCustomerCtrl',
        ['$scope', '$routeParams',
            function AddedCustomerCtrl($scope, $routeParams) {
                $scope.customerName = $routeParams.customer;
                $scope.customerCity = $routeParams.city;
            }
        ]);
        