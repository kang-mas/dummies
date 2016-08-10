/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

//services

var myAppServices=angular.module('myAppServices',['ngResource']);

myAppServices.factory('BlogPost',['$resource', function ($resource){
        
        return $resource("http://www,micbutton.com/rs/blogPost",{},{
           get: {
               method: 'GET', cache:false, isArray:false
           },
           save: {
               method: 'POST', cache:false, isArray:false
           },
           update: {
               method: 'PUT', cache:false, isArray:false
           },
           delete: {
               method: 'DELETE', cache:false, isArray:false
           }
           
        });
}]);



