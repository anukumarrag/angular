
 /// <reference path="angular.min.js" />

var myModule = angular.module("myModule",[]);

var myController = function($scope){


 var employee = {

     firstName:"Anurag",
     lastName:"Kumar",
     gender:"Male",
     image:"images/anurag.jpg"

 };

    $scope.employee = employee;

};



myModule.controller("myController", myController);