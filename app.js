let userScore = 0;
let compScore = 0;
let nDrawn = 0 , nWon = 0 , nLost = 0

const choices = document.querySelectorAll(".choice"); 
const p = document.querySelector("#pick-move");

const body = document.body;
const userScP = document.querySelector("#user-score");
const compScP = document.querySelector("#comp-score");
const divP = document.querySelector(".message");
const winSound = document.querySelector("#win-sound");
const loseSound = document.querySelector("#lose-sound");
const drawSound = document.querySelector("#draw-sound");
const btn = document.querySelector(".btn-theme");

const getCompChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const rnd = Math.floor(Math.random() * 3);
    return options[rnd];
};

const drawGame = () => {
    p.innerText = "Game was Drawn";
    divP.style.backgroundColor = "#081b31";
};


const winner = (userWin , userChoice , compChoice) => {
    if(userWin){
        userScore++;
        nWon++;
        userScP.innerText = userScore;
        p.innerText = `You won ! Comp choose ${compChoice}`;
        showFireworks();
        divP.style.backgroundColor = "green";
        winSound.currentTime = 0;
        winSound.play();
    }
    else{
        compScore++;
        nLost++;
        compScP.innerText = compScore;
        p.innerText = `You lost ! Comp Choose ${compChoice}`;
        divP.style.backgroundColor = "red";
        loseSound.currentTime = 0;
        loseSound.play();
    }
};

const mainGame = (userChoice) => {
    const compChoice = getCompChoice();

    if(userChoice === compChoice){
        drawGame();
        drawSound.currentTime = 0;
        drawSound.play();
        nDrawn++;
        console.log(nDrawn);
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        winner(userWin , userChoice , compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        mainGame(userChoice);
    });
}); 

function showFireworks() {
    confetti({
        particleCount: 200,
        spread: 150,
        origin: {
            y: 0.5
        }
    });
}
btn.addEventListener("click" , () => {
    document.body.classList.toggle("dark-mode");

    if(btn.innerText === "Dark 🌙"){
        btn.innerText = "Light ☀️"  
        btn.style.backgroundColor = "#EAEAEA";
        btn.style.color = "black";
    }
    else{
        btn.innerText = "Dark 🌙";
        btn.style.backgroundColor = "black";
        btn.style.color = "white";
    }
});