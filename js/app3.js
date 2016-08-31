 /// <reference path="angular.min.js" />
var myApp = angular.module("myApp",[]);

myApp.controller("myController", function($scope){

    var technologies = [

        {name:"java", likes:0,dislikes:0},
         {name:"C", likes:0,dislikes:0},
          {name:"C++", likes:0,dislikes:0},
           {name:"Angular", likes:0,dislikes:0}
    ];

    $scope.technologies=technologies;


    $scope.likes= function(technology){

        technology.likes++;
    }

 $scope.dislikes= function(technology){

        technology.dislikes++;
    }


});



myApp.controller("myController2", function($scope){

   var countries=[
        { name:"India" ,
          city:[{name:"Patna"},{name:"Delhi"},{name:"Kolkata"},{name:"Chennai"}]
        },
{ name:"USA" ,
          city:[{name:"A"},{name:"B"},{name:"C"},{name:"D"}]
        },
{ name:"CHINA" ,
          city:[{name:"1"},{name:"2"},{name:"3"},{name:"4"}]
        }


    ];

    $scope.countries=countries; 

});