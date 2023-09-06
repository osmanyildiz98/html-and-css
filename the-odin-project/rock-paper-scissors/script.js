function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)

    if (num == 0) {
        return "rock"
    } else if (num == 1) {
        return "paper"
    }
    return "scissors"
}

function playRound(playerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = getComputerChoice();

    if (player !== computer) {
        if (player == "rock") {
            if (computer == "scissors") {
                return "You Win! Rock break the Scissors"
            } else {
                return "You Lose! Paper beats Rock"
            }
        } else if (player == "paper") {
            if (computer == "rock") {
                return "You Win! Paper beats Rock"
            } else {
                return "You Lose! Scissors cut the Paper"
            }
        } else if (player == "scissors") {
            if (computer == "paper") {
                return "You Win! Scissors cut the Paper"
            } else {
                return "You Lose! Rock breaks the Scissors"
            }
        }

    } else {
        return "Tie Game!"
    }
}

function game() {
    function playRound(playerSelection) {
        let player = playerSelection.toLowerCase();
        let computer = getComputerChoice();

        if (player !== computer) {
            if (player == "rock") {
                if (computer == "scissors") {
                    return "You Win! Rock break the Scissors"
                } else {
                    return "You Lose! Paper beats Rock"
                }
            } else if (player == "paper") {
                if (computer == "rock") {
                    return "You Win! Paper beats Rock"
                } else {
                    return "You Lose! Scissors cut the Paper"
                }
            } else if (player == "scissors") {
                if (computer == "paper") {
                    return "You Win! Scissors cut the Paper"
                } else {
                    return "You Lose! Rock breaks the Scissors"
                }
            }

        } else {
            return "Tie Game!"
        }
    }
}


