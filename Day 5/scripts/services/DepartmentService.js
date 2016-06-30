hrApp.service('DepartmentService', ['$http', 'CommonResourcesFactoryBackup', function ($http, CommonResourcesFactoryBackup) {
        return {
            findDepartments: function (department) {
                return $http.get(CommonResourcesFactoryBackup.findAllDepartmentsUrl)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                            "id": 100,
                            "firstName": "Steven",
                            "lastName": "King",
                            "email": "SKING",
                            "phoneNumber": "515.123.4567",
                            "hireDate": "1987-06-17",
                            "jobId": 1,
                            "salary": 24000.00,
                            "commissionPct": null,
                            "managerId": null,
                            "departmentId": 90
                        };
                    });
            }
        }
    }]
);