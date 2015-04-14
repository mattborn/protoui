protoUI = angular.module('ProtoUI', ['ui-router']);

protoUI.config(['$stateProvider', function($stateProvider, $locationProvider) {

  $stateProvider.state('landing', {
    url: '/',
    controller: 'Landing.controller',
    templateUrl: '/app/templates/landing.html'
  })

}]);

protoUI.controller('Landing.controller', ['$scope', function($scope) {

}]);