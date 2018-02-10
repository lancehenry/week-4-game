// Generate a random number to be guessed and append it to HTML doc
// Generate a random number for each crystal to be equal to
// Empty variables to keep user total points, wins, losses and append those to HTML doc
// Create a function that resets the game.
// Create a function that alerts "You win"
// Create a function that alerts "You lose"
// Create an on click function for crystal one, two, three, four, which calls back other functions and appends to the user total points.

$(document).ready(function () {

// VARIABLES

    // Picks a random number between 19 - 120 at the start of the game
    var randomNumber = Math.floor(Math.random() * 101 + 19);

    // Appends the random number to the number-to-guess ID in HTML doc
    $("#number-to-guess").text(randomNumber);

    // Picks a random number between 1 - 12 for each crystal
    var crystalOne = Math.floor(Math.random() * 11 + 1);
    var crystalTwo = Math.floor(Math.random() * 11 + 1);
    var crystalThree = Math.floor(Math.random() * 11 + 1);
    var crystalFour = Math.floor(Math.random() * 11 + 1);

    // Keeping score
    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    // Appends the number of wins and losses to the wins ID and losses ID in HTML doc
    $("#wins").text(wins);
    $("#losses").text(losses);

// FUNCTIONS

    // Resets the game
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

    /*
    COULDN'T GET THIS TO WORK WITHIN THE RESET FUNCTION ABOVE
    var crystals = [];
    var numberOfCrystals = 4;
    for (var i = 0; i < numberOfCrystals; ++i) {
        crystals.push(Math.floor(Math.random() * 11 + 1));
    }
    */

    // Adds the win to the wins ID in HTML doc
    function youWin() {
        alert("You're a winner!");
        wins++;
        $("#wins").text(wins);
        reset();
    }

    // Adds the loss to the losses ID in HTML doc
    function youLose() {
        alert("You're a loser!");
        losses++;
        $("#losses").text(losses);
        reset();
    }

    // On click function for crystal 1 in HTML doc
    $("#crystal-1").on("click", function () {
        userTotal = userTotal + crystalOne;
        $("#counter").text(userTotal);
        if (userTotal === randomNumber) {
            youWin();
        } else if (userTotal > randomNumber) {
            youLose();
        }
    })

    // On click function for crystal 2 in HTML doc
    $("#crystal-2").on("click", function () {
        userTotal = userTotal + crystalTwo;
        $("#counter").text(userTotal);
        if (userTotal === randomNumber) {
            youWin();
        } else if (userTotal > randomNumber) {
            youLose();
        }
    })

    // On click function for crystal 3 in HTML doc
    $("#crystal-3").on("click", function () {
        userTotal = userTotal + crystalThree;
        $("#counter").text(userTotal);
        if (userTotal === randomNumber) {
            youWin();
        } else if (userTotal > randomNumber) {
            youLose();
        }
    })

    // On click function for crystal 4 in HTML doc
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