
describe('db service', function(){

  var dbService;
  var pouchDB;

  beforeEach(module('pouchdb', 'db'));

  beforeEach(inject(function (_dbService_, _pouchDB_){
    dbService = _dbService_;
    pouchDB = _pouchDB_;

    spyOn(pouchDB, 'get').andCallThrough();
  }));

  it('should expose a get function', function (){
    expect(dbService.get).toBeTruthy()
  });
  it('should call pouchDB get function', function(){
    var anyString = 'anyString';
    expect(pouchDB.get).not.toHaveBeenCalled();
    dbService.get(anyString);
    expect(pouchDB).toHaveBeenCalledWith(anyString);
  })

});
