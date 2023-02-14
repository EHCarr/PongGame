// get canvas 
const canvas = document.getElementById("pong");

// use context to access methods and properties to draw on the canvas 
const context = canvas.getContext("2d");

// objects 

// create user 

const user = {
    x: 0,
    y: canvas.height/2 - 100/2,
    width: 10,
    height: 100,
    color: "white",
    score: 0
 }

const computer = {
    x: canvas.width - 10,
    y: canvas.height/2 - 100/2,
    width: 10,
    height: 100,
    color: "white",
    score: 0
}

const ball = {
    x: canvas.width/2,
    y: canvas.height/2,
    radius: 10,
    speed: 10,
    velocityX: 5,
    velocityY: 5,
    radius: 10,
    color: "white"
}

const net = {
    x: canvas.width/2 - 2/2,
    y: 0,
    width: 2,
    height: 10,
    color: "white",
}

// Draw Functions 

function drawRect(x, y, w, h, color) {
    context.fillStyle = color;
    context.fillRect(x,y,w,h);
}

function drawCircle(x, y, r, color) {
    context.fillStyle = color; 
    context.beginPath();
    context.arc(x, y, r,0, Math.PI*2, false);
    context.closePath();
    context.fill();
}


function drawText (text, x, y, color) {
    context.fillStyle = color;
    context.font = "40px fantasy"
    context.fillText(text, x, y)
}

function drawNet(){
    for(let i= 0; i <= canvas.height; i+=15) {
    drawRect(net.x, net.y + i, net.width, net.height, net.color);
    }
}



// control user paddle

canvas.addEventListener("mousemove", movePaddle);

function movePaddle(evt) {
    let rect = canvas.getBoundingClientRect();
    user.y = evt.clientY - rect.top - user.height/2
}


// collision detection

 function collision(b, p) {
    // get placement of paddle  
     p.top = p.y;
     p.bottom = p.y + p.height;
     p.left = p.x;
     p.right = p.x +p.width;

    // get placement of ball 
     b.top = b.y - b.radius;
     b.bottom = b.y + b.radius;
     b.left = b.x - b.radius;
     b.right = b.x + b.radius;

    //check if x/y coordinates overlap - meaning collision - will return true if collision is occuring
    return b.right > p.left && b.top < p.bottom &&  b.left < p.right && b.bottom > p.top 
 }

// reset ball to starting position once one player loses
 function resetBall() {
    ball.x = canvas.width/2;
    ball.y = canvas.height/2;
    ball.speed = 5;
    ball.velocityX = -ball.velocityX;
}

// function to update game (movement, position, score)  - add score limit to game 
function update() {
    
    // update score of players - if the ball touches the canvas on the players side, the computers score increases, if the ball touches the canvas on the computers side, the players score increases 
    if (ball.x - ball.radius < 0) {
        computer.score++;
        resetBall()
  } else if (ball.x +ball.radius > canvas.width){
      user.score++;
      resetBall();
  }


    // give ball velocity 
     ball.x += ball.velocityX; 
     ball.y += ball.velocityY; 
    

    // basic AI to control computer paddle
    let computerLevel = 0.1 
    computer.y += (ball.y - (computer.y + computer.height/2)) * computerLevel;

    //  condition checking if ball hits canvas vertical  limits- if so then reverse velocity(speed + direction)
     if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
          ball.velocityY = -ball.velocityY; 
    }

    // check if paddle hit player or computer paddle
    let player = (ball.x < canvas.width/2 ) ? user : computer;

    // checking for collision 
    if (collision(ball, player)) {
        // check where collision hits paddle
          let collidePoint = ball.y  - (user.y + user.height/2)

        // change value of collid point so value is between 1 and -1 

          collidePoint = collidePoint / (player.height/2);
        // calculate the angle

          let angleRad = (Math.PI/4) * collidePoint;

        // change x direction of ball when it's hit  
        let direction = (ball.x < canvas.width/2)? 1 : -1;
        // change velocity X   and Y

        ball.velocityX = direction * ball.speed * Math.cos(angleRad);
        ball.velocityY = direction * ball.speed * Math.sin(angleRad);

        // everytime ball hits paddle, increase the speed
        ball.speed += 0.1;
        
    }
    
}

// use functions to draw objects on canvas

function render(){
    // clear canvas
    drawRect(0, 0, canvas.width, canvas.height, "black");
    //draw net
    drawNet();

    //draw Scores
    drawText(user.score, canvas.width/4, canvas.height/5, "white");
    drawText(computer.score, 3*canvas.width/4, canvas.height/5, "white");

    // draw user and computer paddles 
    drawRect(user.x, user.y, user.width, user.height, user.color);
    drawRect(computer.x, computer.y, computer.width, computer.height, computer.color);

    // draw Ball 
    drawCircle(ball.x, ball.y, ball.radius, ball.color);

}




// initialize game 

function game() {
    update();
    render();
};

// create Loop to keep game running
// set desired fps
const fps = 50;
// call the game function 50 times per second 
setInterval(game, 1000/fps);
