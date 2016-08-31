/// <reference path="angular.min.js" />

var myApp = angular.module("myApp",[]);


myApp.controller("myController" , function($scope,$log){


var employees = [

    {name:"Anurag Kumar" , city:"Delhi" , salary:20000},
{name:"Manoj Kumar" , city:"Kolkata" , salary:23400},
{name:"Sanjeev Kumar" , city:"Noida" , salary:50000},
{name:"Sumant Kumar" , city:"Patna" , salary:67000}


];

$scope.employees=employees; 

});