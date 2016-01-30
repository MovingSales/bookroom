'use strict'

var signupConfig = {
  parent: 'defaultView',
  url: '/signup',
  templateUrl: 'app/users/signup.html',
  controller: 'UserSignUpController as regCtrl'
}

var login = {
  parent: 'defaultView',
  url: '/signup',
  templateUrl: 'app/users/login.html',
  controller: 'UsersController'
}

angular.module('sysUsers')
  .config(function ($stateProvider){
    $stateProvider.state('signup', signupConfig);
    $stateProvider.state('login', login)
  });
