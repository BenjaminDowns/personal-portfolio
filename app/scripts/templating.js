const $ = require('jquery')
console.log('hello from the jquery file at the templating spot.')
$(document).ready(function() {
   'use strict'
   
   let wiki = {
       title: 'Wikipedia Viewer',
       tools: 'Angular, HTML5, CSS3, Javascript',
       img: ['assets/images/Wikipedia1.jpg', 'assets/images/Wikipedia2.jpg']
   }
   
   let twitch = {
       title: 'Twitch TV Status Viewer',
       tools: 'ES6, HTML5, CSS3, Javascript',
       img: null
   }
   
   const previews = document.getElementsByClassName('project-preview-container')
   
   console.log(previews)
    
   $('.project').on('click', function(e) {
       alert('hello')
       console.log(e.target);
   })
   
   $('.intro').on('click', function() {
       alert('clicked intro')
   })
   
});