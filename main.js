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