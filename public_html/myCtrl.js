/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 /* global app */

app.controller('myCtrl', function ($scope,$http){
               $scope.firstName="Kangmas";
               $scope.lastName="Junior";
               $http.get("http://www.w3schools.com/angular/customers.php")
                       .then(function (response){
                          $scope.customers=response.data.records; 
                       });
            });