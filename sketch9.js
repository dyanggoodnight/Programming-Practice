function setup() {
  createCanvas(820, 820);
  background(0);
}

function draw() {
  stroke(255);
  for (var i = 50; i <= 770; i = i + 15) {
    var startX = 50;
    var startY = i;
    var endX = i;
    var endY = 50;
    line(startX, startY, endX, endY);
  }
  for (var i = 50; i <= 770; i = i + 15) {
    var startX = 770;
    var startY = i;
    var endX = i;
    var endY = 770;
    line(startX, startY, endX, endY);
  }
  noStroke();
  textSize(600);
  text("P", 250, 650);
  noStroke();
}
