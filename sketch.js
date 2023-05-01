let xCanvas;
let yCanvas;
 ////// rain section
let levelCounter=0;
let rainS = [];
let xpos = 0;
  let ypos = 0;
/////
let rainAmount;
let wetness = -1;
let score = 0;
let rYpos = 50;
 let vXpos;
 let vYpos;
 let i;
 let stateLR =1;
 let startbutton =0;
 let moveAmount;
 let timer = 30000; 
 let level = 1;
let dayCounter = 0;
let song;
let music;

function setup() {
 frameRate(30);
  xCanvas =300;
  yCanvas =400;
 song = loadSound('music.m4a');
  ////rain
  for(let i = 0; i<75;i++){
    rainS.push(new rainDrop());
  }
  rainAmount = 75;
  createCanvas(xCanvas, yCanvas);
 
  vXpos = random(xCanvas-55);
  vYpos = yCanvas - 110;
  moveSpeed= 1;
  stateLR = 1;
  img = loadImage('umblight.png');
  img2= loadImage('sqwithnut.png');
  img3= loadImage('sqwithoutnut.png');
  img4= loadImage('bubble 1.png');
  img5= loadImage('bubble 2.png')
  backgroundimg = loadImage('background 1.png');
  backgroundimg2 = loadImage('backgfound 2.png');
  backgroundimg3 = loadImage('backgfound 3.png');
  backgroundimg4 = loadImage('backgfound 4.png');
  titlescreen = loadImage('title screen.png');
  
 stateLR = 1;
    moveSpeed= 2;
  moveAmount =2.0;
   wetness = 1000;
 
  
}// end setup




