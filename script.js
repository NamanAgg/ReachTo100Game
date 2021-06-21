// GAME RULES:
// - The game has 2 players, playing in rounds
// - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
// - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
// - The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
// - The first player to reach 100 points on GLOBAL score wins the game
//https://namanagg.github.io/ReachTo100Game/



let player0El = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');
let score0El = document.querySelector('.score--0');
let score1El = document.querySelector('.score--1');
let current0El = document.querySelector('.current--0');
let current1El = document.querySelector('.current--1');
let diceEl = document.querySelector('.dice');
let btnNew = document.querySelector('.btn.new');
let btnRoll = document.querySelector('.btn.roll');
let btnHold = document.querySelector('.btn.hold');


let scores, currentScore, activePlayer, playing;


function init() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('winner');
    player1El.classList.remove('winner');
    player0El.classList.add('active');
    player1El.classList.remove('active');
};
init();


function switchPlayer(){
    document.querySelector(`.current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    
    player0El.classList.toggle('active');
    player1El.classList.toggle('active');
};


btnRoll.addEventListener('click', function () {
    if (playing) {
       
        let dice = Math.trunc(Math.random() * 6) + 1;       
        diceEl.classList.remove('hidden');   
        diceEl.src = `dice-${dice}.png`;

        if (dice !== 1) {
            currentScore += dice;
            document.querySelector(`.current--${activePlayer}`).textContent =
                currentScore;
        } else {
            switchPlayer();
        }
    }
});


btnHold.addEventListener('click', function () {
    if (playing) {
        console.log(scores[activePlayer]);
        scores[activePlayer] += currentScore;
        document.querySelector(`.score--${activePlayer}`).textContent =
            scores[activePlayer];
        if (scores[activePlayer] >= 100) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`)
            document.classList.add('winner');
            
            document.querySelector(`.player--${activePlayer}`)
            document.classList.remove('active');
            diceEl.classList.add('hidden');
        } else {
            switchPlayer();
        }
    }
});


btnNew.addEventListener('click', init);

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}