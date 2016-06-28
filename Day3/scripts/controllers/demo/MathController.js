hrApp.controller('MathController', 'MathService', ['$scope', function($scope, MathService){
    
    $scope.calculate = function() {
        $scope.op1= MathService.add(a, b);
        $scope.op2= MathService.substract(a, b);
        $scope.op3= MathService.multiply(a, b);
        $scope.op4= MathService.divide(a, b);
//        TODO #13 refactor your calculations using MathService
    }

}]);
