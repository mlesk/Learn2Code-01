import p5 from 'p5';

export default config => {
  const {
    grid = 8,
    randomRotation = false,
    drawShape = (d, w, h) => d.rect(0, 0, 100, 100),
    suppressRotation = false,
  } = config;

  let sketch = d => {
    d.setup = () => {
      d.createCanvas(window.innerWidth, window.innerHeight);
    };

    d.draw = () => {
      d.background(40);
      d.fill(204, 101, 192, 127);
      d.stroke(127, 63, 120);

      //Split screen into cells based on specified grid size
      var cellWidth = d.width / grid / 1.5;
      var cellHeight = d.height / grid / 1.5;

      for (var row = 1; row <= grid; row++) {
        for (var col = 1; col <= grid; col++) {
          d.push();
          const xTrans = (d.width / grid) * col * (1 - 1 / grid);
          const yTrans = (d.height / grid) * row * (1 - 1 / grid);
          d.translate(xTrans, yTrans);

          let rotationFactor = 1;
          if (randomRotation) {
            rotationFactor = Math.round(Math.random() * 100) % 2 == 0 ? -1 : 1;
          }
          if (!suppressRotation) {
            d.rotate(2 * rotationFactor * d.radians(d.frameCount));
          }
          d.rectMode(d.CENTER);
          drawShape(d, cellWidth, cellHeight);
          d.pop();
        }
      }
    };
  };

  const P5 = new p5(sketch);
};
