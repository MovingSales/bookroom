'use strict'

var signupConfig = {
  parent: 'defaultView',
  url: '/signup',
  templateUrl: 'app/users/signup/signup.html',
}

angular.module('sysUsers')
  .config(function ($stateProvider){
    $stateProvider.state('signup', signupConfig);
  });
