function setup() {
  createCanvas(800,800);
  background(0);
}  
  function draw(){
    stroke(0);
    var s=30;
    fill(255);
    while(s<750){
      ellipse(s+15,s+15,45,45);
      s=s+35;
    }
  }
