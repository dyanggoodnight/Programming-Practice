function setup() {
  createCanvas(800,800);
  background(0);
}  
  function draw(){
    stroke(0);
    var t=50;
    fill(255);
    while(t<760){
      var s=50;
      while(s<760){
        ellipse(s,t,30,30);
        s=s+35;
      }
      t=t+35;
    }
  }
