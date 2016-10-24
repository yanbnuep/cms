/**
 * Created by itdwyy on 2016/10/24.
 */
requirejs.config({
    "baseUrl": "resoure/javascript/lib",
    "path": {
        "app": "../modules",

    }
});

requirejs(["../modules/main"]);