// Retrieve Scores from localStorage 
function retrieveScores() {
    let storedScores = JSON.parse(localStorage.getItem("allScores"));
    console.log(storedScores)
    return storedScores
 }

// Save score in localStorage
function saveScore(storedScores) {
    let existingScores = JSON.parse(localStorage.getItem("allScores"));
    // if(existingScores == null) existingScores = [];
    if (Object.values(storedScores)[storedScores.length - 1]["name"] == "Player") {

        let name = displayinputName()

        let score = Object.values(storedScores)[storedScores.length - 1]["score"]
        let newScore = {
            "name": name,
            "score": score
        };
        localStorage.setItem("newScore", JSON.stringify(newScore));
        existingScores.pop()
        existingScores.push(newScore);
        localStorage.setItem("allScores", JSON.stringify(existingScores));
    }
}

// Delete Scores from localStorage
function deleteScores() {
    window.localStorage.removeItem('allScores'); 
}



// Order Scores By Descending
function orderScores(scores) {
    sortedScores = scores.slice(0);
    sortedScores.sort((a, b) => b.score - a.score);
    console.log(sortedScores)
    return sortedScores
}

// Display Scores
function displayScores(scores) {
    const scoreTable = document.getElementById("scoreTable")
    const table = document.createElement("table")
    scoreTable.appendChild(table)
    const header = document.createElement("tr")
    header.innerHTML = `<th>RANK</th><th>NAME</th><th>SCORE</th>`
    table.appendChild(header)
    for (i = 0; i < scores.length; i++) {
        const rank = i + 1
        const name = Object.values(scores)[i]["name"]
        const score = Object.values(scores)[i]["score"]
        const row = document.createElement("tr")
        row.innerHTML = `<td>${rank}</td><td>${name}</td><td>${score}</td>`
        row.className = "scoreRow"
        row.id = `scoreRow${i}`
        table.appendChild(row)
    }
}

// Execute
function runFunctions() {
    storedScores = retrieveScores()
    saveScore(storedScores)
    storedScores = retrieveScores()
    sortedScores = orderScores(storedScores)
    // displayScores(sortedScores)
}

runFunctions()


// Click to Delete All Scores
// document.getElementById(#####).addEventListener('click', deleteScores)

function displayinputName () {
    const inputNameForm = document.getElementById('inputNameForm');
    inputNameForm.innerHTML = 
        `<form onsubmit="return displayUsername()">
        Enter Your Name:
        <input type="text" id="inputName"/>
        </form>`
    inputNameForm.innerHTML = name;

    const name = displayForm()
    return name
}

// function displayForm() {
//     return
}

function displayUsername() {
    const username = document.getElementById('inputName').value;
    playerName.innerText = `Hello ${username}`; 
    console.log(username)
    return false;
}

const playerName = document.getElementById('playerName');
// const startBtn = document.getElementById('button');
// startBtn.addEventListener('click',() => {
//    displayinputName();   
// }) 