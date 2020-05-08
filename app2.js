///Array of pokemon
const pokemonArray = {
    "PIKACHU": {"number": "025", "type": "Electric", "hint": "It is the electric mouse Pokemon."},
    "BULBASAUR": {"number": "001", "type": "Grass, Poison", "hint": "There is a seed on its back."},
    "IVYSAUR": {"number": "002", "type": "Grass, Poison", "hint": "There is a bud on its back."},
    "VENUSAUR": {"number": "003", "type": "Grass, Poison", "hint": "There is a large flower on its back."},
    "CHARMANDER": {"number": "004", "type": "Fire", "hint": "There is flame on its tail."},
    "CHARMELEON": {"number": "005", "type": "Fire", "hint": "It has sharp claws and a flame on its tail."},
    "CHARIZARD": {"number": "006", "type": "Fire, Flying", "hint": "It flies and breathes fire."},
    "SQUIRTLE": {"number": "007", "type": "Water", "hint": "It has a round shell and swims fast."},
    "WARTORTLE": {"number": "008", "type": "Water", "hint": "It has a shell and a large furry tail."},
    "BLASTOISE":{"number": "009", "type": "Water", "hint": "It shoots water from water cannons from its shell."}
}
// name = Object.keys(pokemonArray)[randomNumber]
// number = (Object.values(pokemonArray)[randomNumber]["number"]
// type = Object.values(pokemonArray)[randomNumber]["type"]
// hint = Object.values(pokemonArray)[randomNumber]["hint"]

const wheelvalue = [700,500,250,800,400,0,300,650,3000,700,500,800,450,0,2000,300,600,500,750,50,900,600,350,1000]

let deg = 0;
let puzzle = ""
let totalScore = 0
let roundScore = 0
let points = 0
let round = 0

//Generates a random number in the range [0 - number-1]
function random(number) {
    return Math.floor(Math.random()*number);
}

// Display Message
function displayMessage(message) {
    let messageDiv = document.getElementById("message")
    messageDiv.innerHTML = `<p>${message}</p>`;
}

//Display Picture on Left
function displayPictureLeft(title) {
    const left = document.querySelector(".left")
    const image = "img/" + title + ".png"
    left.innerHTML = `<img src="${image}" width="150px"></img>`
    left.style.transition = "all 1s ease"
}

// Clear Picture on Left
function clearPictureRight() {
    const left = document.querySelector(".left")
    left.innerHTML = ""
}

//Display Picture on Right
function displayPictureRight(title) {
    const right = document.querySelector(".right")
    const image = "img/" + title + ".png"
    right.innerHTML = `<img src="${image}" width="150px"></img>`
}

// Clear Picture on Right
function clearPictureRight() {
    const right = document.querySelector(".right")
    right.innerHTML = ""
}

// Generate the alphabet buttons
function createAlphabet() {
    const alphabetDiv = document.getElementById("alphabet")
    alphabetDiv.innerHTML = null
    for (i = 65; i < 91; i++) {
        let alphabetBtn = document.createElement("button")
        alphabetBtn.innerHTML = String.fromCharCode(i);
        alphabetBtn.className = "abc"
        alphabetBtn.id = "abc"
        alphabetDiv.appendChild(alphabetBtn)
    }
}

//Disable Alphabet
function disableAlphabet() {
    let childNodes = document.getElementById("alphabet").getElementsByTagName('*');
    for (let node of childNodes) {
        node.disabled = true;
    }
}

//Enable Alphabet
function enableAlphabet() {
    var childNodes = document.getElementById("alphabet").getElementsByTagName('*');
    for (var node of childNodes) {
        if (node.innerHTML !== "-") {
            node.disabled = false;
        }
    }
}

// Change Play Button Text
function changePlayButton(text) {
    const playBtn = document.getElementById("playBtn")
    playBtn.innerHTML = text
}

// Disable Play Button
function disablePlayButton() {
    const playBtn = document.getElementById("playBtn")
    playBtn.style.backgroundColor = "gray"
    playBtn.disabled = true
}

// Create Spin Button
function createSpinButton() {
    const spinDiv = document.getElementById("spin")
    spinDiv.innerHTML = null
    const spinBtn = document.createElement("button")
    spinBtn.id = "spinBtn"
    spinBtn.style.backgroundImage = "url(img/pokeball.png)"
    spinBtn.style.backgroundSize = "88px"
    spinDiv.appendChild(spinBtn)
}

// Disable Spin Button
function disableSpinButton() {
    const spinBtn = document.getElementById("spinBtn")
    spinBtn.style.backgroundImage = "url(img/pokeballgray.png)"
    spinBtn.style.backgroundSize = "88px"
    spinBtn.disabled = true
}

// Enable Spin Button
function enableSpinButton() {
    const spinBtn = document.getElementById("spinBtn")
    spinBtn.style.backgroundImage = "url(img/pokeball.png)"
    spinBtn.style.backgroundSize = "88px"
    spinBtn.disabled = false
}

// Create Wheel
function createWheel() {
    const wheelDiv = document.getElementById("wheelDiv")
    wheelDiv.innerHTML = `<img id="wheel" src="img/wheel.png">`
    const pointerDiv = document.getElementById("pointerDiv")
    pointerDiv.innerHTML = '<img id="pointer" src="img/pointer.png">'
}

// Create Total Score Counter
function displayTotalScore(score) {
    const totalScoreboard = document.getElementById("score")
    totalScoreboard.innerHTML = `${score}`
}

