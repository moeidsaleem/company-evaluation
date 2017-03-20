(function () {

  'use strict';

  angular
    .module('app')
    .controller('resultController', resultController);

  resultController.$inject = ['authService','$scope','$http'];

  function resultController(authService,$scope,$http) {
   
    var vm = this;
    vm.authService = authService;


$scope.exportPdf = function(){
  html2canvas(document.getElementById('exportthis'), {
            onrendered: function (canvas) {
                var data = canvas.toDataURL();
                var docDefinition = {
                    content: [{
                        image: data,
                        width: 500,
                    }]
                };
                pdfMake.createPdf(docDefinition).download("company_details.pdf");
            }
        });

}




      $scope.getCompanies = function(){
      console.log('get Companies started');
    $http.get('/api/companies/').then(function(response){
      $scope.companies = response.data;
    });
  








    }

  }

}());
