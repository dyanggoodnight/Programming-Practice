function setup() {
  createCanvas(800, 800);
  background(255);
}

function draw() {
  var t = 50;
  while (t < 760) {
    var s = 50;
    while (s < 760) {
      var a = random(255);
      var b = random(255);
      var c = random(255);
      colorMode(HSB, 255, 0, 0);
      stroke(a, b, c);
      fill(a, b, c);
      ellipse(s, t, 30, 30);
      s = s + 35;
    }
    t = t + 35;
    noLoop();
  }
}
