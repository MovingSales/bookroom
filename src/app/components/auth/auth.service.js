(function (){
  'use strict';

  var authService = function (dbService){
    var _service = this;
    var db = dbService.exportInstance();

    _service.getUser = function (){
      return db.getUser();
    };

    _service.getSession = function (){
      return db.getSession();
    };

    _service.signup = function (username, password){
      return db.signup(username, password)
    };

    _service.login = function (username, password){
      return db.login(username, password);
    };

    _service.logout = function (){
      return db.logout();
    };

    _service.changePassword = function (username, password){
      return db.changePassword(username, password);
    }
  };


  if(angular){
    angular.module('Auth')
      .service('authService', authService)
  }
})();
