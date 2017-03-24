class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = 'x';
        this.gridSize = 3;
        this.matrix = TicTacToe.createMatrix(this.gridSize, this.gridSize, null);
        this.scoreGrid = TicTacToe.createMatrix(2 * this.gridSize + 2, 1, 0);

    }

    getCurrentPlayerSymbol() {
return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
 let currVal = this.getFieldValue(rowIndex, columnIndex);
        if (currVal != null) {
            return;
        }
        this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
        this.addScore(rowIndex, columnIndex, this.getCurrentPlayerSymbol() === 'x' ? 1 : -1);
        this.changePlayer();
    }

    isFinished() {
return this.getWinner() != null || this.isDraw();
    }

    getWinner() {
 for (let i = 0; i < this.scoreGrid.length; i++) {
            let scoreItem = this.scoreGrid[i];
            if (Math.abs(scoreItem) === this.gridSize) {
                return scoreItem > 0 ? 'x' : 'o';
            }
        }
        return null;
    }

    noMoreTurns() {
for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] == null) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
 return this.getWinner() == null && this.noMoreTurns();
    }

    getFieldValue(rowIndex, colIndex) {
return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
