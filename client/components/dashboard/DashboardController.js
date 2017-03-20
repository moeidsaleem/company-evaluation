(function () {

  'use strict';

  angular
    .module('app')
    .controller('DashboardController', HomeController);

  HomeController.$inject = ['authService','$http','$scope','$state'];

  function HomeController(authService,$http,$scope,$state) {
  
authService.getProfileDeferred().then(function (profile) {
      vm.profile = profile;
    });

      $scope.cus = false;
      $scope.cusBtn = true;
    var vm = this;
    vm.authService = authService;

    $scope.formData= {};

    $scope.showSearch= function(){
    $scope.cus = true;
    $scope.cusBtn = false;
    }

   $scope.getFranchise = function(){
    $http.get('components/home/data/franchise.json').then(function(response){
        $scope.franchise = response.data;
    })
   }



      $scope.getNaics = function(){
    $http.get('components/home/data/naics.json').then(function(response){
        $scope.naics = response.data;
    })
   }
  
  



      $scope.onSubmit = function(){
   
    	 $http({  
    	  method  : 'POST',
          url     : '/api/companies',
          data    : $scope.formData })
    .then(function(response){
         //your code in case the post succeeds
          	console.log('data added');
         console.log(response.data);
     })
    .catch(function(err){
         //your code in case your post fails
         console.log(err);
     });
   
   $state.go('result');
  
    }
    

  }

}());
