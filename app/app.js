(function() {
    
     'use strict'
         
    // external sources/libraries
    require('angular')
    require('angular-ui-router')

    // internal directories/files
    const MainCtrl  = require('./controllers/MainCtrl.js')

    // MAIN //
    angular.module('app', ['ui.router'])

        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider

                // route for the home page
                .state('app', {
                    url: '/',
                    views: {
                        'header': {
                            templateUrl: 'views/header.html',
                        },
                        'content': {
                            templateUrl: 'views/home.html',
                            controller: 'MainController'
                        },
                        'footer': {
                            templateUrl: 'views/footer.html',
                        }
                    }

                })

            $urlRouterProvider.otherwise('/')

        })
        
        .controller('MainController', MainCtrl)

})();