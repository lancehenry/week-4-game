// Generate a random number to be guessed and append it to HTML doc
// Generate a random number for each crystal to be equal to
// Empty variables to keep user total points, wins, losses and append those to HTML doc
// Create a function that resets the game.
// Create a function that alerts "You win"
// Create a function that alerts "You lose"
// Create an on click function for crystal one, two, three, four, which calls back other functions and appends to the user total points.

$(document).ready(function () {

    // PICKS A RANDOM NUMBER BETWEEN 19 - 120 AT THE START OF THE GAME
    var randomNumber = Math.floor(Math.random() * 101 + 19);

    // APPENDS THE RANDOM NUMBER TO THE NUMBER-TO-GUESS ID IN HTML DOC
    $("#number-to-guess").text(randomNumber);

    // PICKS A RANDOM NUMBER BETWEEN 1 - 12 FOR EACH CRYSTAL
    var crystalOne = Math.floor(Math.random() * 11 + 1);
    var crystalTwo = Math.floor(Math.random() * 11 + 1);
    var crystalThree = Math.floor(Math.random() * 11 + 1);
    var crystalFour = Math.floor(Math.random() * 11 + 1);

    // VARIABLES TO KEEP SCORE
    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    // APPENDS THE NUMBER OF WINS AND LOSSES TO THE WINS ID AND LOSSES ID IN HTML DOC
    $("#wins").text(wins);
    $("#losses").text(losses);

    // FUNCTION THAT RESETS THE GAME
    function reset() {
        randomNumber = Math.floor(Math.random() * 101 + 19);
        $("#number-to-guess").text(randomNumber);
        crystalOne = Math.floor(Math.random() * 11 + 1);
        crystalTwo = Math.floor(Math.random() * 11 + 1);
        crystalThree = Math.floor(Math.random() * 11 + 1);
        crystalFour = Math.floor(Math.random() * 11 + 1);
        userTotal = 0;
        $("#counter").text(userTotal);
    }

    // COULDN'T GET THIS TO WORK WITHIN THE RESET FUNCTION ABOVE
    // var crystals = [];
    // var numberOfCrystals = 4;
    // for (var i = 0; i < numberOfCrystals; ++i) {
    //     crystals.push(Math.floor(Math.random() * 11 + 1));
    // }

    // ADDS THE WIN TO THE WINS ID IN HTML DOC
    function youWin() {
        alert("You're a winner!");
        wins++;
        $("#wins").text(wins);
        reset();
    }

    // ADDS THE LOSS TO THE LOSSES ID IN HTML DOC
    function youLose() {
        alert("You're a loser!");
        losses++;
        $("#losses").text(losses);
        reset();
    }

    // CLICK FUNCTION FOR CRYSTAL 1 IN HTML DOC
    $("#crystal-1").on("click", function () {
        userTotal = userTotal + crystalOne;
        $("#counter").text(userTotal);
        if (userTotal === randomNumber) {
            youWin();
        } else if (userTotal > randomNumber) {
            youLose();
        }
    })

    // CLICK FUNCTION FOR CRYSTAL 2 IN HTML DOC
    $("#crystal-2").on("click", function () {
        userTotal = userTotal + crystalTwo;
        $("#counter").text(userTotal);
        if (userTotal === randomNumber) {
            youWin();
        } else if (userTotal > randomNumber) {
            youLose();
        }
    })

    // CLICK FUNCTION FOR CRYSTAL 3 IN HTML DOC
    $("#crystal-3").on("click", function () {
        userTotal = userTotal + crystalThree;
        $("#counter").text(userTotal);
        if (userTotal === randomNumber) {
            youWin();
        } else if (userTotal > randomNumber) {
            youLose();
        }
    })

    // CLICK FUNCTION FOR CRYSTAL 4 IN HTML DOC
    $("#crystal-4").on("click", function () {
        userTotal = userTotal + crystalFour;
        $("#counter").text(userTotal);
        if (userTotal === randomNumber) {
            youWin();
        } else if (userTotal > randomNumber) {
            youLose();
        }
    })
});