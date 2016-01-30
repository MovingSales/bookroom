(function () {

  'use strict';

  var signUpCtrl = function (userService, authService, $state, $log){

    var vm = this;
    vm.user = {};

    vm.canSignup = function (){
      return (vm.user.password === vm.user.re_password) && (vm.user.password === vm.user.re_password);
    };

    vm.signup = function (){
      authService.signup(vm.user.email, vm.user.password)
        .then(function (){
          return vm.signin(vm.user.email, vm.user.password)
        })
        .catch(function (err) {
          $log.error(err);
        })
    };

    vm.signin = function (email, password){
      return authService.login(email, password)
        .then(function (){
          $state.go('home')
        })
        .catch(function (err){
          $log.error(err);
        })
    }
  };

  angular.module('sysUsers')
    .controller('UserSignUpController', signUpCtrl);

})();
