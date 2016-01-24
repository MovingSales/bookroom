(function () {

  'use strict';

  var signUpCtrl = function (userService, authService){

    var vm = this;
    vm.user = {};

    vm.signup = function (){
      authService.signup(vm.user.email, vm.user.password)
        .then(function (response){
          console.info(response);
        })
        .catch(function (err) {
          console.error(err);
        })
    }
  };

  angular.module('sysUsers')
    .controller('UserSignUpController', signUpCtrl);

})();
