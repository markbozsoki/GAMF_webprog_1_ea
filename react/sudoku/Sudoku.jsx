import React, { useState } from 'react';
import Board from './board';
import './app.css';

const initialBoard = [
  [2, 1, null, 3, null, 8, null, 4, null],
  [null, null, null, null, null, null, null, 8, null],
  [null, null, null, null, 7, null, 2, 1, 9],
  [4, 2, null, null, 5, null, 3, null, null],
  [3, null, 8, null, null, null, 6, null, 5],
  [null, null, 9, null, 6, null, null, 2, 8],
  [8, 9, 5, null, 3, null, null, null, null],
  [null, 4, null, null, null, null, null, null, null],
  [null, 3, null, 9, null, 4, null, 5, 7]
];

const isValidSudoku = (board) => {
  const isUnique = (arr) => {
    const nums = arr.filter(n => n !== 0);
    return new Set(nums).size === nums.length;
  };

  for (let i = 0; i < 9; i++) {
    const row = board[i];
    const col = board.map(row => row[i]);
    if (!isUnique(row) || !isUnique(col)) return false;
  }

  for (let row = 0; row < 9; row += 3) {
    for (let col = 0; col < 9; col += 3) {
      let box = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          box.push(board[row + i][col + j]);
        }
      }
      if (!isUnique(box)) return false;
    }
  }
  return true;
};

const Sudoku = () => {
  const [board, setBoard] = useState(initialBoard);

  const handleCellChange = (row, col, value) => {
    const num = parseInt(value);


    if (!Number.isInteger(num) || num < 1 || num > 9) {
      return;
    }

    const newBoard = board.map((r, rIdx) =>
      r.map((cell, cIdx) => (rIdx === row && cIdx === col ? num : cell))
    );
    setBoard(newBoard);
  };

  const handleCheckSolution = () => {
    if (isValidSudoku(board)) {
      alert('Gratulálok, megfejtetted a feladványt!');
    } else {
      alert('A megoldás hiányos és/vagy hibás...');
    }
  };

  return (
    <div className="sudoku">
      <h1>Sudoku</h1>
      <Board board={board} onCellChange={handleCellChange} />
      <button onClick={handleCheckSolution}>Megoldás ellenőrzése</button>
    </div>
  );
};

export default Sudoku;
