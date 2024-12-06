import React, { useState } from "react";
import Button from "./components/Button";
import Board from "./components/Board";

function App() {
  const [myGameHistory, setMyGameHistory] = useState([]); // "나"의 기록
  const [youGameHistory, setYouGameHistory] = useState([]); // "당신"의 기록

  const randomNumber = () => Math.ceil(Math.random() * 6);

  const handleRollClick = () => {
    const nextMyNum = randomNumber(); // "나"의 주사위 숫자
    const nextYouNum = randomNumber(); // "당신"의 주사위 숫자

    setMyGameHistory([...myGameHistory, nextMyNum]); // "나"의 기록 업데이트
    setYouGameHistory([...youGameHistory, nextYouNum]); // "당신"의 기록 업데이트
  };

  const handleClearClick = () => {
    setMyGameHistory([]); // "나"의 기록 초기화
    setYouGameHistory([]); // "당신"의 기록 초기화
  };

  return (
    <>
      <div className="App_container">
        <Button onClick={handleRollClick} color="blue">
          던지기
        </Button>
        <Button onClick={handleClearClick} color="red">
          처음부터
        </Button>
      </div>
      <div className="App-board">
        <Board name="나" color="blue" gameHistory={myGameHistory} />
        <Board name="당신" color="red" gameHistory={youGameHistory} />
      </div>
    </>
  );
}

export default App;


// rfce
// nnf
