import React from "react";
import Dice from "./Dice";
import '../styles/Board.css'

function Board({ name, color, gameHistory }) {
  const num = gameHistory[gameHistory.length - 1] || 1; // 가장 최근 값
  const sum = gameHistory.reduce((sum, i) => sum + i, 0); // 총합 계산

  return (
    <div>
      <h2>{name}</h2>
      <Dice color={color} num={num} />
      <h3>총점</h3>
      <p>{sum}</p>
      <h3>기록</h3>
      <p>{gameHistory.join(", ")}</p>
    </div>
  );
}

export default Board;
