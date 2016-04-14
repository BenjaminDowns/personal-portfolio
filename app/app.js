(function() {
      
     'use strict'
         
    // external sources/libraries
    
    require('angular')
    require('angular-ui-router')
    require('jquery-browserify')
    require('jquery')

    // internal directories/files
    const MainCtrl      = require('./controllers/MainCtrl.js'),
          AboutCtrl     = require('./controllers/AboutCtrl.js'),
          ContactCtrl   = require('./controllers/ContactCtrl.js'),
          WikiCtrl      = require('./controllers/WikiCtrl.js'),
          routes        = require('./routes/index.js')
        //   $             = require('jquery-browserify')
          

    // MAIN //
    angular.module('app', ['ui.router'])

        .config(routes)
        
        .controller('MainController', MainCtrl)
        .controller('AboutController', AboutCtrl)
        .controller('ContactController', ContactCtrl) 
        .controller('WikiController', WikiCtrl)

    require('./scripts/templating.js')

})();