hrApp.controller('FormController', ['$scope', function($scope) {
    $scope.submit = function(){
        if($scope.myForm.$valid){
            window.alert("Successfully Sumitted");
        }
    }
}]);