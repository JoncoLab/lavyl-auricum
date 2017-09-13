app.directive('makeOrder', function() {
    return {
        scope: {
            info: '='
        },
        templateUrl: "http://lavyl-auricum.joncolab.pro/scripts/js/directives/order.html"
    };
});