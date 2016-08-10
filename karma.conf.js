/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.exports = function (config) {
    config.set({
        basePath: './',
        files: [
            "public_html/bower_components/angular/angular.min.js",
            "public_html/bower_components/angular-route/angular-route.min.js",
            "public_html/bower_components/angular-mocks/angular-mocks.js",
            "public_html/js/app.js",
            "public_html/js/controllers.js",
            "test/**/*Spec.js"
        ],
        exclude: [
        ],
        autoWatch: true,
        frameworks: [
            "jasmine"
        ],
        browsers: [
            "Chrome"
            
        ],
        plugins: [
            "karma-junit-reporter",
            "karma-chrome-launcher",
            "karma-firefox-launcher",
            "karma-jasmine"
        ]
    });
};
