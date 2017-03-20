(function () {

  'use strict';

  angular
    .module('app')
    .controller('formController', formController);

  formController.$inject = ['authService','$http','$scope','$state'];

  function formController(authService,$http,$scope,$state) {

console.log('form controller launched');  
  // $state.transitionTo('stage1');
      $scope.$state = $state;


    var vm = this;
    vm.authService = authService;
     
          $scope.year2 = $scope.year--;
          let y2 = $scope.year2--;
          $scope.year3 = y2--;

  
    $scope.objColor = {
      backgroundColor:"rgb(76,175,80)"
    }
$scope.setColor = function(item){
    if($state.current ==item){
      console.log('current state is = '+$state.current )
      return $scope.objColor.backgroundColor ='red';
    } else{
      return $scope.objColor.backgroundColor ='blue';
    }
}

  $scope.adjustments = [];
  $scope.locations = [];
  $scope.owners = [];

  $scope.decide = function(){
  angular.forEach($scope.owners, function(owner,ownerIndex){
    angular.forEach($scope.adjustments,function(adj, adjIndex){
      adjustments.owner = owners.ownerName;
    });
  });
}


  $scope.addNewChoice = function(items,refKey) {
    var newItemNo = items.length+1;
    items.push({'id':refKey+newItemNo});
  };
    
  $scope.removeChoice = function(items) {
    var lastItem = items.length-1;
    items.splice(lastItem);
  };

  }

}());
