'use strict';

var signupConfig = {
	parent: 'defaultView',
	url: '/signup',
	templateUrl: 'app/users/signup.html',
	controller: 'UsersController as regCtrl'
};

var login = {
	parent: 'defaultView',
	url: '/login',
	templateUrl: 'app/users/login.html',
	controller: 'UsersController as loginCtrl'
};

angular.module( 'sysUsers' )
  .config( function( $stateProvider ) {

	$stateProvider.state( 'signup', signupConfig );
	$stateProvider.state( 'login', login );

  } );
