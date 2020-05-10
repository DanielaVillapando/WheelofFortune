// Delete Scores from local storage
function deleteScores() {
    window.localStorage.removeItem('allScores'); 
}

// Retrieve Scores from local storage 
function retrieveScores() {
   let storedScores = JSON.parse(localStorage.getItem("allScores"));
   console.log(storedScores)
   return storedScores
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
    for (i = 0; i < scores.length; i++) {
        const name = Object.values(scores)[i]["name"]
        const score = Object.values(scores)[i]["score"]
        const scoreLine = document.createElement("p")
        scoreLine.innerHTML = `${name}: ${score}`
        scoreLine.className = "scoreLine"
        scoreLine.id = `scoreLine${i}`
        scoreTable.appendChild(scoreLine)
    }
}

// Execute
function runFunctions() {
    storedScores = retrieveScores()
    sortedScores = orderScores(storedScores)
    displayScores(sortedScores)
}

runFunctions()


// Click to Delete All Scores
// document.getElementById(#####).addEventListener('click', deleteScores)