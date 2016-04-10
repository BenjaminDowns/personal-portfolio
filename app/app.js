require('angular')
const MainCtrl = require('./controllers/MainCtrl')

const app = angular.module('app', [])
        
app.controller('MainController', MainCtrl);