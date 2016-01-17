(function  (){

  'use strict';

  var defaultLayoutState = {
    parent: 'root',
    abstract: true,
    templateUrl: 'app/components/default-layout/layout.html'
  };

  var defaultView = {
    parent: 'defaultLayoutView',
    views: {
      header: {
        templateUrl: 'app/components/navbar/navbar.html'
      },
      content: {},
      footer: {}
    }
  };

  angular.module('bookroom')
    .config(function ($stateProvider){
      $stateProvider.state('defaultLayoutView', defaultLayoutState)
        .state('defaultView', defaultView)
    })

})()

