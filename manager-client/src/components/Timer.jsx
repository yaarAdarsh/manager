import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

function Timer() {
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [isStart, setStart] = useState(false);

  function handleStartClick() {
    setStart(true);
  }

  function handleStopClick() {
    setStart(false);
  }

  function handleResetClick() {
    setTimeLeft(30 * 60);
  }

  useEffect(() => {
    if (timeLeft <= 0) {
      console.log("Time's up!");
      return;
    }
    const intervalId =
      isStart &&
      setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
  }, [timeLeft, isStart]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const val = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return (
    <>
      <div className="timer">
        <h1>{val}</h1>
        <Button
          variant="outlined"
          size="large"
          className="timerButton"
          onClick={handleStartClick}
        >
          Start
        </Button>
        <Button
          variant="outlined"
          size="large"
          className="timerButton"
          onClick={handleStopClick}
        >
          Stop
        </Button>
        <Button
          size="large"
          variant="outlined"
          color="error"
          onClick={handleResetClick}
        >
          Reset
        </Button>
      </div>
    </>
  );
}

export default Timer;
