// ---- Game setup
// ---- User should guess a number
// --- we need to create new ship on the board
// --- 1 2 3 4 5 6
// --- x x o o o x 







let guesses = 0;
let isSunk = false;
let hit = 0;

let location1 = 3;
let location2 = 4;
let location3 = 5;
console.log('Game Start');

while (!isSunk) {


    let userGuess = Number(prompt('Gime me your position?'));
    if (userGuess > 0 && userGuess < 7) {
        guesses = guesses + 1;
        console.log(userGuess);
        if (guesses > 6) {
            console.log(guesses);
            break;
        }

        if (location1 == userGuess || location2 == userGuess || location3 == userGuess) {
            hit = hit + 1
            // if you hit the location1
            if (location1 == userGuess) {
                location1 = -1;
                alert('HIT');
            }
            if (location2 == userGuess) {
                location2 = -1;
                alert('HIT');
            }
            if (location3 == userGuess) {
                location3 = -1;
                alert('HIT');
            }
        } else {
            alert('MISS')
        }
        console.log(hit)
        if (hit == 3) {
            isSunk = true;
            // alert('You Won');
        }


    } else {
        alert('Gime me number between 0 - 6');
    }
}

if (!isSunk == true) {
    console.log('Game Over, You Lost');
    alert('Game Over, You Lost');
}

if (hit == 3) {
    alert('You Won');
    console.log('You Won');
}