define(['lib/MIDI'], function(MIDI){
  return {
    //what song is loaded?
    ENTER_KEY: 13,
    CurrentSong:  {},
    Instruments: [{id:0,text:"Acoustic Grand Piano"},{id:1,text:"Bright Acoustic Piano"},{id:2,text:"Electric Grand Piano"},{id:3,text:"Honky-tonk Piano"},{id:4,text:"Electric Piano 1"},{id:5,text:"Electric Piano 2"},{id:6,text:"Harpsichord"},{id:7,text:"Clavinet"},{id:8,text:"Celesta"},{id:9,text:"Glockenspiel"},{id:10,text:"Music Box"},{id:11,text:"Vibraphone"},{id:12,text:"Marimba"},{id:13,text:"Xylophone"},{id:14,text:"Tubular Bells"},{id:15,text:"Dulcimer"},{id:16,text:"Drawbar Organ"},{id:17,text:"Percussive Organ"},{id:18,text:"Rock Organ"},{id:19,text:"Church Organ"},{id:20,text:"Reed Organ"},{id:21,text:"Accordion"},{id:22,text:"Harmonica"},{id:23,text:"Tango Accordion"},{id:24,text:"Acoustic Guitar (nylon)"},{id:25,text:"Acoustic Guitar (steel)"},{id:26,text:"Electric Guitar (jazz)"},{id:27,text:"Electric Guitar (clean)"},{id:28,text:"Electric Guitar (muted)"},{id:29,text:"Overdriven Guitar"},{id:30,text:"Distortion Guitar"},{id:31,text:"Guitar Harmonics"},{id:32,text:"Acoustic Bass"},{id:33,text:"Electric Bass (finger)"},{id:34,text:"Electric Bass (pick)"},{id:35,text:"Fretless Bass"},{id:36,text:"Slap Bass 1"},{id:37,text:"Slap Bass 2"},{id:38,text:"Synth Bass 1"},{id:39,text:"Synth Bass 2"},{id:40,text:"Violin"},{id:41,text:"Viola"},{id:42,text:"Cello"},{id:43,text:"Contrabass"},{id:44,text:"Tremolo Strings"},{id:45,text:"Pizzicato Strings"},{id:46,text:"Orchestral Harp"},{id:47,text:"Timpani"},{id:48,text:"String Ensemble 1"},{id:49,text:"String Ensemble 2"},{id:50,text:"Synth Strings 1"},{id:51,text:"Synth Strings 2"},{id:52,text:"Choir Aahs"},{id:53,text:"Voice Oohs"},{id:54,text:"Synth Choir"},{id:55,text:"Orchestra Hit"},{id:56,text:"Trumpet"},{id:57,text:"Trombone"},{id:58,text:"Tuba"},{id:59,text:"Muted Trumpet"},{id:60,text:"French Horn"},{id:61,text:"Brass Section"},{id:62,text:"Synth Brass 1"},{id:63,text:"Synth Brass 2"},{id:64,text:"Soprano Sax"},{id:65,text:"Alto Sax"},{id:66,text:"Tenor Sax"},{id:67,text:"Baritone Sax"},{id:68,text:"Oboe"},{id:69,text:"English Horn"},{id:70,text:"Bassoon"},{id:71,text:"Clarinet"},{id:72,text:"Piccolo"},{id:73,text:"Flute"},{id:74,text:"Recorder"},{id:75,text:"Pan Flute"},{id:76,text:"Blown Bottle"},{id:77,text:"Shakuhachi"},{id:78,text:"Whistle"},{id:79,text:"Ocarina"},{id:80,text:"Lead 1 (square)"},{id:81,text:"Lead 2 (sawtooth)"},{id:82,text:"Lead 3 (calliope)"},{id:83,text:"Lead 4 (chiff)"},{id:84,text:"Lead 5 (charang)"},{id:85,text:"Lead 6 (voice)"},{id:86,text:"Lead 7 (fifths)"},{id:87,text:"Lead 8 (bass + lead)"},{id:88,text:"Pad 1 (new age)"},{id:89,text:"Pad 2 (warm)"},{id:90,text:"Pad 3 (polysynth)"},{id:91,text:"Pad 4 (choir)"},{id:92,text:"Pad 5 (bowed)"},{id:93,text:"Pad 6 (metallic)"},{id:94,text:"Pad 7 (halo)"},{id:95,text:"Pad 8 (sweep)"},{id:96,text:"FX 1 (rain)"},{id:97,text:"FX 2 (soundtrack)"},{id:98,text:"FX 3 (crystal)"},{id:99,text:"FX 4 (atmosphere)"},{id:100,text:"FX 5 (brightness)"},{id:101,text:"FX 6 (goblins)"},{id:102,text:"FX 7 (echoes)"},{id:103,text:"FX 8 (sci-fi)"},{id:104,text:"Sitar"},{id:105,text:"Banjo"},{id:106,text:"Shamisen"},{id:107,text:"Koto"},{id:108,text:"Kalimba"},{id:109,text:"Bagpipe"},{id:110,text:"Fiddle"},{id:111,text:"Shanai"},{id:112,text:"Tinkle Bell"},{id:113,text:"Agogo"},{id:114,text:"Steel Drums"},{id:115,text:"Woodblock"},{id:116,text:"Taiko Drum"},{id:117,text:"Melodic Tom"},{id:118,text:"Synth Drum"},{id:119,text:"Reverse Cymbal"},{id:120,text:"Guitar Fret Noise"},{id:121,text:"Breath Noise"},{id:122,text:"Seashore"},{id:123,text:"Bird Tweet"},{id:124,text:"Telephone Ring"},{id:125,text:"Helicopter"},{id:126,text:"Applause"}],
NoteValues: { 
               'eighth-note': .5, //divide quarter note value by this to get new bpm
               'quarter-note': 1, 
               'dotted-quarter-note': 1.5, 
               'half-note': 2 ,
               'dotted-half-note': 3,
               'whole-note': 4,
             },
InstrumentsToLoad: {
                     'synth_drum': '',
                   },
                 
  }


});
