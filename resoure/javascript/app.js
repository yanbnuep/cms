/**
 * Created by itdwyy on 2016/10/24.
 */
requirejs.config({
    "baseUrl": "resoure/javascript/lib",
    "path": {
        "app": "../modules",
        'jquery':"jquery.1.12.4.min"
    }
});

requirejs(['jquery.1.12.4.min',"../modules/main"]);