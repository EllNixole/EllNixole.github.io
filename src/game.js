var title = "Balloon Frenzy"

let developer = "Danielle Massey"

const BALLOON_TOTAL = 20

const balloons = []

let score = 0;
let playing = false;

const balloonElements = []

function greeting() {
    
    let gameTitleText = `${title} - by ${developer}`
    let gameTitle = document.getElementById("game-title")
    gameTitle.innerHTML = gameTitleText
}

// testBalloon.move = function(){
//     this.x += 10;
// }

function setup() {

    
    //creates canvas object and attaches it to specified container
    let canvas = createCanvas(640, 480)
    canvas.parent("game-container")
    

    for(let i = 0; i< BALLOON_TOTAL; i++){
        balloons.push(new Balloon(
            random(width),
            random(height),
            33,
            color(random(255), random(255), random(255))
        ))
        
    }
    
}

function beginPlay(){
    playing = true;
    let playBtn = document.getElementById("play-button")
    playBtn.remove()
}
    
function draw() {
    //a nice sky blue background
    background(135, 206, 235)
    if(playing){
        for(let balloon of balloons){
        balloon.blowAway()
        balloon.checkToPop()

        fill(balloon.col)
        circle(balloon.x, balloon.y, balloon.r)
        }
    }
    if(score == BALLOON_TOTAL) youWin()
}

function youWin(){
    noLoop()

    let para = document.createElement("p")
    para.id = "win-message"
    para.style.fontSize = "64px"
    let textNode = document.createTextNode("You Win!!!")
    para.appendChild(textNode)

    document.getElementById("game-container").appendChild(para)

    let canvas = document.querySelector("#game-container canvas")
    canvas.remove()
    let resetButton = document.createElement("button")
    resetButton.id = "reset-button"
    resetButton.innerHTML = "Reset"
    resetButton.addEventListener('click', resetGame)
    let gameContainer = document.getElementById("game-container")
    gameContainer.appendChild(resetButton)

    
}

function resetGame(){
    
    score = 0
    document.getElementById("score").innerHTML = 0
    
    let winMessage = document.getElementById("win-message")
    winMessage.remove()
    let resetBtn = document.getElementById("reset-button")
    resetBtn.remove()
    
    for (const element of balloonElements) {
        element.remove();
    }
    
    balloons.length = 0;
    let canvas = createCanvas(640, 480);
    canvas.parent("game-container");
    loop()
    setup()
    
}