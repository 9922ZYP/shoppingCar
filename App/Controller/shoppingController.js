/**
 * Created by Administrator on 2017/10/18.
 */
app.controller("stoppingController", ["$scope","shoppingServer",function ($scope,shoppingServer) {
    //$scope.name="xzq";
    shoppingServer.getProducts().then(function (res) {
        console.log(res);
        console.log(1111);
    })
}]);