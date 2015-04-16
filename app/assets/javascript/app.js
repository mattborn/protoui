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

  $stateProvider.state('new', {
    url: '/new',
    controller: 'New.controller',
    templateUrl: '/app/templates/new.html'
  });

});

protoUI.controller('Landing.controller', ['$scope', function($scope) {
  
}]);

protoUI.controller('New.controller', ['$scope', function($scope) {
  
}]);