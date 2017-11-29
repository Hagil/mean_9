console.log('loaded frontend_app');
var frontend_app = angular.module('patients', ["ngRoute"]);
frontend_app.config(do_data_patients);
frontend_app.controller('all_patients', do_all_patients);
frontend_app.controller('single_patient', do_single_patient);


function do_data_patients($routeProvider) {
    console.log('getting patients');
   $routeProvider.when("/", {
       templateUrl: "partials/patients.html",
       controller: 'all_patients'
   }).when("/patient/:_id", {
       templateUrl: "partials/patient_record.html",
       controller: 'single_patient'
   });
}
   function do_all_patients($scope, $http){
       console.log('getting all patients');
    $http.get('/api/v9/read').then(function (results){
        console.log(results);
        $scope.patients = results.data;
    });
   }
   
   function do_single_patient($scope, $http, $routeParams){
       console.log('getting single patient');

   }
   
    // $scope.read = function () {
    //     $http
    //         .get('/api/v9/read')
    //         .then(function (patients) {
    //             console.log(server_object);
    //             $scope.patients = patients.data;
    //             console.log($scope.patients);
    //         });
    // }
    // $scope.read();

    // $scope.create = function () {
    //     var data = {
    //         name: $scope.input_name,
    //         gender: $scope.input_gender,
    //         email: $scope.input_email,
    //         cell: $scope.input_cell,
    //         drug: $scope.input_drug,
    //         usage: $scope.input_usage
    //     }
    //     $http.post('')
    // }

