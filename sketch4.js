function setup() {
  createCanvas(800, 800);
  background(255);

  colorMode(HSB);
  var h = 16;
  noStroke();

  for (var y = 50; y <= 750; y = y + 35) {
    for (var x = 50; x <= 750; x = x + 35) {
      fill(h, 100, 100);
      h = h + 1;
      ellipse(x, y, 30, 30);
    }
  }
}

function draw() {}
