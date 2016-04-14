(function() {

    module.exports =

        function MainCtrl() {
            // view-model
            const vm = this

            vm.introMessage = 'I am a web developer.'
            
            vm.introMessageSub = 'Here are some things I\'ve made.'

            vm.frontEndPieces =
                {
                    rowOne: {
                        left: {
                            title: 'Wiki-reader',
                            sref: 'wiki',
                            id: 'wikipedia-container',
                            description: 'a basic Wikipedia client',
                             backgroundImage: "url('../assets/images/Wikipedia1.jpg')",
                             githubLink: 'http://www.github.com/BenjaminDowns',
                             hostedLink: 'http://codepen.io/BenjaminDowns/full/dGBWKb/'
                        },
                        right: {
                            title: 'Twitch TV thing',
                            sref: 'twitch',
                            id: 'twitch-container',
                            description: 'Monitors TwitchTV channels.',
                            backgroundImage: "url('../assets/images/calculator1.png')",
                            githubLink: 'http://www.github.com/BenjaminDowns',
                            hostedLink: 'http://codepen.io/BenjaminDowns/full/BKoqJY/'
                        }
                    },
                    rowTwo: {
                        left: {
                            title: 'Simon',
                            sref: 'simon',
                            id: 'simon-container',
                            description: 'Vanilla/ES6 Javascript Simon game',
                             backgroundImage: "url('../assets/images/simon1.png')",
                             githubLink: 'http://www.github.com/BenjaminDowns',
                             hostedLink: 'http://codepen.io/BenjaminDowns/full/YqwZdK/'
                        },
                        right: {
                            title: 'Calculator',
                            sref: 'calculator',
                            id: 'calculator-container',
                            description: 'Vanilla JS/ES6 calculator.',
                            backgroundImage: "url('../assets/images/calculator1.png')",
                            githubLink: 'http://www.github.com/BenjaminDowns',
                            hostedLink: 'http://codepen.io/BenjaminDowns/full/pgXvYR/'
                        }
                    },
                    rowThree: {
                        left: {
                            title: 'The TableThrower',
                            sref: 'tablethrower',
                            id: 'tablethrower-container',
                            description: 'throw a ASCII table',
                            backgroundImage: "url('../assets/images/tablethrower1.png')",
                            githubLink: 'http://www.github.com/BenjaminDowns',
                            hostedLink: 'http://www.codepen.com/BenjaminDowns'
                        },
                        right: {
                            title: 'Weather App',
                            sref: 'weatherApp',
                            id: 'weatherapp-container',
                            description: 'get your local time and weather',
                            backgroundImage: "url('../assets/images/weatherapp1.png')",
                            githubLink: 'http://www.github.com/BenjaminDowns',
                            hostedLink: 'http://codepen.io/BenjaminDowns/full/aOrPOK/'
                        }
                    } // end of rowThree
                } // end of frontEndPieces
    vm.backEndPieces =
                {
                    rowOne: {
                        left: {
                            title: 'PicoLink',
                            sref: 'picoURL',
                            id: 'picoLink-container',
                            description: 'a url shortener',
                            backgroundImage: "url('../assets/images/picolink1.png')",
                            githubLink: 'https://github.com/BenjaminDowns/picoURL',
                            hostedLink: 'http://picoLink.herokuapp.com'
                        },
                        right: {
                            title: 'TimeStamper',
                            sref: 'timestamper',
                            id: 'timestamper-container',
                            description: 'A basic REST API microservice for unix and human-friendly time stamps.',
                            backgroundImage: "url('../assets/images/timestamper1.png')",
                            githubLink: 'http://www.github.com/BenjaminDowns',
                            hostedLink: 'https://time-stamper.herokuapp.com/'
                        }
                    },
                    rowTwo: {
                        left: {
                            title: 'HeaderGiver',
                            sref: 'header',
                            id: 'headergiver-container',
                            description: 'basic REST API microservice to return HTTP headers',
                            backgroundImage: "url('../assets/images/headergiver1.png')",
                            githubLink: 'https://github.com/BenjaminDowns/HeaderGiver',
                            hostedLink: 'https://header-giver.herokuapp.com'   
                        }
                        // ,
                        // right: {
                        //     title: 'something else',
                        //     sref: 'somethingElse',
                        //     id: 'something-else',
                        //     description: 'nothing.',
                        //     githubLink: 'http://www.github.com/BenjaminDowns',
                        //     hostedLink: 'http://herokuapp.com'
                        // }
                    } // end of backend rowTwo
                } // end of frontEndPieces
        }

} ());