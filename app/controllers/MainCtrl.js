(function() {

    module.exports =

        function MainCtrl() {
            // view-model
            const vm = this

            vm.introMessage = 'I am a web developer. Here are some things I\'ve made.'
            
            vm.message2 = 'hello'

            vm.frontEndPieces =
                {
                    rowOne: {
                        left: {
                            title: 'Wiki-reader',
                            sref: 'wiki',
                            id: 'wikipedia-container',
                            description: 'a basic Wikipedia client',
                             backgroundImage: "url('../assets/images/Wikipedia1.jpg')"
                        },
                        right: {
                            title: 'Twitch TV thing',
                            sref: 'twitch',
                            id: 'twitch-container',
                            description: 'Monitors TwitchTV channels.',
                            backgroundImage: "url('../assets/images/calculator1.png')"
                        }
                    },
                    rowTwo: {
                        left: {
                            title: 'Simon',
                            sref: 'simon',
                            id: 'simon-container',
                            description: 'Simon description',
                             backgroundImage: "url('../assets/images/simon1.png')"
                        },
                        right: {
                            title: 'Calculator',
                            sref: 'calculator',
                            id: 'calculator-container',
                            description: 'Vanilla JS/ES6 calculator.',
                            backgroundImage: "url('../assets/images/calculator1.png')"
                        }
                    },
                    rowThree: {
                        left: {
                            title: 'The TableThrower',
                            sref: 'tablethrower',
                            id: 'tablethrower-container',
                            description: 'throw a ASCII table',
                            backgroundImage: "url('../assets/images/tablethrower1.png')"
                        }
                    } // end of rowThree
                } // end of frontEndPieces
    vm.backEndPieces =
                {
                    rowOne: {
                        left: {
                            title: 'PicoURL',
                            sref: 'picoURL',
                            id: 'picoURL-container',
                            description: 'a url shortener'
                        },
                        right: {
                            title: 'TimeStamper',
                            sref: 'timestamper',
                            id: 'timestamper-container',
                            description: 'A basic REST API microservice for unix and human-friendly time stamps.'
                        }
                    },
                    rowTwo: {
                        left: {
                            title: 'HeaderGiver',
                            sref: 'header',
                            id: 'headergiver-container',
                            description: 'basic REST API microservice to return HTTP headers'
                        },
                        right: {
                            title: 'something else',
                            sref: 'something-else',
                            id: 'something-else',
                            description: 'nothing.'
                        }
                    }
                } // end of frontEndPieces
        }

} ());