import rotatingShape from './sketches/rotatingShape';

//==============================================================================
const drawRect = (d, w, h) => d.rect(0, 0, w, h);

//==============================================================================
const drawCircleOfCircles = (d, w, h) => {
  d.noStroke();
  for (var i = 0; i < 10; i++) {
    d.ellipse(0, w / 2, w / 2, w / 2);
    d.rotate(Math.PI / 5);
  }
};

//==============================================================================
const drawSmallCircleOfCircles = (d, w, h) => {
  d.noStroke();
  for (var i = 0; i < 10; i++) {
    d.ellipse(0, w / 4.5, w / 4.5, w / 4.5);
    d.rotate(Math.PI / 5);
  }
};

//==============================================================================
const dots = (d, w, h) => {
  d.noStroke();
  for (var i = 0; i < 10; i++) {
    d.ellipse(0, w / 4.5, w / 4.5, w / 4.5);
    d.rotate(Math.PI / 1);
  }
};

//==============================================================================
const drawFlower = (d, w, h) => {
  const drawOutline = false;
  const drawFill = true;

  if (!drawOutline) {
    d.noStroke();
  }
  if (!drawFill) {
    d.noFill();
  }

  for (var i = 0; i < 10; i++) {
    d.ellipse(0, w / 3, w / 4, h);
    d.rotate(Math.PI / 5);
  }
};

rotatingShape({
  grid: 8,
  randomRotation: false,
  drawShape: drawSmallCircleOfCircles,
  suppressRotation: false,
});
