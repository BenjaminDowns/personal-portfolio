(function() {

    module.exports =

        function MainCtrl() {
            // view-model
            const vm = this

            vm.introMessage = 'I am a web developer {or something else catchy.} Here are some things I\'ve made.'

            vm.frontEndPieces =
                {
                    rowOne: {
                        left: {
                            title: 'Wiki-reader',
                            sref: 'wiki',
                            id: 'wikipedia-container',
                            description: 'a basic Wikipedia client'
                        },
                        right: {
                            title: 'Twitch TV thing',
                            sref: 'twitch',
                            id: 'twitch-container',
                            description: 'Uses the TwitchTV API to look up channels that are currently streaming, provides a preview to that channel\'s content, and allows the user to select a channel to watch.'
                        }
                    },
                    rowTwo: {
                        left: {
                            title: 'Simon',
                            sref: 'simon',
                            id: 'simon-container',
                            description: 'Simon description'
                        },
                        right: {
                            title: 'Calculator() =>',
                            sref: 'calculator',
                            id: 'calculator-container',
                            description: 'calculates things.'
                        }
                    }
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
                    // rowTwo: {
                    //     left: {
                    //         title: 'Simon',
                    //         sref: 'simon',
                    //         id: 'simon-container',
                    //         description: 'Simon description'
                    //     },
                    //     right: {
                    //         title: 'Calculator() =>',
                    //         sref: 'calculator',
                    //         id: 'calculator-container',
                    //         description: 'calculates things.'
                    //     }
                    // }
                } // end of frontEndPieces
        }

} ());