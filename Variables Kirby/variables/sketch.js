// sketch.js

function setup() {
  createCanvas(600, 600);

}

function draw() {
  background(300);
  
  let positionX = mouseX;
  let positionY = mouseY;
  let radius = 15;

  let kirbyX = 300;
  let kirbyY = 300;
  let kirbyShoes = fill(200,50,100);
  

  //kirby's shoes
  strokeWeight(5);
  kirbyShoes;
  ellipse(220,420,200,100);

  strokeWeight(5);
  kirbyShoes;
  ellipse(380,420,200,100);
  
//kirby 
  strokeWeight(5);
  fill('pink');
  ellipse(300,300,300,300);

  let eyeLeft = kirbyX - 40;
  let eyeRight = kirbyX + 35;
  let eyeY = kirbyY - 40;

  //eye 1
  fill(0);
  ellipse(eyeLeft,eyeY,40,90);
  fill('blue')
  arc(eyeLeft, eyeY, 40, 90, 0, PI);
  fill(300);
  ellipse(eyeLeft, eyeY -19, 25,50);

  // eye 2
  fill(0);
  ellipse(eyeRight,eyeY,40,90);
  fill('blue')
  arc(eyeRight, eyeY, 40, 90, 0, PI);
  fill(300);
  ellipse(eyeRight, eyeY -19, 25,50);

  //mouth
  
  strokeWeight(0);
  fill(200,50,100);
  arc(kirbyX, kirbyY+10, 40, 50, 0, PI);
  
  //arms
let ratioX = mouseY / height; 
 let armLeft = kirbyX - 150;
 let armRight = kirbyX + 150;
 let armY = ratioX * 40 + 280;

 fill('pink');
 ellipse(armLeft,armY, 100,70);
 fill('pink');
 ellipse(armRight,armY, 100,70);



 

  strokeWeight(0);
  stroke(0);
  fill('orange');
  ellipse(positionX, positionY, radius * 2, radius * 2);

  fill(300,50,100);
  ellipse(eyeLeft - 30, eyeY + 60, 40,20);
  ellipse(eyeRight + 30, eyeY +60, 40, 20);
 
 

}
