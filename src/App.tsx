import { useState } from "react";
import './App.scss';
import QuizDetailScreen from './components/QuizDetailScreen';
import Result from "./components/Result";
import Quiz from "./components/Quiz";
import { createContext} from "react";

interface GameStateContextProps {
  gameState: string;
  setGameState: React.Dispatch<React.SetStateAction<string>>;
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  timer:number;
  setTimer:React.Dispatch<React.SetStateAction<number>>;
}

export const GameStateContext = createContext<GameStateContextProps>({
  gameState: "",
  setGameState: () => {},
  userName: "",
  setUserName: () => {},
  score: 0,
  setScore: () => {},
  timer:60,
  setTimer:()=>{}
});


function App() {
  const [gameState, setGameState] = useState<string>("home");
  const [userName, setUserName] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [timer, setTimer] = useState<number>(60);
  return (
    <div className="App">
           
           <GameStateContext.Provider
            value={{
              gameState,
              setGameState,
              userName,
              setUserName,
              score,
              setScore,
              timer,
              setTimer
            }}
           >
        {gameState === "home" && <QuizDetailScreen />}
        {gameState === "playing" && <Quiz/>}
        {gameState === "finished" && <Result />}
           </GameStateContext.Provider>
    </div>
  );
}

export default App;
