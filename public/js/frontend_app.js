console.log('loaded frontend_app');
var frontend_app = angular.module('patients', []);
frontend_app.controller('data_patients', do_data_patients);

function do_data_patients($scope, $http) {
    console.log('getting patients');
    $scope.read = function () {
        $http
            .get('/api/v9/read')
            .then(function (patients) {
                console.log(server_object);
                $scope.patients = patients.data;
                console.log($scope.patients);
            });
    }
    $scope.read();

    $scope.create = function () {
        var data = {
            name: $scope.input_name,
            gender: $scope.input_gender,
            email: $scope.input_email,
            cell: $scope.input_cell,
            drug: $scope.input_drug,
            usage: $scope.input_usage
        }
        $http.post('')
    }

}