'use strict'

var signupConfig = {
  parent: 'defaultView',
  url: '/signup',
  templateUrl: 'app/users/signup.html',
  controller: 'UserSignUpController as regCtrl'
}

angular.module('sysUsers')
  .config(function ($stateProvider){
    $stateProvider.state('signup', signupConfig);
  });
