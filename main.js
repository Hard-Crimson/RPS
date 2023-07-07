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
    return "Draw!";
    }

}

//const answer = playRound(computer, user)

console.log(playRound(computer, user))