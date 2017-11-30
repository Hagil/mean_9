function do_single_patient($scope, $http, $routeParams) {
    console.log('getting single patient');
    $scope.read = function () {
        console.log('getting single patient from backend!')
        $http
            .get('/api/v9/read/' + $routeParams._id)
            .then(function (result) {

                console.log('getting single patient from backend')
                $scope.patient = result.data;
            });
    }
    $scope.read();
}