function draw() {

   if(touchStarted() == true){
  
  disableTouchScroll(Canvas);
       
}
  if(wetness == 1000 ){
 background(titlescreen);
  fill(223, 154, 87);  
  textSize(12);
  text("TOUCH SQUIRREL TO START",xCanvas/2-75,250);
  image(img, mouseX, yCanvas - 175);

    image(img2,vXpos, vYpos);
    textSize(12);
    text("Use your pointer to ",xCanvas/2-55,yCanvas-40);
text("keep the rain off the squirrel!",xCanvas/2-76,yCanvas-20);

   
    
  if(mouseX >=vXpos-20 && mouseX<= vXpos+60){
  wetness = 0;
  
}// end internal iff x pos
    
        }///end game start screen
  

  if(wetness < 100){//gameloop timer

 
/// where to draw umb
  xpos = mouseX-35;
  ypos = mouseY-45;
  
  ///level color shifting

  ///levels and days
    if(level == 1){
      
      background(backgroundimg);
      
    }

  if(level == 2){
    background(backgroundimg2);
  }
  if(level == 3){
    background(backgroundimg3);
  }
  if(level ==4){
    background(backgroundimg4);
    
  }
    

  if(score >= 1400){
    textSize(24);
    text(dayCounter,xCanvas/2-10,50);
    textSize(12);
    text("DAYS",xCanvas/2-17,60)
  }
  ///drawing raindrops
  for(let i = 0; i<40;i++){
    fill(158, 183, 229); /// raindrop color
    noStroke();
    rainS[i].fall();   

      if(rainS[i].y <=xCanvas || (rainS[i].x >xpos+70  || rainS[i].x < xpos) ){
       
        rainS[i].display();
        }
  
  
    rainS[i].toTop();
  }//end rain drawing
  
  
  ////////////////// varmit moving
  
  if(vXpos > width -50  ){ //hits right wall go left
      stateLR = 2;
  }
  
 if(vXpos <= 0   ){ //hits left
      stateLR = 1;
  }
  
  

  
  if(stateLR == 1){  ///right
       for(let q =0;q<moveAmount;q++){
          vXpos = vXpos + moveSpeed;    
          
  }//end move
    stateLR = round(random(1,2));
  }
  
  if(stateLR == 2){ //left
      for(let q =0;q<moveAmount;q++){
          vXpos = vXpos - moveSpeed;    
       
  }//end move
    stateLR = round(random(1,2));
  
  }
    
    
    ////levels

if(score - levelCounter >= 720){
  level++;
  if(level>4){
    level = 1
    dayCounter = dayCounter+ 1;
  }
  levelCounter = score;
  print(levelCounter);
}
    
    
    //// words section
  
    
    
    
    
    talking(score);

///end scoreing
  

///draw umberlla
image(img, xpos, yCanvas - 175);

  if(mouseX >=vXpos-25 && mouseX<= vXpos+55){
  score = score + 1;
}// end internal iff x pos
    else{
      wetness = wetness +1;
    }
 

  
//draw score
    if(score < 2000){
      image(img2,vXpos, vYpos);
    }
    if(score >= 2000 && score < 3999){
      image(img3,vXpos, vYpos);
    }
    if(score >4000){
      image(img2,vXpos, vYpos);
    }
    
fill(223, 154, 87);  
textSize(24);
text(wetness,30, 50);
textSize(12);
text("WETNESS",30,60);
text("SCORE", xCanvas-75,60);

///end scoreing
textSize(24);
text(score,xCanvas - 75,50);
timer = timer -1;



 /// secret messages part
    
 
    
if(score > 1400 && score < 1600){
  image(img4,10,100);
  fill(0,0,0)
  textSize(14);
  text("Will it ever stop raining?",30,150);
  
}
if(score > 2800 && score < 3000){
  image(img5,10,100);
  fill(0,0,0)
  textSize(12);
  text("That sure is a colorful umbrella",110,150);
  
}  
    
if(score > 4000 && score < 4200){
  image(img4,10,100);
  fill(0,0,0)
  textSize(14);
  text("Wow that guy is still there.",30,150);
  
}
    
if(score > 5000 && score < 5200){
  image(img5,10,100);
  fill(0,0,0)
  textSize(14);
  text("Do you think he gets tired?",110,150);
  
}  
  
if(score > 6000 && score < 6200){
  image(img4,10,100);
  fill(0,0,0)
  textSize(14);
  text("What about his family?",30,150);
  
}    
    
if(score > 8200 && score < 8400){
  image(img5,10,100);
  fill(0,0,0)
  textSize(14);
  text("He really wants to keep it dry",110,150);
  
}       

    
if(score > 13800 && score < 14000){
  image(img5,10,100);
  fill(0,0,0)
  textSize(14);
  text("Hey I know that guy",110,150);
  
}       
if(score > 14050 && score < 14250){
  image(img4,10,100);
  fill(0,0,0)
  textSize(14);
  text("You do?",30,150);
  
}    
if(score > 14270 && score < 14470){
  image(img5,10,100);
  fill(0,0,0)
  textSize(14);
  text("Yeah he was on the news",110,150);
  
}     
    
if(score > 14610 && score < 14830){
  image(img5,10,100);
  fill(0,0,0)
  textSize(14);
  text("He lost his wife",110,140);
  text("She was murdered",110,160);
  
}     
    
    if(score > 14850 && score < 15030){
  image(img4,10,100);
  fill(0,0,0)
  textSize(14);
  text("That's so sad.",30,150);
  
}   
           
if(score >21001  && score < 21500){
  image(img5,10,100);
  fill(0,0,0)
  textSize(12);
  text("A full week out here in the rain.",110,150);
  
}     
if(score >21550  && score < 21900){
  image(img4,10,100);
  fill(0,0,0)
  textSize(14);
  text("...crazy",30,150);
  
}     
if(score >37000  && score < 37500){
  image(img4,10,100);
  fill(0,0,0)
  textSize(14);
  text("That umbrella man is bizarre",30,150);
  
}     
       
    
   
  }//end main loop
  
if(score >= 38000){
  
  
  background(0,0,0)
text("GAME OVER",xCanvas/2-70,100);
  textSize(12);
text("You have died of starvation",xCanvas/2-70,150);
  text("Refresh to play again",xCanvas/2-50,250)
image(img2,xCanvas/2-100,300);
  
  

}
  
  if(wetness >= 100 && wetness <999){
 
   if(mouseX >= 150 - 20 && mouseX <= 150 + 60 ){
  
 
       score = 0;
  
     wetness = 1000;
    
  }
background(0,0,0);
fill(223, 154, 87);  
textSize(24);
text("GAME OVER",xCanvas/2-70,100);
text(score,xCanvas/2-10,150)
text("YOUR SCORE",xCanvas/2-75,200)
textSize(12);
text("TOUCH SQUIRREL TO PLAY AGAIN",xCanvas/2-100,250)
image(img2,150,300);


        }///end game end screen
  
}// end draw





class rainDrop{
  constructor(){
    this.x = random(xCanvas);
    this.diameter = random(3);
    this.speed = random(6);
    this.y = 0
  }
  fall(){
    this.x == random(2);
    this.y += this.y+this.speed;
  }
  display(){
    ellipse(this.x,this.y,this.diameter,this.diameter+15);
  }//
  hitbox(){
    this.hitboxX = this.x;
    this.HitboxY = this.y;
  }
  toTop(){
    this.y=random(400);
  }/// end raindrop
}



function touchStarted() {

  // prevent default
  return false;
}

 document.body.addEventListener("touchstart", function (e) {
    if (e.target == canvas) {
        e.preventDefault();
    }
}, { passive: false });
document.body.addEventListener("touchend", function (e) {
    if (e.target == canvas) {
        e.preventDefault();
    }
}, { passive: false });
document.body.addEventListener("touchmove", function (e) {
    if (e.target == canvas) {
        e.preventDefault();
    }
}, { passive: false });

///end normal game




function talking(a){
  if(this.a >= 150){
   image(img4,50,200);
  }
}//end talking