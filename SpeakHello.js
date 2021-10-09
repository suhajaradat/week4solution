// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2


(function(window) {
    var helloSpeaker = new Object();
    var speakWord = "Hello";
    helloSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
    };
    window.helloSpeaker = helloSpeaker;
})(window);