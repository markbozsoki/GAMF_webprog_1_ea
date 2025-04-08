import React from 'react';
import Cell from './cell';

const Board = ({ board, onCellChange }) => {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <Cell
              key={colIndex}
              value={cell === null ? '' : cell}
              onChange={(e) => {
                const val = e.target.value;

                if (val === '') {
                  onCellChange(rowIndex, colIndex, null);
                }
                else if (/^[1-9]$/.test(val)) {
                  onCellChange(rowIndex, colIndex, val);
                }
              }}
              maxLength={1}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
