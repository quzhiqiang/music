var bookStoreList = angular.module("bookStoreList",[]);

bookStoreList.controller("bookStoreListController",function($scope,$http){
	$http.get("data/books.json").success(function(resp){
		$scope.books = resp.data;
	});
	
	$scope.xu = "id";
});
