function do_all_patients($scope, $http) {
    console.log('getting all patients');
    $http
        .get('/api/v9/read')
        .then(function (results) {
            console.log(results);
            $scope.patients = results.data;
        });
}