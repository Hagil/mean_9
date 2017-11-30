function do_single_patient($scope, $http, $routeParams) {
    console.log('getting single patient');
    console.log('$routeParams');

    $scope.read = function () {
        console.log('getting single patient from backend!');

        $http.get('/api/v9/read/' + $routeParams._id)
            .then(function (result) {
                console.log('getting single patient from backend');
                console.log(result);
                $scope.patient = result.data;
            });
    }
    $scope.read();

    $scope.update = function (patient){
        console.log(patient);
        $http.put('/api/v9/update', patient).then(function (result){
            console.log(result);
            $scope.message = result.data.message;
        })
    }
    $scope.delete = function (patient){
        console.log('deleting patient');
        $http.delete('/api/v9/delete/' + patient._id).then(function(result){
            console.log('deleted patient!');
            $scope.message = result.data.message;
        })
    }
}