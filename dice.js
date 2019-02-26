const player = document.getElementById("player");
const dice = document.querySelector('.dice');
const score = document.getElementById('score');
var gameOver = false;
const topScore = 20;
var playerScore = 0;
const roll = document.getElementById('roll')
const reset = document.getElementById("reset");

// add reset button to html
// reset button needs to be hidden on load
// create const for reset and roll buttons

// create an event listener on the roll button that will work on click
roll.addEventListener('click', function(){
// if game over is false;
    if (!gameOver) {
    // when button is clicked, generate random number between 1 and 6
        let rollScore = Math.floor(Math.random()*6) +1;
    // change the source of the die depending on the score;
        dice.src = "../img/dice" + rollScore + ".png";
            // playerScore needs to increase by value of rolled score
        playerScore += rollScore 
        // score needs to display playerScore
        score.textContent = playerScore;
        
        // if rollScore = 1
        if (rollScore === 1) {
        // hide the roll button
            roll.classList.add("hidden"); 
        // show the reset button
            reset.classList.remove("hidden");
        // change gameOver    
            gameOver;
        // change 'Player 1' to "You lost"    
            player.textContent = "You lost";
        }
        
       
        // if score is higher than limit
        if (playerScore >= 20) {
        // show reset button
            reset.classList.remove("hidden");
        // hide roll button
            roll.classList.add("hidden");
        // change gameOver
            gameOver
        // change 'Player 1' to 'You won'
            player.textContent = "You've won";
        }
    }
});


// create event listener for reset button, on click
reset.addEventListener('click', function() {

    // reset the player score
    playerScore = 0;
    player.textContent = "player one";
    // change gameOver
    !gameOver;
    // hide reset button
    reset.classList.add("hidden");
    // show roll button
    roll.classList.remove("hidden");

    score.textContent = playerScore;
});