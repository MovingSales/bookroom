
describe( 'db service', function() {

	var dbService;

	beforeEach( module( 'db' ) );

	beforeEach( inject( function( _dbService_ ) {

		dbService = _dbService_;

	} ) );

	it( 'should expose a get function', function() {

		expect( dbService.get ).toBeTruthy();

	} );

} );
