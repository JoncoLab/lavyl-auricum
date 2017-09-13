app.controller('MainController', ['$scope', function ($scope) {

    $scope.products = [
        {
            name: 'Lavyl Auricum',
            amount: '50 мл.',
            front: 'images/item-1.png',
            back: 'images/item-back-1.png',
            price: 990,
            amountNumber: 0
        },
        {
            name: 'lavyl Auricum',
            amount: '150 мл.',
            front: 'images/item-2.png',
            back: 'images/item-back-2.png',
            price: 2362.20,
            amountNumber: 0
        },
        {
            name: 'lavyl Auricum Sensitive',
            amount: '50 мл.',
            front: 'images/item-3.png',
            back: 'images/item-back-3.png',
            price: 990,
            amountNumber: 0
        },
        {
            name: 'lavyl Auricum Sensitive',
            amount: '150 мл.',
            front: 'images/item-4.png',
            back: 'images/item-back-2.png',
            price: 2362.20,
            amountNumber: 0
        }
    ];

    $scope.getTotalSum = function() {
        $scope.sum = 0;
        $scope.products.forEach(function (t) {
            $scope.sum += t.amountNumber * t.price;
        });
        return $scope.sum;
    };

    $scope.getTotalAmount = function () {
        $scope.amount = 0;
        $scope.products.forEach(function (t) {
           $scope.amount += t.amountNumber;
        });
        return $scope.amount;
    };
    
    $scope.add = function (index) {
        $scope.products[index].amountNumber++;
    };

    $scope.subtract = function (index) {
        $scope.products[index].amountNumber--;
        if ($scope.products[index].amountNumber < 0) {
            $scope.products[index].amountNumber = 0;
        }
    };
}]);