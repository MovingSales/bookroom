'use strict';

var signupConfig = {
	parent: 'defaultView',
	url: '/signup',
	templateUrl: 'app/users/signup.html',
	controller: 'UsersController as regCtrl'
};

var user = {
  parent: 'defaultView',
  abstract: true
}
var login = {
	parent: 'defaultView',
	url: '/login',
	templateUrl: 'app/users/login.html',
	controller: 'UsersController as loginCtrl'
};

var home = {
  parent: 'defaultView',
  url: '/user',
  template: '<h1>User Home</h1>'
}

angular.module( 'sysUsers' )
  .config( function( $stateProvider ) {
    $stateProvider.state('user', user);
    $stateProvider.state( 'user.signup', signupConfig );
    $stateProvider.state( 'user.login', login );
    $stateProvider.state('user.home', home);
  });
