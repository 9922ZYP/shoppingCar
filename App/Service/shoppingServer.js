/**
 * Created by Administrator on 2017/10/18.
 */
app.factory("shoppingServer",["baseServer",function(baseServer){
    return {
        getProducts:function(){
            return baseServer.ajax("get","http://localhost:8080/?data");
        }
    }
}]);