var config = {
    paths: {
            'movetop':'js/move-top',
            "easing" : "js/easing",
            "bootstrap" : "js/bootstrap.min",
            "minicart.min" : "js/minicart.min",
            "skdslider" : "js/skdslider.min"
    } ,
    shim: {
        'movetop': {
            'deps': ['jquery']
        },
        'easing' : {
            'deps': ['jquery']
        },
        'bootstrap' : {
            'deps': ['jquery']
        },
        "minicart.min" : {
            'deps' : ['jquery']
        },
        "skdslider" :{
            "deps" : ['jquery']
        }
    }
};