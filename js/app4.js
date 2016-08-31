/// <reference path="angular.min.js" />
var myApp = angular.module("myApp",[]);

myApp.controller("myController", function($scope){
    
    var employees = [
        
        
        {name:"Anurag Kumar",dob:new Date("november 23 , 1990"),salary:10000},
         {name:"Manoj Kumar",dob:new Date("August 23 , 1990"),salary:23000},
         {name:"Rahul Kumar",dob:new Date("January 23 , 1990"),salary:35000},
         {name:"Sumant Kumar",dob:new Date("March 23 , 1990"),salary:11000}, 
        {name:"Sunil Kumar",dob:new Date("May 23 , 1990"),salary:40000}
        
        
    ];
    
    $scope.employees=employees;
    $scope.rowLimit=3;
    
    
});