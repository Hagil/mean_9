console.log('loaded frontend_app');
var frontend_app = angular.module('patients', []);
frontend_app.controller('data_patients', do_data_patients);

function do_data_patients($scope, $http){
    console.log('getting employees');
    $http.get('/api/v9/read').then(function (server_object){
        console.log(server_object);
        $scope.patients= server_object.data;
    })
}