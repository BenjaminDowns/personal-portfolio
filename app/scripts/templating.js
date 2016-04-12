require('jquery')
const $ = require('jquery-browserify')


$(document).ready(function() {
    
   'use strict'
   let portfolioDetailPage
   
   let wiki = {
       title: 'Wikipedia Viewer',
       tools: ['Angular, HTML5, CSS3, Javascript'],
       img: ['assets/images/Wikipedia1.jpg', 'assets/images/Wikipedia2.jpg']
   }
   
   let twitch = {
       title: 'Twitch TV Status Viewer',
       tools: ['ES6', 'HTML5', 'CSS3'],
       img: null
   }
      
   $('div').on('click', function(e) {
       if (e.target.className === 'project-preview-container') {
           portfolioDetailPage = e.target.id
       } 
   })
   
});