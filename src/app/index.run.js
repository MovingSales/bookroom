( function() {

	'use strict';

	angular
	.module( 'bookroom' )
	.run( runBlock );

	/** @ngInject */
	function runBlock( $log ) {

		$log.debug( 'runBlock end' );

	}

} )();
