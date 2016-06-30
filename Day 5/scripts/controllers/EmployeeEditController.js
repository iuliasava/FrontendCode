hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactoryBackup', 'DepartmentService', 'JobsService', 'EmployeeService',
    function ($scope, $http, $routeParams, $location, commonResourcesFactoryBackup, DepartmentService, JobsService, EmployeeService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        DepartmentService.findDepartments()
            .then(function(res){
                    $scope.departments = res.data;
                },
                function(err){
                    console.log("Error" + err);
                });

        JobsService.findJobs()
            .then(function(res){
                    $scope.jobs = res.data;
                },
                function(err){
                    console.log("Error" + err);
                });

        EmployeeService.findAll()
            .then(function(res){
                    $scope.managers = res.data;
                },
                function(err){
                    console.log("Error" + err);
                });

        EmployeeService.findById($routeParams.employeeId)
            .then(function(res){
                    $scope.employee = res.data;
                },
                function(err){
                    console.log("Error" + err);
                });
        /**
         *
         * Reset form
         */
        $scope.reset = function () {
            this.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: commonResourcesFactoryBackup.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);