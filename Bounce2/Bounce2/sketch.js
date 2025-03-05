//
// Bounce2
// This version of the bounce includes
// gravity and a bounciness factor.

let ball1;
let ball2;
let ball3;


function setup() {
  createCanvas(800, 600);
  ball1 = new Ball(100,200,3,7,25,255,100,100,1.0,.68);
  ball2 = new Ball(200,300,6,7,30,100,100,100,1.0,.98);
  ball3 = new Ball(300,100,2,7,30,50,100,100,1.0,.88);

  
}

function draw() {

  background(220);
  
  ball1.move();
  ball1.render();

  ball2.move();
  ball2.render();

  ball3.move();
  ball3.render();


  
}


class Ball {

  constructor(newX, newY, newVX, newVY, newRadius, newR, newG, newB, newGravity, newBounciness){
    this.positionX = newX;
    this.positionY = newY;
    this.velocityX = newVX;
    this.velocityY = newVY;
    this.radius = newRadius;
    this.size = this.radius * 2;
    this.ballR = newR;
    this.ballG = newG;
    this.ballB = newB;
    this.gravity = newGravity;
    this.bounciness = newBounciness;
  }

  move(){

     // Move the Ball
  
  this.velocityY += this.gravity;
  this.positionX = this.positionX + this.velocityX;
  this.positionY = this.positionY + this.velocityY;

  const rightEdge = width;
  const leftEdge = 0;
  const topEdge = 0;
  const bottomEdge = height;
  
  // code to check if we hit right or left side
  if (this.positionX + this.radius >= rightEdge) {
    // bounce off the right edge
    this.positionX = rightEdge - this.radius;
    this.velocityX = this.velocityX * -this.bounciness;
    this.velocityY = this.velocityY * this.bounciness;
  }
  else if (this.positionX - this.radius <= leftEdge) {
    // bounce off the left edge
    this.positionX = leftEdge + this.radius;
    this.velocityX = this.velocityX * -this.bounciness;
    this.velocityY = this.velocityY * this.bounciness;
  }
  
  // code to check if we hit top or bottom
  if (this.positionY + this.radius >= bottomEdge) {
    // bounce off the bottom
    this.positionY = bottomEdge - this.radius;
    this.velocityY = this.velocityY * -this.bounciness;
    this.velocityX = this.velocityX * this.bounciness;
  }
  else if (this.positionY - this.radius <= topEdge) {
    // bounce off the top
    this.positionY = topEdge + this.radius;
    this.velocityY = this.velocityY * -this.bounciness;
    this.velocityX = this.velocityX * this.bounciness;
  }

  }

  render() {
    stroke(0);
    fill(this.ballR, this.ballG, this.ballB);
    ellipse(this.positionX,this.positionY,this.size,this.size);
  }



}