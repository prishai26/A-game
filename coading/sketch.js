var bg, bgImg ;

var ast ,ast_sleeps, ast_eats, ast_brushes, ast_bathes, ast_gyms, ast_moves, ast_drinks;

function preload(){
  ast_sleeps = 
  loadAnimation("sleep.png");

  ast_eats = 
  loadAnimation ("eat1.png","eat2.png");

  ast_brushes =
  loadAnimation("brush.png");

  ast_bathes =
  loadAnimation("bath1.png","bath2.png");

  ast_gyms =
  loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  
  ast_moves = 
  loadAnimation("move.png","move1.png");

  ast_drinks =
  loadAnimation("drink1.png","drink2.png")

  bgImg = loadImage("iss.png")
}

function setup() {
  createCanvas(800,400);


  ast = createSprite (50,160,20,50);
  ast.addAnimation("sleeping",ast_sleeps);
  ast.addAnimation("eating",ast_eats);
  ast.addAnimation("brushing",ast_brushes);
  ast.addAnimation("bathing",ast_bathes);
  ast.addAnimation("gyming",ast_gyms);
  ast.addAnimation("drinking",ast_drinks);

  bg = createSprite(400,200,50,50)
}



function draw() {
  background(255,255,255);  

  if(keyDown("space")){
    ast.changeAnimation("sleeping")
  }

  else if(keyDown("up_arrow")){
    ast.changeAnimation("eating")
  }

  else if(keyDown("right_arrow")){
    ast.changeAnimation("brushing")
  }

  else if(keyDown("left_arrow")){
    ast.changeAnimation("bathing")
  }

  else if(keyDown("down_arrow")){
    ast.changeAnimation("gyming")
  }

  else if (keyDown("enter")){
    ast.changeAnimation("drinking")
  }

  drawSprites();
}