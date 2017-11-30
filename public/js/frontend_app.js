console.log('loaded frontend_app');
var frontend_app = angular.module('patients', ["ngRoute"]);
frontend_app.config(do_routes);
frontend_app.controller('all_patients', do_all_patients);
frontend_app.controller('single_patient', do_single_patient);






// $scope.read = function () {     $http         .get('/api/v9/read')
// .then(function (patients) {             console.log(server_object);
// $scope.patients = patients.data;             console.log($scope.patients);
//     }); } $scope.read(); $scope.create = function () {     var data = {
// name: $scope.input_name,         gender: $scope.input_gender, email:
// $scope.input_email,         cell: $scope.input_cell,         drug:
// $scope.input_drug,         usage: $scope.input_usage     }     $http.post('')
// }