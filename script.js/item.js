app.controller("itemCtrl", function () {
    var vm = this;
    vm.items = [
        {
            id: 1
            , category: {
                id: 1
                , name: "Clothes"
            }
            , name: "Jeans"
            , price: 800
            , size: 42
        }
        , {
            id: 2
            , category: {
                id: 2
                , name: "Clothes"
            }
            , name: "T-shirt"
            , price: 200
            , size: 41
        }
    ];
    vm.categories = [
        {
            id: 1
            , name: "Clothes"
        }
        , {
            id: 2
            , name: "Shoes"
        }
        , {
            id: 3
            , name: "Bags"
        }
    ];
    vm.currentItem = {};
    vm.id = 2;
    vm.search = '';
    vm.min = '';
    vm.max = '';
    
    vm.page = 1;
    vm.size = 5;
    vm.pageCount = vm.items.length;
    vm.save = function () {
        if (!vm.currentItem.id) {
            vm.currentItem.id = ++vm.id;
            vm.items.push(vm.currentItem);
            console.log(vm.currentItem);
        }
        vm.currentItem = {};
    }
    vm.update = function (item) {
            vm.currentItem = item;
        }
        //    vm.delete = function($index){
        //        vm.items.splice($index, 1);
        //    }
    vm.delete = function (id) {
        var index = vm.items.findIndex(item => item.id = id);
        vm.items.splice(index, 1);
    }
    vm.previous = function (event) {
        event.preventDefault();
        if (vm.page > 1) {
            vm.page--;
        }
    };
    vm.next = function (event) {
        event.preventDefault();
        if (vm.page < vm.pageCount) {
            vm.page++;
        }
    };
})