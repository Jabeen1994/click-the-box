const gameBox = document.getElementById("game-box");
const startBtn = document.getElementById("start-btn");
const scoreDisplay = document.getElementById("score");

let score = 0;
let gameActive = false;
let gameTimer ;

function startGame(){
    score = 0;
    scoreDisplay.textContent = score;
    gameActive = true;
    gameBox.style.display = "block";
    moveBox();

    //end game after 30 sec
    gameTimer = setTimeout(() =>{
        endGame();

    }, 30000);
}

function moveBox(){
    if (!gameActive)return;

    const containerWidth = window.innerWidth - 60;
    const containerHeight = window.innerHeight - 60;

    const randomX = Math.floor(Math.random() * containerWidth);
    const randomY = Math.floor( Math.random() * containerHeight);

    gameBox.style.left = `${randomX}px`;
    gameBox.style.top=`${randomY}px`

    //move the box every 1 second
    setTimeout(moveBox,1000);

}

function incrementScore(){
    if (gameActive){
        score++;
        scoreDisplay.textContent = score;

    }
}

function endGame(){
    gameActive = false;
    gameBox.style.display = "none";
    alert(`Game over! your final score is ${score}.`);
}

//event listner
startBtn.addEventListener("click", () =>{
    startGame();
});

gameBox.addEventListener("click",() => {
    incrementScore();
})