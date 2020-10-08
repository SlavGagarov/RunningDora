let bgImg;
let position=1;
let displayImg;
let song;
let xPos=-500;
let delayer=1;
let imgArr = [];

let leopardImgs = [];
let leopardPosition = 0;
let leopardX=-100;
let displayLeopard;

function setup() {
  createCanvas(1300, 700);
  bgImg = loadImage('jgBG.jpg');
  imgArr.push(loadImage('walk1.png'));
  imgArr.push(loadImage('walk2.png'));
  displayImg = imgArr[0];
  for(let i=1; i<11; i++){
    leopardImgs.push(loadImage('leopard/'+i+'.png'));
    leopardImgs[i-1].resize(300,200);
  }
  displayLeopard = leopardImgs[0];
}

function draw() {
  delayer++;
  imgArr[0].resize(240,300);
  imgArr[1].resize(240,300);
  
  background(220);
  image(bgImg,0,0);
  image(displayImg,xPos,350);
  image(displayLeopard,leopardX,450);
  
  if(delayer%3 == 0){
    switchPosition();
  }
  if(delayer%1 == 0){
    updateLeopard();
  }
  
}

function switchPosition(){
  xPos+=30;
  if(xPos>1100)
    xPos=-700;
  
  if(position == 1){
    displayImg = imgArr[1];
    position =2;
  }
  else{
    displayImg = imgArr[0];
    position =1;
  }
}

function updateLeopard() {
  leopardPosition++;
  leopardX+=10;
  if(leopardX>1100)
    leopardX=-700;
  if(leopardPosition>9){
    leopardPosition=0;
  }
  displayLeopard = leopardImgs[leopardPosition];  
}