let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score")
const compScorepara = document.querySelector("#comp-score")

const genCompChoice = () => {
    const options = ["rock", "scissor", "paper"];
    const ranIdx = Math.floor(Math.random() *3);
    return options[ranIdx];
}

const drawgame = () => {
    console.log("Game was draw");
    msg.innerHTML = "Game draw. Play Again";
    msg.style.backgroundColor = "#081b31"
}

const showWinner =(userWin) => {
    if(userWin)
    {
        userScore++;
        userScorepara.innerHTML = userScore;
        console.log("You win");
        msg.innerHTML = "You win";
        msg.style.backgroundColor = "green"
    }
    else {
        compScore++;
        compScorepara.innerHTML = compScore;
        console.log("You lose");
        msg.innerHTML = "You lose";
        msg.style.backgroundColor = "red"
    }    
}


const playGame = (userChoice) =>{
    console.log("user choice", userChoice);
    const compChoice = genCompChoice();
    console.log("comp coice = ", compChoice);

    if(userChoice === compChoice) drawgame();
    else {
        let userWin = true;
        if(userChoice === "rock")
        {   
            userWin = compChoice === "paper"? false: true;
        }
        else if (userChoice === "paper")
        {
            userWin = compChoice === "scissor"? false: true;
        }
        else{
            userWin = compChoice === "rock"? false: true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
})