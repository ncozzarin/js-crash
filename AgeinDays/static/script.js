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

