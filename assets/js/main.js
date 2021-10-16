document.addEventListener("DOMContentLoaded",function(){new SweetScroll({}),particlesJS("particles-js",{
    particles:{
        number:{
            value:60,
            density:{
                enable:!0,
                value_area:800
                    }
        },
        color:{
            value:"#006530"
        },
        shape:{
            type:"circle",
            stroke:{
                width:0,
                color:"#006530"
            },
            polygon:{
                nb_sides:50
            },
            image:{
                src:"img/github.svg",
                width:100,
                height:100
            }
        },
        opacity:{
            value:.4,
            random:!0,
            anim:{
                enable:!0,
                speed:1,
                opacity_min:.9,
                sync:!1
            }
        },
        size:{
            value:3,
            random:!1,
            anim:{
                enable:!1,
                speed:19.18081918081918,
                size_min:.1,
                sync:!1
            }
        },
        line_linked:{
            enable:!0,
            distance:100,
            color:"#006530",
            opacity:.4,
            width:1
        },
        move:{
            enable:!0,
            speed:2,
            direction:"none",
            random:!0,
            straight:!1,
            out_mode:"bounce",
            bounce:!1,
            attract:{
                enable:!1,
                rotateX:600,
                rotateY:1200
            }
        },
        nb:80
    },
    interactivity:{
        detect_on:"canvas",
        events:{
            onhover:{
                enable:!0,
                mode:"grab"
            },
            onclick:{
                enable:!0,
                mode:"push"
            },
            resize:!0
        },
        modes:{
            grab:{
                distance:150,
                line_linked:{
                    opacity:.60
                }
            },
            bubble:{
                distance:400,
                size:40,
                duration:2,
                opacity:8,
                speed:3},
                repulse:{
                    distance:200,
                    duration:.4
                },
                push:{
                    particles_nb:4
                },
remove:{
    particles_nb:2
}
}
},
retina_detect:!0
})},!1);