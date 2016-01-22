
(function (){
  'use strict';

  var dbService = function ($http){
    var dbUrl = 'localhost:5984/bookroom';

    var _this = this;

    _this.get = function (id){
      return $http.get(dbUrl+id)
    };
    _this.query = function (view, queryOptions){

    };

    _this.save = function (){

    };

    _this.saveMany = function (){

    };

    _this.update = function (){

    };

    _this.delete = function (){

    }
  }

  if(angular){
    angular.module('db')
      .service('dbService', dbService)
  }
})();
