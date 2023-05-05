import { GameStateContext } from '../App';
import { useContext } from 'react';
import { Questions } from '../helpers/Questions';
import Confetti from '../helpers/Confetti';
import './Result.scss'

const Result = () => {
    const { score, setScore, setGameState, userName } = useContext(
        GameStateContext
    );

    const restartQuiz = () => {
        setScore(0);
        setGameState("home");
    };
    return (
        <div className="EndScreen">
            <h1 className='result-title'>RESULT</h1>
            <Confetti />
            <div className="EndScreen-bd" >
                <h1>Quiz Finished</h1>
                <h3>Score</h3>
                <h1 className={`color ${score===5&&'green'}  ${score<=26&&'red'}  ${score>2&&'yellow'}`}>
                    {score} / {Questions.length}
                </h1>
                      {score<=2&&<p>Maybe stick to Justin Bieber quizzes next time, mate</p>}     
                      {score>2&&<p>Not bad, but you might want to spend a little more time jamming to BMTH before retaking the quiz.</p> }
                      {score===5&&<p>Looks like you know your BMTH pretty well, nice one!</p>}  
                <button onClick={restartQuiz}>Go to home</button>
            </div>
        </div>
    );
}

export default Result






