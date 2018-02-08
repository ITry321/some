var app = angular.module("app", ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: '/home.html'
        , controller: 'homeCtrl'
        , controllerAs: 'home'
    });
    $routeProvider.when('/item', {
        templateUrl: '/item.html'
        , controller: 'itemCtrl'
        , controllerAs: 'item'
    });
})
app.filter('uah', function () {
    return function (element) {
        if(element>100){
           return element + " \u20B4"; 
        }
        else{
           return element + ".00" + " \u20B4"
        }
    }
});
app.filter('searchItem', function(){
    return function(array,search){
        if(!search){
            return array;
        }
        var filtered =[];
        for(var i=0; i<array.length; i++){
            if(array[i].name.toLowerCase().indexOf(search.toLowerCase())>-1){
                filtered.push(array[i]);
            }
        }
        
        return filtered;
    }
});
app.filter('minMaxPrice', function(){
           return function(array, min, max){
               if(!min && !max){
                   return array;
               }
               var filtered = [];
              for(var i=0; i<array.length; i++){
                  if(test(array[i], min, max)){
                      filtered.push(array[i]);
                  }
              }
               
               return filtered;
           }
           function test(testment, min, max){
               if(min && max){
                   return testment.price >=min && testment.price <=max
               }
               else if(min){
                 return testment.price >=min;  
               }
               else if(max){
                   return testment.price <=max; 
               }
           }
           })