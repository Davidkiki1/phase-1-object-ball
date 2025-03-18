

function playerStats(playerName) {
    return allPlayers()[playerName] || "Player not found"
}

function numPointsScored(playerName) {
    return allPlayers()[playerName]?.points || "Player not found"
}

function playerNumber(playerName) {
    return allPlayers()[playerName]?.number || "Player not found"
}

function teamColors(teamName) {
    if (game.home.teamName === teamName) return game.home.colors
    if (game.away.teamName === teamName) return game.away.colors
    return "Team not found"
}

function teamNames() {
    return [game.home.teamName, game.away.teamName]
}

function playerNumbers(teamName) {
    const team = game.home.teamName === teamName ? game.home : game.away.teamName === teamName ? game.away : null
    return team ? Object.values(team.players).map(player => player.number) : "Team not found"
}

function mostPointsScored() {
    let maxPlayer = ""
    let maxPoints = 0
    for (let [name, stats] of Object.entries(allPlayers())) {
        if (stats.points > maxPoints) {
            maxPoints = stats.points
            maxPlayer = name
        }
    }
    return maxPlayer
}

function winningTeam() {
    const homePoints = Object.values(game.home.players).reduce((sum, p) => sum + p.points, 0)
    const awayPoints = Object.values(game.away.players).reduce((sum, p) => sum + p.points, 0)
    return homePoints > awayPoints ? game.home.teamName : game.away.teamName
}

function playerWithLongestName() {
    return Object.keys(allPlayers()).reduce((longest, player) => (player.length > longest.length ? player : longest), "")
}

console.log("Team Names:", teamNames())
console.log("Alan Anderson's Stats:", playerStats("Alan Anderson"))
console.log("Most Points Scored:", mostPointsScored())
console.log("Winning Team:", winningTeam())
console.log("Player with Longest Name:", playerWithLongestName())