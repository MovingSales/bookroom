(function () {

  'use strict';

  var signUpCtrl = function (userService, authService, $state){

    var vm = this;
    vm.user = {};

    vm.signup = function (){
      authService.signup(vm.user.email, vm.user.password)
        .then(function (){
          return authService.login(vm.user.email, vm.user.password)
        })
        .catch(function (err) {
          console.error(err);
        })
    };

    vm.signin = function (email, password){
      return authService.login(email, password)
        .then(function (){
          $state.go('home')
        })
        .catch(function (err){
          console.log(err);
        })
    }
  };

  angular.module('sysUsers')
    .controller('UserSignUpController', signUpCtrl);

})();
