
//let samples = [72, 69, 67, 64, 63, 64, 67, 71, 76];
//let times= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let minDataValue = 60;
let maxDataValue = 80;

let graphX = 100;
let graphY = 100;
let graphWidth = 600;
let graphHeight = 400;

let table;
function preload(){

table = loadTable("data.csv", "csv");

}

function setup() {
  createCanvas(800, 600);

}

function draw() {
  background(173, 216, 230);

  drawGraphBackground();
  drawYAxisLabels();
  drawXAxisLabels();
  drawLineGraph();
  drawChartTitle();

  noLoop();
  
  
}

function drawGraphBackground(){
  noStroke();
  fill(250);
  rect(graphX, graphY, graphWidth, graphHeight);
}

function drawLineGraph(){
  let numberOfDataPoints = table.getRowCount();
  console.log("Number of data points: ", numberOfDataPoints);


  let px = 0;
  let py = 0;

  for(let i = 0; i < numberOfDataPoints; i += 1){
    let sampleValue = table.getNum(i, 1);

    let yearData = table.getString(i,0);
    let yearString = yearData.slice(0,4);
    let year = parseInt(yearString);

    let y = map(sampleValue, minDataValue, maxDataValue, graphY + graphHeight, graphY);
    let x = map(year, 1950, 2021, graphX, graphX + graphWidth);

    noStroke();
    fill(40);
    ellipse(x,y,10,10);
  

    if(i > 0){
      stroke(0);
      strokeWeight(1);
      line(px,py,x,y);
    }

    px = x;
    py = y;
  }
}

function drawYAxisLabels(){
  let numberOfDataPoints = table.getRowCount();

  textFont("Courier New");
  textSize(16);
  textAlign(RIGHT, CENTER);

  for(let sampleValue = minDataValue; sampleValue <= maxDataValue; sampleValue += 5){
    let y = map(sampleValue, minDataValue, maxDataValue, graphY + graphHeight, graphY);

    stroke(0);
    strokeWeight(1);
    line(graphX, y, graphX-15, y);

    stroke(220);
    line(graphX, y, graphX+graphWidth,y);

    text(sampleValue, graphX-19,y)
  }

}
function drawXAxisLabels(){
  let numberOfDataPoints = table.getRowCount();

  textFont("Courier New");
  textSize(16);
  textAlign(CENTER,TOP);

  for (let i = 1; i < numberOfDataPoints; i+=10) {
    let yearData = table.getString(i, 0); 
    let yearString = yearData.slice(0, 4); 
    let year = parseInt(yearString); 

    let x = map(year, 1950, 2021, graphX, graphX + graphWidth);

    
    stroke(0);
    strokeWeight(1);
    line(x, graphY + graphHeight, x, graphY + graphHeight + 15);

    
    noStroke();
    fill(0);
    text(year, x, graphY + graphHeight + 19);
  }

}
function drawChartTitle(){
  textFont("Courier New");
  textSize(24);
  noStroke();
  fill(0);
  textAlign(CENTER, TOP);
  text("Phoenix Average Temperature", 400, 50);
}