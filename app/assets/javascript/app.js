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

  $stateProvider.state('newBasics', {
    url: '/new-basics',
    controller: 'NewBasics.controller',
    templateUrl: '/app/templates/new-basics.html'
  });

  $stateProvider.state('newHealthHistory', {
    url: '/new-health-history',
    controller: 'NewHealthHistory.controller',
    templateUrl: '/app/templates/new-health-history.html'
  });

});

protoUI.controller('Landing.controller', ['$scope', function($scope) {
  
}]);

protoUI.controller('NewBasics.controller', ['$scope', function($scope) {
 
}]);

protoUI.controller('NewHealthHistory.controller', ['$scope', function($scope) {

}]);