( function() {

	'use strict';

	var signUpCtrl = function( userService, authService, $state, $log ) {

		var vm = this;
		vm.user = {};

		vm.canSignup = function() {

			return ( vm.user.password === vm.user.re_password ) && ( vm.user.password === vm.user.re_password );

		};

		vm.signup = function() {

			authService.signup( vm.user.email, vm.user.password )
        .then( function() {

	        return vm.signin();

        } )
        .catch( function( err ) {

	        $log.error( err );

        } );

		};

		vm.signin = function() {

			return authService.login( vm.user.email, vm.user.password )
        .then( function() {

	        $state.go( 'user.home' );

        } )
        .catch( function( err ) {

	        $log.error( err );

        } );

		};

	};

	angular.module( 'sysUsers' )
	.controller( 'UsersController', signUpCtrl );

} )();
