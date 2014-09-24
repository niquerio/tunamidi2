var app = app || {};

app.Song = Backbone.Model.extend({
    defaults: {
        title: 'Unknown',
        currentTime: 0,
        midi_src:  '',
        midi_data_url: '',
        load_midi_callback: function(){},
        timeWarp: 1,
        master_volume: 100,
        transpose: 0,

    },

    initialize: function(){
        this.listenTo(this, 'change:midi_src', this.load_midi);
        var error = this.validate(this.attributes);
        if(error){
           console.log('Initialization Error: ' + error);
           return ;
        }else{
          this.load_midi(); 
      }

      
    },
    
    validate: function(attrs){
        var self = this;
        if (attrs.hasOwnProperty('midi_src')){
           var return_val =  null;
           if(this.get('midi_src').indexOf("base64,") !== -1){
               this.set('midi_data_url', this.get('midi_src'));
           }else{
           $.ajax({
                  type: "POST",
                  url: "php/get_remote_midi.php",
                  data: {midi_src: attrs.midi_src},
                  async: false,
                  }).success( function(data){ 
                      self.set('midi_data_url', data);
                  }).error(function(xhr, status, error) {
                     self.set('midi_data_url', '');
                     return_val = xhr.responseText;

              });
          }
           if(!return_val){
               try{
                   var data = window.atob(self.get('midi_data_url').split(",")[1]);
                   MidiFile(data)
               }
               catch(err){
                 console.log('Failed to load because: ' + err);
                 self.set('midi_data_url', '');
                 return_val = err;
               }
           }
           return return_val;
        }
    },


  load_midi: function(){
     this.set({
      measures: new Array(),
      active_channels: new Array(),
      master_volume: 100,
      transpose: 0,
      timeWarp: 1,
     });
     var self = this;
            //self.measures = new Array();
            //self.active_channels = new Array();
        MIDI.Player.loadFile(this.get('midi_data_url'),function(){
            self.set({data: $.extend(true, [],MIDI.Player.data) });
            self.get_active_channels();
            self.initialize_measures();
            self.attributes.load_midi_callback();
            }); 

  },
  get_active_channels: function(){
        var data = this.get('data');
        var length = data.length;

        for(var n = 0; n < length; n++){
            var event = data[n][0].event;
            if (typeof(event.channel) === "number" && 
                    typeof(this.attributes.active_channels[event.channel]) === "undefined"){
                if(event.programNumber){    
                    this.attributes.active_channels[event.channel] = 
                       { instrument: event.programNumber,
                         mute: false,
                         solo: false,
                         volume: 100,
                       };
                }
            }
        }
  },
    initialize_measures: function(){
        var data = this.get('data');
        var length = data.length;
        var miliSecondsPerBeat = null;
        var beatsPerMeasure = null;
        var firstNoteHasPlayed = false; //flag to account for first note.
        var measureLength = 0;
        var eventTimeSoFar = 0; //total Time Up To Current Event;
        var measureTimeSoFar = 0; //total Time For Measures Up to now

        this.attributes.measures[1] = 0;

        for(var i = 0; i< length; i++){
            var event = data[i][0].event;
            if( event.type === "meta" && event.subtype === "setTempo"){
                miliSecondsPerBeat = event.microsecondsPerBeat * this.attributes.timeWarp / 1000;
                measureLength = miliSecondsPerBeat * beatsPerMeasure;

            }
            else if( event.type === "meta" && event.subtype === "timeSignature"){
                beatsPerMeasure = event.numerator * (4 / event.denominator);  
                measureLength = miliSecondsPerBeat * beatsPerMeasure;
            }
            if(measureLength && !firstNoteHasPlayed){
                firstNoteHasPlayed = true;
                measureTimeSoFar += measureLength;
                this.attributes.measures.push(measureTimeSoFar);   

            }
            if (data[i][1]){
                eventTimeSoFar += data[i][1];
                if(eventTimeSoFar >= measureTimeSoFar){
                    measureTimeSoFar += measureLength;
                    this.attributes.measures.push(measureTimeSoFar);   
                }
            }

        }
        this.attributes.lastMeasureToBePlayed = this.attributes.measures.length - 1;
        this.attributes.firstMeasureToBePlayed = 1;

    }

});