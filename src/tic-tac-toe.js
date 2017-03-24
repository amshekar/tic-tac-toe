class TicTacToe {constructor() {
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
 
    changePlayer() {
        this.currentPlayerSymbol = this.getCurrentPlayerSymbol() === 'x' ? 'o' : 'x';
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
 
    addScore(row, col, point) {
        this.scoreGrid[row][0] += point; // where point is either +1 or -1
        this.scoreGrid[this.gridSize + col][0] += point;
        if (row == col) {
            this.scoreGrid[2 * this.gridSize][0] += point;
        }
        if (this.gridSize - 1 - col == row) {
            this.scoreGrid[2 * this.gridSize + 1][0] += point;
        }
    }
 
    static createMatrix(rows, cols, initialValue) {
        let rowArr = [];
        for (let i = 0; i < rows; i++) {
            let colArr = [];
            for (let j = 0; j < cols; j++) {
                colArr[j] = initialValue;
            }
            rowArr[i] = colArr;
        }
        return rowArr;
    }
}

module.exports = TicTacToe;
