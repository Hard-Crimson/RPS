function GetComputer(arr) {
    
    const item = Math.floor(Math.random() * arr.length);
    const choice = arr[item];
    return choice;
}

const array = ["rock", "paper", "scissors"]
const computer = GetComputer(array)
console.log(computer);



function GetChoice() {
    let MyChoice = prompt("Rock, Paper, or Scissors?: ");
    MyChoice = MyChoice.toLowerCase();
    return MyChoice;
}

const user = GetChoice();
console.log(user)

function playRound(arg1, arg2) {
    if (arg1 == arg2){ //Using == to ignore data type
        return "Draw!"
    }
    //User winning scenarios
    else if ((arg1 === "rock" && arg2 === "paper") || (arg1 === "paper" && arg2 === "scissors") || (arg1 === "scissors" && arg2 === "rock")){
        return "You win!"
    }
    else if ((arg2 == "rock" && arg1 == "paper") || (arg2 == "paper" && arg1 == "scissors") || (arg2 == "scissors" && arg1 == "rock")){
        return "You lose!"
    }
    else {
        return "Error."
    }
}


console.log(playRound(computer, user))