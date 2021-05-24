'use strict';

const chessBoard = {
    size: 8,

    evenColour: 'black',
    oddColour: 'white',
    cellElements: [],
    alph: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],

    getColour(i, j) {
        let result, colorBox;
        if (j % 2 != 0) {
            i % 2 == 0 ?
                colorBox = this.evenColour :
                colorBox = this.oddColour;
        } else {
            i % 2 == 0 ?
                colorBox = this.oddColour :
                colorBox = this.evenColour;
        }
        return colorBox;
    },

    initBoard() {
        this.containerElement = document.getElementById('chessBoard');
        this.containerElement.innerHTML = '';
        this.cellElements = [];

        for (let row = 0, j = 1; row <= this.size; row++, j++) {
            const trElem = document.createElement('tr');
            this.containerElement.appendChild(trElem);

            for (let col = 0, i = 1; col <= this.size; col++, i++) {
                const cell = document.createElement('td');
                if (j == this.size + 1) {
                    cell.style.backgroundColor = '#ccc';
                    cell.innerHTML = this.alph[i - 1];
                } else {
                    cell.style.backgroundColor = this.getColour(i, j);
                }
                trElem.appendChild(cell);

                this.cellElements.push(cell);
            }
            trElem.lastChild.innerHTML = (this.size - j + 1);
            trElem.lastChild.style.backgroundColor = '#ccc';
        }
    }


}


chessBoard.initBoard();
