(function() {
      
     'use strict'
         
    // external sources/libraries
    
    require('angular')
    require('angular-ui-router')
    require('angular-animate')
    require('angular-touch')
    require('angular-ui-bootstrap')

    // internal directories/files
    var MainCtrl      = require('./controllers/MainCtrl.js'),
          AboutCtrl     = require('./controllers/AboutCtrl.js'),
          ContactCtrl   = require('./controllers/ContactCtrl.js'),
          WikiCtrl      = require('./controllers/WikiCtrl.js'),
          routes        = require('./routes/index.js')
          

    // MAIN //
    angular.module('app', ['ui.router', 'ui.bootstrap'])

        .config(routes)
        
        .controller('MainController', MainCtrl)
        .controller('AboutController', AboutCtrl)
        .controller('ContactController', ContactCtrl) 
        .controller('WikiController', WikiCtrl)

})();