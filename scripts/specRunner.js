(function() {
  'use strict';

  // Configure RequireJS to shim Jasmine
  require.config({
    //baseUrl: '..',
    paths: {
      'jasmine': '../lib/jasmine-2.0.2/jasmine',
      'jasmine-html': '../lib/jasmine-2.0.2/jasmine-html',
      'boot': '../lib/jasmine-2.0.2/boot',
      'jasmine-jquery': '../lib/jasmine-jquery',

      'path': '../spec/helpers/path',
      "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min",
      "backbone":"http://documentcloud.github.com/backbone/backbone",
      "underscore" :"http://documentcloud.github.com/underscore/underscore", 
      "text" : 'lib/text',
      "bootstrap" : "https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min",
      "marionette" : 'lib/backbone.marionette',
      "select2" : "http://ivaynberg.github.io/select2/select2-3.5.1/select2"
    },
    //urlArgs: "bust=" + (new Date()).getTime(),
    shim: {
      'jasmine': {
        exports: 'window.jasmineRequire'
      },
      'jasmine-html': {
        deps: ['jasmine'],
        exports: 'window.jasmineRequire'
      },
      'jasmine-jquery': {
        deps: ['jasmine', 'jquery'],
        exports: 'window.jasmine'
      },
      'boot': {
        deps: ['jasmine', 'jasmine-html'],
        exports: 'window.jasmineRequire'
      },
      'underscore': {
        exports: "_"
      },
      'backbone': {
         deps : [ "jquery", "underscore" ],
         exports: "Backbone"
      },
      'bootstrap': { deps : [ "jquery" ], },
      'marionette': {
         deps: ['backbone'],
         exports: 'Backbone.Marionette',
            },
      'lib/MIDI': {
         deps : [ "lib/Base64", "lib/base64binary", "lib/jasmid/stream", "lib/jasmid/replayer","lib/jasmid/midifile" ],
         exports: "MIDI"
      },
      'lib/jasmid/midifile': {
         exports: "MidiFile"
      },
      'lib/jasmid/replayer': {
         exports: "Replayer"
      },
      'lib/jasmid/stream': {
         exports: "Stream"
      },
      'lib/Base64': {
         exports: "window.atob"
      },
     'lib/base64binary': {
         exports: "Base64Binary"
     },
     'lib/bootstrap-slider.min': {
         deps: ["jquery"],
     },
     'select2': {
       deps: ["jquery"]
     },
     'lib/bootstrap-touchspin': {
         deps: ["jquery", "bootstrap"],
     },
     'lib/iconpicker.js': {
       deps: ["jquery", "bootstrap"],
     },
    }
  });

  // Define all of your specs here. These are RequireJS modules.
  var specs = [

//    '../spec/model_channel',
//    '../spec/model_song',
//    '../spec/view_songView',

//    '../spec/view_appView',
//    '../spec/view_channelView',

    '../spec/view_playerView',
//    '../spec/collection_songList',
//    '../spec/collection_channelList',
  ];

  // Load Jasmine - This will still create all of the normal Jasmine browser globals unless `boot.js` is re-written to use the
  // AMD or UMD specs. `boot.js` will do a bunch of configuration and attach it's initializers to `window.onload()`. Because
  // we are using RequireJS `window.onload()` has already been triggered so we have to manually call it again. This will
  // initialize the HTML Reporter and execute the environment.
  require(['lib/MIDI', 'boot'], function (MIDI) {

    // Load the specs
    require(specs, function () {

      // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
      MIDI.loadPlugin( function () {
      window.onload();
      });
    });
  });
})();
