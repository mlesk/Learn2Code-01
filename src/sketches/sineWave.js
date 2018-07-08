import p5 from 'p5';
///import style from './main.css';

let s = sk => {
  var xspacing = 16; // Distance between each horizontal location
  var w; // Width of entire wave
  var theta = 0.0; // Start angle at 0
  var yvalues; // Using an array to store height values for the wave

  sk.setup = () => {
    sk.createCanvas(window.innerWidth, window.innerHeight);
    w = sk.width + 16;
    yvalues = new Array(Math.floor(w / xspacing));
  };

  sk.draw = () => {
    sk.background(40);
    calcWave();
    renderWave();
  };

  function calcWave() {
    // Increment theta (try different values for
    // 'angular velocity' here)
    theta += 0.02;

    // For every x value, calculate a y value with sine function

    var amplitude = 75.0; // Height of wave
    var x = theta;
    var period = 500.0; // How many pixels before the wave repeats
    var dx = (sk.TWO_PI / period) * xspacing;
    for (var i = 0; i < yvalues.length; i++) {
      yvalues[i] = Math.sin(x) * amplitude;
      x += dx;
    }
  }

  function renderWave() {
    sk.noStroke();
    sk.fill(255);
    // A simple way to draw the wave with an ellipse at each location
    for (var x = 0; x < yvalues.length; x++) {
      sk.ellipse(x * xspacing, sk.height / 2 + yvalues[x], 16, 16);
    }
  }
};

const P5 = new p5(s);
