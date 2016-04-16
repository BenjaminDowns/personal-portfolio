(function() {

    module.exports =

        function MainCtrl() {
            // view-model
            const vm = this

            vm.introMessage     = 'I\'m a fullstack Javascript web developer.'
            vm.introMessageSub  = 'Here are a few things that I built with HTML5, CSS3, Javascript, Angular, NodeJS, Express....'
            vm.introTools       = 'HTML5, CSS3, Javascript, AngularJS, NodeJS, Express'
            
            vm.codepenIcon  = 'fa fa-codepen fa-3x more-info-icon'
            vm.herokuIcon   = 'icon-heroku more-info-icon'
            vm.liveIcon     = 'fa fa-external-link fa-3x more-info-icon'
            
            
            
            vm.frontEndPieces =
                {
                    rowOne: {
                        left: {
                            title: 'Conbox.tv',
                            // sref: 'wiki',
                            // id: 'wikipedia-container',
                            description: 'a multi-lingual website for tech startup',
                            backgroundImage: "url('../assets/images/conbox1.png')",
                            githubLink: 'https://github.com/BenjaminDowns',
                            hostedLink: 'http://www.conbox.tv',
                            hostedIcon: vm.liveIcon
                        },
                        right: {
                            title: 'Wedding Website',
                            description: 'a website for a happy couple',
                            backgroundImage: "url('../assets/images/weddingwebsite1.png')",
                            githubLink: 'https://github.com/BenjaminDowns/sarah-aaron-wedding',
                            hostedLink: null,
                            hostedIcon: null
                        }
                    },
                    rowTwo: {
                        left: {
                            title: 'Wiki-reader',
                            // sref: 'wiki',
                            // id: 'wikipedia-container',
                            description: 'a basic Wikipedia client',
                            backgroundImage: "url('../assets/images/Wikipedia1.jpg')",
                            githubLink: 'https://github.com/BenjaminDowns/WikipediaReader',
                            hostedLink: 'http://codepen.io/BenjaminDowns/full/dGBWKb/',
                            hostedIcon: vm.codepenIcon
                        },
                        right: {
                            title: 'Twitch TV Monitor',
                            // sref: 'twitch',
                            // id: 'twitch-container',
                            description: 'a monitor for TwitchTV channel statuses.',
                            backgroundImage: "url('../assets/images/twitchTV1.png')",
                            githubLink: 'https://github.com/BenjaminDowns/TwitchTvChecker',
                            hostedLink: 'http://codepen.io/BenjaminDowns/full/BKoqJY/',
                            hostedIcon: vm.codepenIcon
                        }
                    },
                    rowThree: {
                        left: {
                            title: 'Simon',
                            // sref: 'simon',
                            // id: 'simon-container',
                            description: 'Vanilla JS/ES6 Simon game',
                            backgroundImage: "url('../assets/images/simon1.png')",
                            githubLink: 'https://github.com/BenjaminDowns/SimonGame',
                            hostedLink: 'http://codepen.io/BenjaminDowns/full/YqwZdK/',
                            hostedIcon: vm.codepenIcon
                        },
                        right: {
                            title: 'Calculator',
                            // sref: 'calculator',
                            // id: 'calculator-container',
                            description: 'Vanilla JS/ES6 calculator.',
                            backgroundImage: "url('../assets/images/calculator1.png')",
                            githubLink: 'https://github.com/BenjaminDowns/Calculator2',
                            hostedLink: 'http://codepen.io/BenjaminDowns/full/pgXvYR/',
                            hostedIcon: vm.codepenIcon
                        }
                    },
                    rowFour: {
                        left: {
                            title: 'The TableThrower',
                            // sref: 'tablethrower',
                            // id: 'tablethrower-container',
                            description: 'throw a ASCII table',
                            backgroundImage: "url('../assets/images/tablethrower1.png')",
                            githubLink: 'http://www.github.com/BenjaminDowns',
                            hostedLink: 'http://codepen.io/BenjaminDowns/full/OVqKxg/',
                            hostedIcon: vm.codepenIcon
                        },
                        right: {
                            title: 'Weather App',
                            // sref: 'weatherApp',
                            // id: 'weatherapp-container',
                            description: 'get your local time and weather',
                            backgroundImage: "url('../assets/images/weatherapp1.png')",
                            githubLink: 'http://www.github.com/BenjaminDowns',
                            hostedLink: 'http://codepen.io/BenjaminDowns/full/aOrPOK/',
                            hostedIcon: vm.codepenIcon
                        }
                    } // end of rowThree
                } // end of frontEndPieces
            vm.backEndPieces =
                {
                    rowOne: {
                        left: {
                            title: 'PicoLink',
                            // sref: 'picoURL',
                            // id: 'picoLink-container',
                            description: 'a url shortener',
                            backgroundImage: "url('../assets/images/picolink1.png')",
                            githubLink: 'https://github.com/BenjaminDowns/picoURL',
                            hostedLink: 'http://picoLink.herokuapp.com',
                            hostedIcon: vm.herokuIcon
                        },
                        right: {
                            title: 'TimeStamper',
                            // sref: 'timestamper',
                            // id: 'timestamper-container',
                            description: 'A microservice API that makes unix & human-friendly time stamps.',
                            backgroundImage: "url('../assets/images/timestamper1.png')",
                            githubLink: 'https://github.com/BenjaminDowns/TimeStamper',
                            hostedLink: 'https://time-stamper.herokuapp.com/',
                            hostedIcon: vm.herokuIcon
                        }
                    },
                    rowTwo: {
                        left: {
                            title: 'HeaderGiver',
                            // sref: 'header',
                            // id: 'headergiver-container',
                            description: 'basic REST API microservice to return HTTP headers',
                            backgroundImage: "url('../assets/images/headergiver1.png')",
                            githubLink: 'https://github.com/BenjaminDowns/HeaderGiver',
                            hostedLink: 'https://header-giver.herokuapp.com',
                            hostedIcon: vm.herokuIcon
                        }
                    } // end of backend rowTwo
                } // end of frontEndPieces
                       
        }

} ());