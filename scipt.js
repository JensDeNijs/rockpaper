(function () {

    let choice;
    let computerChoice;
    let picked = document.getElementById("pick")
    let computer = document.getElementById("computer")
    let winloss = document.getElementById("winloss")

    document.getElementById("rock").addEventListener("click", function () {
        choice = "rock";
        compFunc()
    });
    document.getElementById("paper").addEventListener("click", function () {
        choice = "paper";
        compFunc()
    });
    document.getElementById("scissors").addEventListener("click", function () {
        choice = "scissors";
        compFunc()
    });
    document.getElementById("lizard").addEventListener("click", function () {
        choice = "lizard";
        compFunc()
    });
    document.getElementById("spock").addEventListener("click", function () {
        choice = "spock";
        compFunc()
    });

    function compFunc() {
        computerChoice = Math.random();

        if (computerChoice < 0.2) {
            computerChoice = "rock";
        } else if (computerChoice <= 0.4) {
            computerChoice = "paper";
        } else if (computerChoice <= 0.6) {
            computerChoice = "scissors";
        } else if (computerChoice <= 0.8) {
            computerChoice = "lizard";
        } else {
            computerChoice = "spock";
        }


        picked.innerHTML = "you picked: " + choice;
        computer.innerHTML = "The computer picked: " + computerChoice;
        switch (choice) {
            case computerChoice:
                winloss.innerHTML = "Its a tie!";
                break;
            case "rock":
                if (computerChoice === "scissors" || computerChoice === "lizard") {
                    winloss.innerHTML = "You won !!";
                } else {
                    winloss.innerHTML = "You lost ...";
                }
                break;
            case "paper":
                if (computerChoice === "rock" || computerChoice === "spock") {
                    winloss.innerHTML = "You won !!";
                } else {
                    winloss.innerHTML = "You lost ...";
                }
                break;
            case "scissors":
                if (computerChoice === "paper" || computerChoice === "lizard") {
                    winloss.innerHTML = "You won !!";
                } else {
                    winloss.innerHTML = "You lost ...";
                }
                break;
            case "lizard":
                if (computerChoice === "paper" || computerChoice === "spock") {
                    winloss.innerHTML = "You won !!";
                } else {
                    winloss.innerHTML = "You lost ...";
                }
                break;
            case "spock":
                if (computerChoice === "rock" || computerChoice === "scissors") {
                    winloss.innerHTML = "You won !!";
                } else {
                    winloss.innerHTML = "You lost ...";
                }
                break;
        }

    }

})();