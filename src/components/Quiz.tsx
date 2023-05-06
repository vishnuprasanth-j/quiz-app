
import { Questions } from "../helpers/Questions";
import { useState, useContext, useEffect } from "react";
import { GameStateContext } from "../App";
import './Quiz.scss'

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [optionChosen, setOptionChosen] = useState<string>("");
  

  const { score, setScore, setGameState,timer,setTimer } = useContext(GameStateContext);

  const chooseOption = (option: string) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setOptionChosen("");
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

  useEffect(() => {
    const timeLeft = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    if (timer === 0) {
      clearInterval(timeLeft);
      finishQuiz();
    }

    return () => clearInterval(timeLeft);
  }, [timer, finishQuiz]);

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="quiz-header__timer">{timer}</div>
        <div className="quiz-header__question">{`Question ${currentQuestion + 1} of ${Questions.length}`}</div>
      </div>
      <div className="quiz-body">
        <h1 className="quiz-body__question">{Questions[currentQuestion].prompt}</h1>
        <div className="quiz-body__options">
          <button
            className={`quiz-body__option ${optionChosen === "optionA" ? "selected" : ""}`}
            onClick={() => chooseOption("optionA")}
          >
            {Questions[currentQuestion].optionA}
          </button>
          <button
            className={`quiz-body__option ${optionChosen === "optionB" ? "selected" : ""}`}
            onClick={() => chooseOption("optionB")}
          >
            {Questions[currentQuestion].optionB}
          </button>
          <button
            className={`quiz-body__option ${optionChosen === "optionC" ? "selected" : ""}`}
            onClick={() => chooseOption("optionC")}
          >
            {Questions[currentQuestion].optionC}
          </button>
          <button
            className={`quiz-body__option ${optionChosen === "optionD" ? "selected" : ""}`}
            onClick={() => chooseOption("optionD")}
          >
            {Questions[currentQuestion].optionD}
          </button>
        </div>
        {currentQuestion === Questions.length - 1 ? (
          <button className="quiz-body__button" onClick={finishQuiz}>
            Finish Quiz
          </button>
        ) : (
          <button className="quiz-body__button" onClick={nextQuestion}>
            Next Question
          </button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
