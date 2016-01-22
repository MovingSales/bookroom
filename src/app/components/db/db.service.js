
(function (){
  'use strict';

  var dbService = function (pouchDB){
    var db = pouchDB('localhost:5984/bookroom');

    var _this = this;

    _this.get = function (id){
      return db.get(id)
    };
    _this.query = function (view, queryOptions){

    };

    _this.save = function (doc){

    };

    _this.saveMany = function (docs){

    };

    _this.update = function (doc){

    };

    _this.delete = function (doc){

    }
  }
});
