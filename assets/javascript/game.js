//create an array of candy names
var candies = [
    {
        name:"crunch"
    },
    {
        name:"snickers"
    },
    {
        name:"reeses"
    },
    {
        name:"cadbury"
    },
    {
        name:"butterfinger"
    },
    {
        name:"mars"
    },
    {
        name:"twix"
    },
    {
        name:"crunch"
    },
    {
        name:"krackel"
    },
    {
        name:"watchamacallit"
    }
]

//empty array to hold all candies.name values
var candy = [];

//variable to hold chosen candy object index
var chosenCandyIndex = 0;

//secret word choice
var candyName = " ";

//score variables
var wins = 0;
var loss = 0;
var guessesLeft = 12;

//secret word to guess empty array
var guessList = [];

//guessed letters empty array
var guessedLetters = [];

//empty array for indices
var indices = [];

//counter for # of times keypress was added to guessList
var count = 0;

//counter for switch case - was page refreshed with cmd-r
var refresh = 0;

//ID's of divs to write to
var targetScoreW = document.getElementById("scoreW");
var targetScoreL = document.getElementById("scoreL");
var targetGuess = document.getElementById("to-guess");
var targetGuessed = document.getElementById("guessed-letters");
var targetGL = document.getElementById("guesses-left");



// FUNCTIONS
//=================================

//function to return random candy from array candy
function chooseName (){
    const word = candy[Math.floor(Math.random() * candy.length)];
    console.log(word + " letters: " + word.length);

    //console.log ("index of candyName: " + candy.indexOf(word));
    //saves index of chosen candies.name
    chosenCandyIndex = candy.indexOf(word);

    for (let index = 0; index < word.length; index++) {
        guesslist.push(" _ ");
    }
    targetGuess.innerHTML = guesslist.join(" ");
    return word;
}

function chooseCandy(){
    for (let index = 0; index < candies.length; index++) {
        candy.push(candies[index].name);
    }
}

function resetGame(){
    //resets variables
    guessLeft = 12;
    guesslist = [];
    guessedLetters = [];
    candy = [];
    chosenCandy = [];
    count = 0;

    //print values on screen
    targetScoreW.innerHTML = "Wins: " + wins;
    targetScoreL.innerHTML = "Losses: " + loss;
    targetGL.innerHTML = "Guesses left: " + guessLeft;
    targetGuessed.innerHTML = "Letters Guessed: " + guessedLetters;
}

//  ================== MAIN GAME ==================
//

resetGame();
chooseCandy();
candyName = chooseName();

//looks for key press
document.onkeyup = function(event){
    //captures key press, converts to lowercase and saves
    var keyPress = event.key.toLowerCase();

    switch (event.key) {
        case "meta": refresh++;
        case "82": refrsh++;
    }

    if (keyPress !== "meta" && refresh !== 2) {
        guessedLetters.push(keyPress);
        targetGuessed.innerHTML = "Letters Guessed: "+"<br />"+ guessedLetters;

        //subtract 1 from guessLeft & show on screen
        --guessLeft;
        targetGL.innerHTML = "Guesses Left: " + guessLeft;
    }else{}

    //checks if keypress is in the chosen word & replaces dash in guesslist array with keypress value at the given index
    for (let index = 0; index < candyName.length; index++) {
        if(candyName[index] === keyPress){
            guesslist[index] = keyPress;
            count++;
            // indices.push(index);
        }
    }

    //shows updated guess list on screen
    targetGuess.innerHTML = guesslist.join(" ");

    if (count === candyName.length) {
        wins++;
        resetGame();
        chooseCandy();
        candyName = chooseName();
    } else if (guessLeft < 1 && count !== candyName.length) {
        loss++;
        resetGame();
        chooseCandy();
        candyName = chooseName();
    }
}



