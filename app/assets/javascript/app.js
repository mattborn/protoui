var protoUI = angular.module('ProtoUI', ['ui-router']);

protoUI.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider.state('landing', {
    url: '/',
    controller: 'Landing.controller',
    templateUrl: '/app/templates/landing.html'
  })

}]);
  console.log("debug");

protoUI.controller('Landing.controller', ['$scope', function($scope) {
  console.log("landing controller");
}]);