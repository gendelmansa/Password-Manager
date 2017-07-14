/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      'app': 'app',

      // angular bundles
    '@angular/core': 'https://unpkg.com/@angular/core/bundles/core.umd.js',
    '@angular/common': 'https://unpkg.com/@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'https://unpkg.com/@angular/compiler/bundles/compiler.umd.js',
    '@angular/animations': "https://unpkg.com/@angular/animations/bundles/animations.umd.js",
    '@angular/animations/browser': 'https://unpkg.com/@angular/animations/bundles/animations-browser.umd.js',
    '@angular/http': 'https://unpkg.com/@angular/http/bundles/http.umd.js',
    '@angular/forms': 'https://unpkg.com/@angular/forms/bundles/forms.umd.js',
    '@angular/router': 'https://unpkg.com/@angular/router/bundles/router.umd.js',
    '@angular/platform-browser': 'https://unpkg.com/@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser/animations': 'https://unpkg.com/@angular/platform-browser/bundles/platform-browser-animations.umd.js',
    '@angular/platform-browser-dynamic': 'https://unpkg.com/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/material': 'https://rawgit.com/angular/material2-builds/master/bundles/material.umd.js',
    '@angular/cdk': 'https://rawgit.com/angular/cdk-builds/master/bundles/cdk.umd.js',

      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        defaultExtension: 'js',
        meta: {
          './*.js': {
            loader: 'systemjs-angular-loader.js'
          }
        }
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);
