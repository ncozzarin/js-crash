// Age in days script


const currentYear = 2021;
function ageInDays(){
   var birthYear = prompt("What year where you born?");
   let ageindays = (currentYear - birthYear)* 365;
   let h1 = document.createElement('h1');
   var textAnswer = document.createTextNode('You are' + ' ' + ageindays + ' ' + 'days old' );
   h1.setAttribute('id', 'ageindays');
   h1.appendChild(textAnswer);
   document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageindays').remove();
}

// Cats Generators

// "https://thecatapi.com/api/images/get?format=src&type=gif&size=small"

function createCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flexcat-gen');
    image.src =  "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);

}

// Rock, Paper, Scissors

function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(Math.floor(Math.random() * 3));
    results = decideWinner(humanChoice, botChoice); // Returns an array of int
    console.log(humanChoice);
    console.log(botChoice);
    console.log(results);
    message = finalMessage(results); // {'message': 'You Won!', 'color' : 'green' }
    rpsFrontEnd(yourChoice.id, botChoice, message);
    
}

function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, botChoice){
    
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors':0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };

    var yourScore = rpsDatabase[yourChoice][botChoice];
    var botScore = rpsDatabase[botChoice][yourChoice];
    return [yourScore, botScore];
}

function finalMessage([yourScore, botChoice]){
    if(yourScore === 0) {
        return {'message': 'You lost!', 'color': 'red'};
    }else if (yourScore === 0.5){
        return {'message': 'You tied!', 'color': 'yellow'};
    } else {
        return {'message': 'You won!', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesJSON = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors' : document.getElementById('scissors').src
    }

    // remove img

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesJSON[humanImageChoice] + "' style='box-shadow: 0px 10px 50px blue'>"
    botDiv.innerHTML = "<img src='" + imagesJSON[botImageChoice] + "' style='box-shadow: 0px 10px 50px red'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "'>" + finalMessage['message'] + "</h1>"
    document.getElementById('flexbox-rps').appendChild(humanDiv);
    document.getElementById('flexbox-rps').appendChild(messageDiv);
    document.getElementById('flexbox-rps').appendChild(botDiv);

}

// Change the color of all buttons
var all_buttons = document.getElementsByTagName('button');
let copyAllButtons = [];
for (let i=0; i < all_buttons.length; i++)
{
    copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonSelection) {
        const {value} = buttonSelection
        switch (value) {
          case 'Red':
            buttonsRed();
            break;
          case 'Green':
            buttonsGreen();
            break;
          case 'Blue':
            buttonsBlue();
            break;
          case 'Reset':
            buttonsReset();
            break;
          default:
            buttonsRandom();
            break;
        }
      }


function buttonsRed(){
    for (let i=0; i < all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen(){
    for (let i=0; i < all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonsBlue(){
    for (let i=0; i < all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-warning');
    }
}

function buttonsReset()
{
    for (let i=0; i < all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function buttonsRandom()
{
    var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];
    for (let i=0; i < all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[Math.floor(4*Math.random())]);
    }
}