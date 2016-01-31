( function() {

	'use strict';

	angular
	.module( 'bookroom' )
	.config( routerConfig );

	/** @ngInject */
	function routerConfig( $stateProvider, $urlRouterProvider ) {

		$stateProvider
      .state( 'root', {
	abstract: true,
	views: {
		root: {
			templateUrl: 'app/index.html'
		}
	}
      } )
      .state( 'landing', {
	parent: 'root',
	url: '/',
	templateUrl: 'app/landing/landing.html',
	controller: 'MainController',
	controllerAs: 'main'
      } );

		$urlRouterProvider.otherwise( '/' );

	}

} )();
