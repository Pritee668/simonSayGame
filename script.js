let gameSeq = [];
let userSeq = [];
let start = false;
let level = 0;
let lev = document.querySelector(".level");
let bestScoreElement = document.getElementById("best-score");
let btns = document.querySelectorAll(".same");
let bestScore = 0;
document.getElementById("btn").addEventListener("click", function() {
    if (!start) {
        start = true;
        level = 0;
        gameSeq = [];
        userSeq = [];
        nextRound();
    }
});

function nextRound() {
    level++;
    lev.textContent = level;
    userSeq = [];
    addToGameSequence();
    playSequence();
}

function addToGameSequence() {
    const randomColor = Math.floor(Math.random() * 4) + 1;
    gameSeq.push(randomColor);
}

function playSequence() {
    let i = 0;
    const intervalId = setInterval(() => {
        highlightButton(gameSeq[i]);
        i++;
        if (i >= gameSeq.length) {
            clearInterval(intervalId);
            enableUserInput();
        }
    }, 1000);
}

function highlightButton(color) {
    const button = document.querySelector(`[data-id="${color}"]`);
    if (Number(color) == 1) {
        button.style.backgroundColor = 'lightgreen';
    } else if (Number(color) == 2) {
        button.style.backgroundColor = 'tomato';
    } else if (Number(color) == 3) {
        button.style.backgroundColor = 'yellow';
    } else if (Number(color) == 4) {
        button.style.backgroundColor = 'lightskyblue';
    }
    setTimeout(() => {
        button.style.backgroundColor = ''; // Reset color
    }, 300);
}

function enableUserInput() {
    btns.forEach(btn => {
        btn.addEventListener("click", handleUserClick);
    });
}

function handleUserClick() {
    const buttonId = this.getAttribute("data-id");
    userSeq.push(Number(buttonId));
    highlightButton(buttonId);
    checkUserSequence();
}

function checkUserSequence() {
    const currentIndex = userSeq.length - 1;
    if (userSeq[currentIndex] !== gameSeq[currentIndex]) {
        // Incorrect sequence
        lev.textContent = "Game Over! Click Start to Restart";
        if (level > bestScore) {
            bestScore = level;
            bestScoreElement.innerHTML = `Best Score: ${bestScore}`;
        }
        resetGame();
    } else if (userSeq.length === gameSeq.length) {
        // User completed the sequence correctly
        setTimeout(nextRound, 1000); // Move to the next round
    }
}

function resetGame() {
    start = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
    btns.forEach(btn => {
        btn.removeEventListener("click", handleUserClick);
    });
}
