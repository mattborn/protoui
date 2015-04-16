var protoUI = angular.module('ProtoUI', ['ui.router']);

protoUI.config(function($stateProvider, $locationProvider) {

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $stateProvider.state('landing', {
    url: '/',
    controller: 'Landing.controller',
    templateUrl: '/app/templates/landing.html'
  });

});

protoUI.controller('Landing.controller', ['$scope', function($scope) {
  console.log("landing controller");
}]);