import React, { useState } from 'react';
import Board from './board';
import './app.css';

const initialBoard = [
  [5, 3, null, null, 7, null, null, null, null],
  [6, null, null, 1, 9, 5, null, null, null],
  [null, 9, 8, null, null, null, null, 6, null],
  [8, null, null, null, 6, null, null, null, 3],
  [4, null, null, 8, null, 3, null, null, 1],
  [7, null, null, null, 2, null, null, null, 6],
  [null, 6, null, null, null, null, 2, 8, null],
  [null, null, null, 4, 1, 9, null, null, 5],
  [null, null, null, null, 8, null, null, 7, 9]
];

const isValidSudoku = (board) => {
  const isUnique = (arr) => {
    const nums = arr.filter(n => n !== 0);
    return new Set(nums).size === nums.length;
  };

  // Ellenőrzi a sorokat és oszlopokat
  for (let i = 0; i < 9; i++) {
    const row = board[i];
    const col = board.map(row => row[i]);
    if (!isUnique(row) || !isUnique(col)) return false;
  }

  // Ellenőrzi a 3x3-as blokkokat
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
    const newBoard = board.map((r, rIdx) =>
      r.map((cell, cIdx) => (rIdx === row && cIdx === col ? parseInt(value) || 0 : cell))
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
