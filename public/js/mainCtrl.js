angular.module('app').controller('mainCtrl', function($scope, mainSrv) {

$scope.test = 'controller'
$scope.test2 = mainSrv.test

})