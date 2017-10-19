/**
 * Created by Administrator on 2017/10/18.
 */
var app=angular.module("myApp",["ui.router"]);
app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state("shopping",{
        url:"/stopping",
        templateUrl:"./App/view/shopping.html",
        controller:"shoppingController"
    });
    $urlRouterProvider.otherwise("/shopping");
});


