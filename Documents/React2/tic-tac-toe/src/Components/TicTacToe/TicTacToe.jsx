import React, { useState } from "react";
import "./TicTacToe.css";
import circle from "../Assets/circle.png";
import cross from "../Assets/cross.png";

const TicTacToe = () => {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);

  const toggle = (index) => {
    if (lock || data[index] !== "") {
      return;
    }

    const newData = [...data];
    newData[index] = count % 2 === 0 ? "X" : "O";
    setData(newData);
    setCount(count + 1);

    checkwin(newData); 
  };

  const checkwin = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        won(board[a]); // Pass the winner ("X" or "O") to the `won` function
        return;
      }
    }
  };

  const won = (winner) => {
    alert(`${winner} has won the game!`);
    setLock(true);
  };

  const resetGame = () => {
    setData(["", "", "", "", "", "", "", "", ""]);
    setCount(0);
    setLock(false);
  };

  return (
    <div className="container">
      <h1 className="title">Tic Tac Toe Game</h1>

      <div className="board">
        {[0, 1, 2].map((row) => (
          <div className={`row${row + 1}`} key={row}>
            {[0, 1, 2].map((col) => {
              const index = row * 3 + col;
              return (
                <div
                  key={index}
                  className="boxes"
                  onClick={() => toggle(index)}
                >
                  {data[index] === "X" && <img src={cross} alt="X" />}
                  {data[index] === "O" && <img src={circle} alt="O" />}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <button className="reset" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
