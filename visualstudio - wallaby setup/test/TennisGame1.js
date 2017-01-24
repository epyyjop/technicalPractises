var TennisGame1 = function () {
    this.player1Name = "player1";
    this.player1Score = 0;
    this.player2Score = 0;

    this.dash = "-";

    this.score = {
        0: "Love",
        1: "Fifteen",
        2: "Thirty",
        3: "Forty"
    }

    this.scoreDraw = {
        0: "Love-All",
        1: "Fifteen-All",
        2: "Thirty-All",
        3: "Deuce"
    }
};

TennisGame1.prototype.wonPoint = function (playerName) {
    if (playerName === this.player1Name) {
        this.player1Score += 1;
    }
    else {
        this.player2Score += 1;
    }
};

function formatScoreForDraw() {

    return this.scoreDraw[this.player1Score];

}

function formatScoreForPlayerInAdvantageOrWin() {
    var scoreDifference = this.player1Score - this.player2Score;

    if (scoreDifference === 1) {
        return "Advantage player1";
    }
    if (scoreDifference === -1) {
        return "Advantage player2";
    }
    if (scoreDifference >= 2) {
        return "Win for player1";
    }
    return "Win for player2";
}

function formatScore(score) {
    var tempScore = 0;

    for (var i = 1; i < 3; i++) {
        if (i === 1) {
            tempScore = this.player1Score;
        }
        else {
            score += this.dash;
            tempScore = this.player2Score;
        }

        score += this.score[tempScore];

    }
    return score;
}
TennisGame1.prototype.getScore = function () {
    var score = "";

    if (this.player1Score === this.player2Score) {
        score = formatScoreForDraw.call(this);
    } else if (this.player1Score >= 4 || this.player2Score >= 4) {
        score = formatScoreForPlayerInAdvantageOrWin.call(this);
    } else {
        score = formatScore.call(this, score);
    }
    return score;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}