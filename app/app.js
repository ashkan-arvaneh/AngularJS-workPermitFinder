// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope' ,'$filter','$log','$http','$timeout', function ($scope, $filter,$log,$http,$timeout) {
    
	$scope.name= '';
	$scope.sortType     = 'Location'; // set the default sort type
	$scope.sortReverse  = false;  // set the default sort order
	$scope.searchFish   = '';     // set the default search/filter term
	
	$http.get('/api/employer_list.json')
		.then (function mySuccess(response) {
			$scope.myData = response.data.Root.EmployeeInfo;
			$log.info(response);
		}, function myError (status) {
			$log.warn("Something went wrong");
		});

	/*$scope.filteredText = function() { 
		return $filter('lowercase')($scope.name);
	};
	$scope.$watch('name', function(newValue, oldValue, scope) {
		
		console.info('Changed!');
		console.log('old:' + oldValue)
		console.log('new:' + newValue)

	});
	$timeout(function() {
		$scope.name= 'Ashkan';
		console.info('Changed!');
	}, 3000);*/

}]);



