app.controller('MainController', ['$scope', function ($scope) {

    $scope.products = [
        {
            name: 'Lavyl Auricum',
            amount: '50 мл.',
            front: 'images/item-1.png',
            back: 'images/item-back-1.png',
            price: 990,
            number: 0
        },
        {
            name: 'lavyl Auricum',
            amount: '150 мл.',
            front: 'images/item-2.png',
            back: 'images/item-back-2.png',
            price: 2362.20,
            number: 0
        },
        {
            name: 'lavyl Auricum Sensitive',
            amount: '50 мл.',
            front: 'images/item-3.png',
            back: 'images/item-back-3.png',
            price: 990,
            number: 0
        },
        {
            name: 'lavyl Auricum Sensitive',
            amount: '150 мл.',
            front: 'images/item-4.png',
            back: 'images/item-back-2.png',
            price: 2362.20,
            number: 0
        }
    ];

    $scope.add = function (index) {
        $scope.products[index].number++;
    };

    $scope.subtract = function (index) {
        $scope.products[index].number--;
        if ($scope.products[index].number < 0) {
            $scope.products[index].number = 0;
        }
    };
}]);