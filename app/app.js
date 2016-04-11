(function() {
      
     'use strict'
         
    // external sources/libraries
    require('angular')
    require('angular-ui-router')

    // internal directories/files
    const MainCtrl  = require('./controllers/MainCtrl.js'),
          AboutCtrl = require('./controllers/AboutCtrl.js'),   
          routes    = require('./routes/index.js')

    // MAIN //
    angular.module('app', ['ui.router'])

        .config(routes)
        
        .controller('MainController', MainCtrl)
        .controller('AboutController', AboutCtrl)

})();