/// </// <reference path="../app.js" />

app
	.controller('FileCtrl', [
	'$scope',
	function ($scope) {

		$scope.model = {};
		$scope.flowTarget = {
			target: 'http://localhost:51710/folders/uploads/files',
			singleFile: false,
			testChunks: false
		};

		$scope.flowApi = 'http://localhost:51710/folders/files/';
		
		$scope.upfile = {
			success: function(file, message, flow){
				console.log(file.name);
				$scope.model.fileName = file.name;
			},
			progress: function(file, flow){
			},
			added: function(file, event, flow){
				console.log(file.getExtension());
				return !!{png:1,gif:1,jpg:1,jpeg:1}[file.getExtension()];
			},
			fadded: function(file, event, flow){
			},
			retry: function(file, flow){
			},
			error: function(file, message, flow){
			},
			complete: function(){
			},
			uploadStarted: function(){
			},
			fProgress: function(){
			}
		};
		
		$scope.save = function(model){
			console.log('model: ' + model.fileName);
		};

	}]);