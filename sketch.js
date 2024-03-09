var splashScreen; 
var play;
var info;
var wall1;
var wall2;
var wall3;
var gameState = "wait";
function preload(){
    splashScreen = loadImage("assets/manpac.gif");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    
    play = createImg("assets/play.png")
    play.position(windowWidth/2,windowHeight/2);
    play.size(80,100);
    play.hide();

    info=createImg("assets/info.png")
    info.position(windowWidth/2-100,windowHeight/2);
    info.size(80,100);
    info.hide();

    wall1=createSprite(windowWidth/2,windowHeight/2,width/6,50);
    wall1.shapeColor="blue";
    wall1.visible= false;
    
}

function draw(){
    if(gameState == "wait"){
        background(splashScreen);
        play.show();
        info.show();
    }
    

    play.mousePressed(()=>{
        play.hide();
        info.hide();
        gameState = "play";
    })
    info.mousePressed(()=>{
        play.hide();
        info.hide();
        gameState="info"
    })

    if(gameState == "info"){
        abtGame();
    }
    if(gameState == "play"){
        background("white")
        wall1.visible = true;
    }

    drawSprites();
}

function abtGame(){
    swal({
        title:"About this Game",
        text:"Use keys to collect all the buttons and not get eaten by the enemies goodluck!",
        textAlign:"center",
        imageUrl:"assets/manpac.gif",
        imageSize:"300x300",
        confirmButtonText:"Go back to the mainscreen",
        confirmButtonColor:"blue"
    },
    function(){
        gameState ="wait"
    })
}