// Create Round Score Counter
function displayRoundScore(score) {
    const roundScoreboard = document.getElementById("roundscore")
    roundScoreboard.innerHTML = `${score}`
}

// Display Points Per Letter
// function displayPoints(points) {
//     const pointsDiv = document.getElementById("points")
//     pointsDiv.innerHTML = `${points}`
// }

// Add Points to Score
function addPoints(roundScore, points) {
    roundScore += points
    return roundScore
}

// Subtract Points from Score
function subtractPoints(roundScore, points) {
    roundScore -= points
    return roundScore
}

// Add Round Score to Total Score
function addTotal(totalScore, roundScore) {
    totalScore += roundScore
    return totalScore
}

// Display Points for the Spin
function getPoints() {
    const randomNumber = random(16);
    const points = pointArray[randomNumber]
    return points
}

// Gets puzzle word from bank
function getPuzzle() {
    const number = random(10)
    const puzzle = Object.entries(pokemonArray)[number]
    return puzzle
}

// Creates puzzle 
function createPuzzle() {
    const name = puzzle[0]
    const puzzleDiv = document.getElementById("puzzleDiv")
    puzzleDiv.innerHTML = ""
    for (i=0; i<name.length; i++) {
        const boxDiv = document.createElement("div")
        boxDiv.className = "box"
        boxDiv.id = `box${i}`
        boxDiv.innerHTML = "?"
        puzzleDiv.appendChild(boxDiv)
    }
}

// Guess letter of puzzle
function guessLetter(event, puzzle) {
    const guess = event.target.innerHTML
    const answer = puzzle[0]
    let count = 0
    for (i=0; i<answer.length; i++) {
        const boxId = `box${i}`
        if (guess == answer.charAt(i)) {
            const box = document.getElementById(boxId)
            box.innerHTML = guess
            box.style.backgroundColor = "yellow"
            count += 1
        }
    }
    event.target.innerHTML = "-"
    event.target.disabled = "disabled"
    event.target.style.backgroundColor = "rgb(187, 176, 116)"
    return count
}

// Check if puzzle is solved
function checkPuzzle(puzzle) {
    const complete = puzzle[0].length
    let check = 0
    for (i=0; i<complete; i++) {
        element = `#box${i}`
        const contents = document.querySelector(element).innerHTML 
        if (contents !== "?") {
            check += 1
        }
    }
    if (check == complete) {
        totalScore = addTotal(totalScore, roundScore)
        displayTotalScore(totalScore)
        displayMessage("Congratulations!!")
        displayPictureLeft(puzzle[1]["number"])
        displayPictureRight("red99")
        disableSpinButton()
        disableAlphabet()
    }
}

// Click the play button
document.getElementById("playBtn").addEventListener("click", function() {
    createAlphabet()
    disableAlphabet()
    createSpinButton()
    enableSpinButton()
    displayTotalScore(totalScore)
    roundScore = 0
    displayRoundScore(roundScore)
    displayMessage("")
    displayPictureLeft("000")
    displayPictureRight("red0")
    createWheel()
    puzzle = getPuzzle()
    createPuzzle(puzzle)
    displayPictureLeft(`${puzzle[1]["number"]}b`)
    round += 1
    changePlayButton(`Start Round ${round + 1}`)
    if (round == 10) {
        disablePlayButton()
    }
})

// Click the spin button
document.addEventListener('click',function(e) {
    if(e.target && e.target.id == 'spinBtn') {
        displayMessage("")
        displayPictureRight(`red${random(12)}`)

        const wheel = document.getElementById('wheel');
        e.target.style.pointerEvents = 'auto';
        deg = Math.floor(2500 + Math.random() * 2500);
        wheel.style.transition = 'all 5s ease-out';
        wheel.style.transform = `rotate(${deg}deg)`;
        wheel.classList.add('blur');

        wheel.addEventListener('transitionend', () => {
            wheel.classList.remove('blur');
            wheel.style.transition = 'none';
            const absDeg = deg % 360;
            wheel.style.transform = `rotate(${absDeg}deg)`;
        })
        
        points = wheelvalue[Math.floor((360 - (deg % 360)) / 15)]
        disableSpinButton()
        setTimeout(() => {enableAlphabet()}, 5000)
        setTimeout(() => {displayMessage(points)}, 5000)
        // if (points < 0) {
        //     roundScore = addPoints(roundScore, points)
        //     displayMessage(`${points}!!`)
        //     enableSpinButton()
        //     disableAlphabet()
        // }
        if (points == 0) {
            roundScore = 0
            setTimeout(() => {displayMessage("Bankrupt!!")}, 5000)
            setTimeout(() => {enableSpinButton()}, 5000)
            setTimeout(() => {disableAlphabet()}, 5000)
        }
        setTimeout(() => {displayRoundScore(roundScore)}, 5000)
     }
 })


 // Click an alphabet button
document.addEventListener('click',function(e){
    if(e.target && e.target.id == 'abc'){
        const guess = e.target.innerHTML
        const count = guessLetter(e, puzzle)
        const roundPoints = points * count
        if (count == 0) {
            roundScore = subtractPoints(roundScore, 500)
            displayMessage(`No ${guess} ... -500 :(`)
        }
        else {
            roundScore = addPoints(roundScore, roundPoints)
            if (count == 1) {
                displayMessage(`${guess} ... +${roundPoints} !!`)
            }
            else {
                displayMessage(`${count} ${guess}'s ... +${roundPoints} !!`)
            }
        }
        displayRoundScore(roundScore)
        disableAlphabet()
        enableSpinButton()
        checkPuzzle(puzzle)
     }
 })
 