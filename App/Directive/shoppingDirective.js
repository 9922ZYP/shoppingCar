/**
 * Created by Administrator on 2017/10/18.
 */
app.directive("shoppingCar",function(){
    return{
        templateUrl:"App/Views/temp/_shopping.html",
        scope: {
            item: "=item",
            index: "@index"
        },
        controller:"stoppingController"
    }
});