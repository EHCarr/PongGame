
### Pong

[Deployed Game](https://ehcarr.github.io/PongGame/)

##### Overview

This is a simple Pong Game, which was completed during the first phase of my General Assembly Bootcamp. The user controls his pong paddle (left side paddle) by moving their mouse up down on the black board where the paddles and the balls are located. They play against a computer (right side paddle). The user should  hit the ball back to the other side without it touching your side of the board. The user scores a point each time the ball hits the board wall on the computer's side and vice versa. 

###### Timeframe

I worked on this project independently, over the period of *1 week*. Estimated total time: *40hrs*

###### Technology Used 

- IDE: VSCODE
- Terminal: Git Bash
- HTML5
- CSS
- Javascript
- Jquery

###### Brief

The brief was for me to code a game - either noughts and crosses, or a game of my choice, using separated file structure for each technology: HTML, CSS, Javascript (and Jquery for DOM manipulation). Moreover, I was told to code according to **KISS, and DRY principles.** 

###### Project Planning

I first sketched out the HTML elements for an opening page  on paper. This page would be the first thing the user sees, and invite them to click a button to start the game. I then sketched out how I wanted the page with the pong game on it to look - again diagramming out the HTML elements that would be on the page, in order to better understand how my JS code would  need to increase with these elements. Using trello  I created a pong project folder. In this project I listed all the user stories that I would need to implement to conceptualise the user-flow through the website’s UI. These user stories did not include code logic, but merely described the needed functionality to get the game working. 

###### Build Process

**Game Iteration 1**
During the planning phase I had focused purely on the user journey and mapping out what features needed to exist to create a workable pong game, but not examined the coding logic behind this. When it came to starting the coding process - I initially utilised the canvas method, Using it to draw graphics by creating object constructors. 	In this version of the game, the pong was two player, with the movement of the paddles controlled by W,S keys for the left paddle, and the UP,DOWN keys for the right paddle.


**Game Iteration 2**
However with multiple glitches existing in this iteration, I decided to instead use an external API, which would take care of object collision with me. In this iteration of the game I ended up creating a simple ‘AI’ paddle rather than have two players on a single board. However using this external API posed problems for the movement of the pong ball.

**Game Iteration 3**
Using what I learned about object collision from the simplified code of this version, I developed a greater understanding of how object collision worked, and read further documentation on the process online. Using this, I was able to return to my initial method of using the canvas in Javascript, with a user playing against an AI. This ended up being the final version of the game.

###### Challenges 

In the first game iteration the first problem I had was after applying the event listeners to create key based controls for the left and right game paddles. With two players playing on the same keyboard -  when one player was already holding a key (moving their paddle), it would delay the movement of the other paddle. This would obviously create an imperfect situation where one player could willfully prevent the other player from being able to move their paddle. 

Therefore in later iterations of the game I chose to make it single player, and created an ‘AI’ paddle instead. In the second iteration of the game, this AI paddle was fairly simple in that it moved up and down constantly once the game started, making it fairly predictable. In the final interaction I made it a bit more sophisticated by adjusting the AI paddle movements based on the x,y position of the ball, making it more responsive to the game itself. 

The biggest challenge I had with the pong game was getting object collision to work and registering the collision between object collisions correctly.  In my initial canvas game I was unable to get the ball move correctly when colliding, it appeared to speed up and move incongruously to the area of collision. My initial attempt to solve this problem led to finding an external library to detect object collision. This was useful as it simplified the process of object collision for me, and helped me understand the underlying logic. However I found that this method had my ball movement stuck. Due to there being poor documentation for how to use this, I went back to using a previous method of using the canvas method, but applying some of the logic I had learned from this API, reading online documentation on object collision, and watching online tutorials. 

###### Wins

One of my wins was quickly learning and implementing  the use of **object constructors** to create the elements and apply methods to them using jQuery and JavaScript. 
Another win for me was to actually get all game elements working and end with a fully functioning game at the end, due to there being multiple periods where one more element of the game was breaking. 

###### TakeAways

A key learning for me was to do appropriate research into what the code logic I would need to code core functionality into the game. As I started out focusing on the user stories, and wireframe for design, I did not spend appropriate time considering the underlying working. This pressed me for time in the coding phase of the project, meaning that I could implement the design I wanted due to time pressure.

###### Bugs

A bug which would need to be fixed is one aspect of the collision detection. Currently if the paddle hits the ball from its top or bottom side and the ball is close to the boundary, it resets and awards a point to the other player, even if you would have been able to hit the ball.

###### Improvements

I would like to add a starting page, which you click to take you through to the main page with the game.
Add an event listener for the game starting and ending, triggering an audio clip and animated element to appear at the centre of the page (telling you the game is about to start, and telling you who the winner when the game ends). 
Find error in collision detection function which occasionally results in points being awarded when the ball hits the paddle from a certain angle.
