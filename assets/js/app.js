var userLang = navigator.language || navigator.userLanguage;

var userLangsplit = userLang.split('-');

var userLangmini = userLangsplit[0];

if (userLangmini == 'pt') {
    userLang = 'pt-BR';
} else if (userLangmini == 'es') {
    userLang = 'es-ES';
} else {
    userLang = 'en-US';
}
document.documentElement.lang = userLang;


fetch("assets/js/languages.json").then(response => {
    return response.json();
}).then(data => {

    var langjson = data;

    console.log(langjson);


    new Vue({
        mounted() {

            particlesJS("particles-js", {
                "particles": {
                  "number": {
                    "value": 100,
                    "density": {
                      "enable": true,
                      "value_area": 800
                    }
                  },
                  "color": {
                    "value": "#ffffff"
                  },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 0,
                      "color": "#000000"
                    },
                    "polygon": {
                      "nb_sides": 5
                    },
                    "image": {
                      "src": "img/github.svg",
                      "width": 100,
                      "height": 100
                    }
                  },
                  "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 40,
                      "size_min": 0.1,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                  },
                  "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                    }
                  }
                },
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": true,
                      "mode": "grab"
                    },
                    "onclick": {
                      "enable": true,
                      "mode": "push"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 140,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 200,
                      "duration": 0.4
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true
              });
              
            setTimeout(() => {
                document.getElementById("contentapp").classList.toggle('loading');
                document.getElementById("appchild").classList.toggle('loadedappchild');
            }, "1000")
        },
        el: '#app',

        data: {
            language: document.documentElement.lang,
            contact: {
                name: '',
                email: '',
                message: '',
                chh: '',
                chh2: ''
            },
            isSending: false
        },
        methods: {
            clearForm() {
                for (let field in this.contact) {
                    this.contact[field] = ''
                }
            },

            /**
             * Handler for submit
             */
            onSubmit(evt) {
                evt.preventDefault();

                var captc = this.contact.chh + this.contact.chh2;
                var contactpar = this.contact;
                var errormsg_title = this.translate('errormsg_title');
                var errormsg_subtitle = this.translate('errormsg_subtitle');
                var successmsg_title = this.translate('successmsg_title');
                var successmsg_subtitle = this.translate('successmsg_subtitle');
                if (captc) {
                    callalert(errormsg_title, errormsg_subtitle, 'danger', 'OK', 'danger', 'md', 'light');
                } else {
                    try {
                        document.getElementById("form-submit").style.display = 'none';
                        document.getElementById("form-submit-false").style.display = 'block';
                        setTimeout(() => {
                            const xhttp = new XMLHttpRequest();
                            xhttp.onload = function() {
                                var result = this.responseText;
                                if (result == 'success') {
                                    callalert(successmsg_title, successmsg_subtitle, 'success', 'OK', 'success', 'md', 'light');
                                } else {
                                    callalert(errormsg_title, errormsg_subtitle, 'danger', 'OK', 'danger', 'md', 'light');

                                }
                                document.getElementById("form-submit").style.display = 'block';
                                document.getElementById("form-submit-false").style.display = 'none';
                            }
                            xhttp.open("POST", "sendmail.php");


                            var data = new FormData();
                            data.append('name', contactpar.name);
                            data.append('email', contactpar.email);
                            data.append('message', contactpar.message);
                            data.append('chh', contactpar.chh);
                            data.append('chh2', contactpar.chh2);


                            xhttp.send(data);
                        }, 1000);
                    } catch (e) {
                        callalert(errormsg_title, errormsg_subtitle, 'danger', 'OK', 'danger', 'md', 'light');
                    }
                }
            },

            translate(value) {

                var thislangjson = langjson[document.documentElement.lang];

                return thislangjson[value];

            },
            darkmode() {



                document.getElementById("appchild").classList.toggle('darkmode');



            },

            closeloader() {







            },


            fullscreenmenu(value) {


                if (value == 'open') {
                    document.getElementById("fullscreenmenu").classList.add('opened');
                } else {
                    document.getElementById("fullscreenmenu").classList.remove('opened');
                }



            },
            languagemenu(value) {


                if (value == 'open') {
                    document.getElementById("languagemenu").classList.add('opened');
                } else {
                    document.getElementById("languagemenu").classList.remove('opened');
                }


            },
            languagechange(value) {
                userLang = value;
                var userLangsplit = userLang.split('-');

                var userLangmini = userLangsplit[0];

                if (userLangmini == 'pt') {
                    userLang = 'pt-BR';
                } else if (userLangmini == 'es') {
                    userLang = 'es-ES';
                } else {
                    userLang = 'en-US';
                }

                document.documentElement.lang = value;

                this.$forceUpdate();

                document.getElementById("languagemenu").classList.remove('opened');
            }
        }

    });


}).catch(err => {
    // Do something for an error here
});