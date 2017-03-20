(function () {

  'use strict';

  angular
    .module('app', ['auth0.lock', 'angular-jwt', 'ui.router','ngAnimate'])
    .config(config);

  config.$inject = ['$stateProvider', 'lockProvider', '$urlRouterProvider', '$locationProvider', 'jwtOptionsProvider'];

  function config($stateProvider, lockProvider, $urlRouterProvider,$locationProvider,jwtOptionsProvider) {

    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        controller: 'DashboardController',
        templateUrl: 'components/dashboard/dashboard.html',
        controllerAs: 'vm'
      })
      .state('result', {
        url: '/result',
        controller: 'resultController',
        templateUrl: 'components/result/result.html',
        controllerAs: 'vm'
      })
      .state('login', {
        url: '/login',
        controller: 'LoginController',
        templateUrl: 'components/login/login.html',
        controllerAs: 'vm'
      })
      .state('form',{
        url:'/dashboard/form/',
        controller: 'formController',
        templateUrl: 'components/form/form.html',
        controllerAs: 'vm'
      })
      .state('stage1', {
        url:'stage1',
        parent:'form',
        templateUrl:'components/form/stage1/stage1.html',
        controller:'formController'
      })
      .state('overview',{
        parent:'stage1',
        templateUrl:'components/form/stage1/stage1.overview.html',
        controller:'formController'
      })
      .state('location',{
        parent:'stage1',
        templateUrl:'components/form/stage1/stage1.location.html',
        controller:'formController'
      }) 
      .state('ownership',{
        parent:'stage1',
        templateUrl:'components/form/stage1/stage1.ownership.html',
        controller:'formController'
      })  
      //STAGE 2 START
      .state('stage2',{
        url:'stage2',
        parent:'form',
        templateUrl:'components/form/stage2/stage2.html',
        controller:'formController'
      })
       .state('incomeStatement',{
        parent:'stage2',
        templateUrl:'components/form/stage2/stage2.incomeStatement.html',
        controller:'formController'
      }) 
       .state('adjustments',{
        parent:'stage2',
        templateUrl:'components/form/stage2/stage2.adjustments.html',
        controller:'formController'
      })
        .state('weighting',{
        parent:'stage2',
        templateUrl:'components/form/stage2/stage2.weighting.html',
        controller:'formController'
      })
         .state('balanceSheet',{
        parent:'stage2',
        templateUrl:'components/form/stage2/stage2.balanceSheet.html',
        controller:'formController'
      })
// THIS IS STAGE 3
      .state('stage3',{
        parent:'form',
        url:'stage3',
        templateUrl:'components/form/stage3/stage3.html',
        controller:'formController'
      })
      .state('stage4',{
        parent:'form',
        url:'stage4',
        templateUrl:'components/form/stage4/stage4.html',
        controller:'formController'
      });
 lockProvider.init({
      clientID: AUTH0_CLIENT_ID,
      domain: AUTH0_DOMAIN
    });


  //  Configuration for angular-jwt
    jwtOptionsProvider.config({
      tokenGetter: ['options', function (options) {
        if (options && options.url.substr(options.url.length - 5) == '.html') {
          return null;
        }
        return localStorage.getItem('id_token');
      }],
      whiteListedDomains: ['localhost:3000'],
      unauthenticatedRedirectPath: '/login'
    });


  

    $urlRouterProvider.otherwise('/dashboard');
     // Remove the ! from the hash so that
    // auth0.js can properly parse it
    $locationProvider.hashPrefix(''); 

   }
})();
