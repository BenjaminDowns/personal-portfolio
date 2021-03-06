(function() {

    module.exports =

        function($stateProvider, $urlRouterProvider) {
            $stateProvider

                // route for the home page
                .state('home', {
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
                .state('about', {
                    url: '/about',
                    views: {
                        'header': {
                            templateUrl: 'views/header.html',
                        },
                        'content': {
                            templateUrl: 'views/about.html',
                            controller: 'AboutController'
                        },
                        'footer': {
                            templateUrl: 'views/footer.html',
                        }

                    }
                })
                .state('contact', {
                    url: '/contact',
                    views: {
                        'header': {
                            templateUrl: 'views/header.html',
                        },
                        'content': {
                            templateUrl: 'views/contact.html',
                            controller: 'ContactController'
                        },
                        'footer': {
                            templateUrl: 'views/footer.html',
                        }

                    }
                })

            $urlRouterProvider.otherwise('/')

        };

} ());