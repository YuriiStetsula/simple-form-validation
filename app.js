
// MODULE
var app = angular.module("FormValidation",[])




//CONTROLLERS 

app.controller("defaultCtrl",['$scope', function($scope) {

this.getError = function (err) {
    if (angular.isDefined(err)){
        if(err.required){
            return "This is required field"
        }else if (err.email){
            return "Please enter correct email@email.com"
        }
    }
}

this.createNewUser = function (data){
    console.log(data)
}
}] )




