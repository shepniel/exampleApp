angular.module('starter.controller',[])

.controller('FirstController',function($state,$stateParams,$scope){
	/*$rootScope.$state=$state;
	$rootScope.$stateParams=$stateParams;*/
	$scope.go = function(state){
		$state.go(state);
	}
})
.controller('SecondController',function($scope){
	
})
.controller('ThirdController',function($rootScope,$state,$stateParams){
		$rootScope.$state=$state;
	$rootScope.$stateParams=$stateParams;	
});