let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");


const gencomChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
} 

const drawGame = () =>{
    console.log("Game was Draw");
    msg.innerText = "Game Draw"
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if (userWin)
    {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win ! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You Lost  ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame =(userChoice) => {
    console.log("user choice = ",userChoice);
    // generate computer choice 
    const compChoice = gencomChoice();
    console.log("computer  choice = ",compChoice);
    if (userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if (userChoice === "rock"){
            // scissors ,rock
            userWin = compChoice === "paper" ? false : true ;
        }else if(userChoice === "paper"){
            //rock,scissor
            userWin = compChoice === "scissors" ? false : true ; 
        }
        else{
            // rock,paper
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin,userChoice,compChoice);
    }


};

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
});

});
