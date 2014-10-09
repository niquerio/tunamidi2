requirejs.config({
    "paths": {
      'path': '../spec/helpers/path',
      "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min",
      "backbone":"http://documentcloud.github.com/backbone/backbone",
      "underscore" :"http://documentcloud.github.com/underscore/underscore", 
      "text" : 'lib/text',
      "bootstrap" : "https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min",
      "marionette" : 'lib/backbone.marionette',
      "select2" : "http://ivaynberg.github.io/select2/select2-3.5.1/select2"
    },
    "shim": {
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
      'lib/Loader': {
        exports: "Loader"
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
         deps: ["jquery", "bootstrap"],
     },
     'select2': {
       deps: ["jquery"]
     },
   }
});

require(['backbone', 'lib/MIDI', 'collections/songList','views/appView', 'path', 'lib/Loader'], function(Backbone, MIDI, Songs, AppView, path, Loader){
//require(['app'], function(app){
//  app.start();
        MIDI.loader = new widgets.Loader;
        MIDI.loadPlugin( function () {
          Songs.add([
            {midi_src: path + 'spec/midi/example.mid', },
            {midi_src: path + 'spec/midi/aucun_se_sont.midi'},
            ]);
          var appView = new AppView();
          appView.render();
          //var playerView = new PlayerView({model: Songs.first()});
          //playerView.render();
          //app.songs.show(songsView);
          //app.player.show(playerView);
          MIDI.loader.stop();
        });
  //
});
