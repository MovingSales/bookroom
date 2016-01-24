(function (){
  'use strict';

  var authService = function (dbService){
    var _service = this;
    var db = dbService.exportInstance();

    _service.getUser = function (){
    };

    _service.getSession = function (){

    };

    _service.signup = function (username, password){
      return db.signup(username, password)
    };

    _service.login = function (username, password){
      return db.login(username, password);
    };

    _service.logout = function (){
    
    };

    _service.changePassword = function (){

    }
  };


  if(angular){
    angular.module('Auth')
      .service('authService', authService)
  }
})()
