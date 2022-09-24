const options = ["rock", "paper", "scissors"];

function programchoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}
function checkwinner(user, program){
    if( user == program){
        return "Draw";
    }
    else if(
        (user == "rock" && program == "scissors") ||
        (user == "scissors" && program == "paper") ||
        (user == "paper" && program == "rock")
    ){
        return "Player ";
    }
    else {
        return "Computer ";
    }
}
function playround(user, program){
    const result = checkwinner (user, program);
    if(result == "Draw"){
        return "It's a Draw!"
    }
    else if(result == "Player"){
        return `You win!!! ${user} beats ${program}`
    }
    else {
        return `You Lose! ${program} beats ${user}`
    }
}
function userchoice(){
    let validinput = false;
    while(validinput == false){
        const choice = prompt("Rock Paper Scissors");
        if(choice == null){
            continue;
        }
        const choiceinlower = choice.toLowerCase();
        if(options.includes(choiceinlower)){
            validinput = true;
            return choiceinlower;
        }
    }
}

function game(){
    let userscore = 0;
    let programscore = 0;
    console.log("welcome!")
    for (let i = 0; i < 5; i++) {
        const user = userchoice();
        const program = programchoice();
        console.log(playround(user, program));
        if(checkwinner(user, program)== "Player"){
            userscore++;
        }
        else if (checkwinner(user, program)== "computer"){
            programscore++;
        }

    }
    console.log("Game Over")
    if(userscore > programscore){
        console.log("Player is the winner");
    }
    else if(userscore < programscore){
        console.log("Computer is the winner");
    }
    else{
        console.log("We have a draw!");
    }
}

game()