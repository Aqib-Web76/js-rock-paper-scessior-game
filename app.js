// let userScore = 0;
// let compScore = 0;
// let drawCount = 0; // Add draw counter
// const userScorePara = document.querySelector("#user-score");
// const compScorePara = document.querySelector("#com-score");
// const choices = document.querySelectorAll(".choice")
// const msg = document.querySelector("#msg");const checkResultBtn = document.querySelector("#check-result");
// const resultDiv = document.querySelector("#result");


// const showWinner = (userWin,userChoice,compChoice) => {
//     if (userWin) {
//         userScore++;
//         userScorePara.innerText = userScore;
//         console.log("You win!");
//         msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
//         msg.style.backgroundColor = "green";
//     } else {
//         compScore++;
//         compScorePara.innerText = compScore;
      
//         console.log("You Lose!");
//         msg.innerText = `you Lose! ${compChoice} beats ${userChoice}`;
//         msg.style.backgroundColor = "red";
//     }
// }
// const drawGame = () => {
//     drawCount++;
//     console.log("game was draw");
//     msg.innerText = "Game was Draw";
//     msg.style.backgroundColor = "#081b31";
// }

// const genCompChoice = () => {
//     const options = ["rock", "paper", "scissors"];
//     const randIdx = Math.floor(Math.random() * 3);
//     return options[randIdx];
// }

// const playGame = (userChoice) => {
//     console.log("user choice =", userChoice);
//     const compChoice = genCompChoice();
//     console.log("comp choice =", compChoice);
//     if (userChoice === compChoice) {
//         //draw game
//         drawGame();
//     } else {
//         let userWin = true;
//         if (userChoice === "rock") {
//             //scissors,paper
//             userWin = compChoice === "paper" ? false : true;
//         } else if (userChoice === "paper") {
//             //rock,scissors
//             userWin = compChoice === "scissors" ? false : true;
//         } else {
//             //rock,paper
//             userWin = compChoice === "rock" ? false : true;
//         }
//         showWinner(userWin,userChoice,compChoice);
//     }
// };

// choices.forEach((choice) => {
//     choice.addEventListener("click", () => {
//         const userChoice = choice.getAttribute("id");
//         playGame(userChoice);
//     });
// });

// checkResultBtn.addEventListener("click", () => {
//     resultDiv.innerHTML = `
//         <p>User Wins: ${userScore}</p>
//         <p>Computer Wins: ${compScore}</p>
//         <p>Draws: ${drawCount}</p>
//     `;
// });
let userScore = 0;
let compScore = 0;
let drawCount = 0; // Add draw counter
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#com-score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const checkResultBtn = document.querySelector("#check-result");
const resultDiv = document.querySelector("#result");

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose!");
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const drawGame = () => {
    drawCount++;
    console.log("Game was draw");
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "#081b31";
};

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playGame = (userChoice) => {
    console.log("User choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("Comp choice =", compChoice);
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

checkResultBtn.addEventListener("click", () => {
    resultDiv.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Count</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>User Wins</td>
                    <td>${userScore}</td>
                </tr>
                <tr>
                    <td>Computer Wins</td>
                    <td>${compScore}</td>
                </tr>
                <tr>
                    <td>Draws</td>
                    <td>${drawCount}</td>
                </tr>
            </tbody>
        </table>
    `;
});
