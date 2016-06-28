hrApp.controller('EmployeeViewController', ['$scope', '$http', '$routeParams', '$location', 'commonResourcesFactoryBackup',
    function($scope, $http, $routeParams, $location, commonResourcesFactoryBackup) {

        $scope.employee = {};
       
        $http.get(commonResourcesFactoryBackup.findOneEmployeeUrl + $routeParams.employeeId)
            .success(function(data, status, headers, config) {
                $scope.employee = data;
            })
            .error (function(data, status, headers, config){
                alert("Error: " + status);
            });


        $scope.back = function() {
            $location.url('/employeeslist/');
        }

    }]);