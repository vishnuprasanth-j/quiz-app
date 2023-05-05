import './QuizDetailScreen.scss';
import { useState, useContext, useRef, useEffect } from 'react';
import { GameStateContext } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faClock, faFile, faQuestion } from '@fortawesome/free-solid-svg-icons'

const QuizDetailScreen = () => {
    const { gameState, score, setGameState } = useContext(GameStateContext);
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef(null)

    const handleStartQuiz = () => {
        setShowModal(showModal => !showModal);
    };

    const handleStartQuizFromModal = () => {
        setGameState('playing');
        setShowModal(false);
    };



    return (
        <div className={`quiz-detail-screen ${showModal == true ? "modal" : ""}`} >
            <div className={`quiz-detail-screen__title ${showModal == true ? "modal" : ""}`}>
                <h1>Quizzzzzz</h1>
            </div>
            <img src='/bird.png' className={`bird-img ${showModal == true ? "modal" : ""}`}></img>
            <div className="quiz-detail-screen__description">
                <div className="description1">
                    <p className="heading1">
                        The Daily Quiz
                    </p>
                    <p className="content1">
                        Are you a true fan of Bring Me The Horizon? Test your knowledge of the band with this quiz on their history and discography.
                    </p>
                </div>
                <div className="description2">
                    <p className="heading2">
                        The Quiz includes
                    </p>
                    <p className="content2">
                        <ul style={{ listStyleType: 'none' }}>
                            <li><FontAwesomeIcon icon={faQuestion} /><span style={{ marginLeft: '20px' }}>5 questions</span></li>
                            <li><FontAwesomeIcon icon={faClock} /><span style={{ marginLeft: '14px' }}>1 minute</span></li>
                            <li><FontAwesomeIcon icon={faFile} /><span style={{ marginLeft: '18px' }}>1 attempt</span></li>
                        </ul>
                    </p>
                </div>
            </div>


            <button className="quiz-detail-screen__button" onClick={handleStartQuiz}>
                Take Quiz
            </button>

            {showModal && (
                <div className={`quiz-modal ${showModal == true ? "open" : ""}`} ref={modalRef}>
                    <div className="quiz-modal__title">
                        <text>Quiz Information</text>
                    </div>

                    <div className='quiz-modal__text'>
                        <ul style={{ listStyleType: 'none' }}>
                            <li>
                                <span><FontAwesomeIcon icon={faQuestion} />5 questions</span>
                                <small>Keep in mind it is a time-bound quiz</small>
                            </li>
                            <li>
                                <span><FontAwesomeIcon icon={faClock} />1 minute</span>
                                <small>I believe you can ace it</small>
                            </li>

                        </ul>
                    </div>

                    <div className='quiz-modal__button-grp'>
                        <button onClick={handleStartQuizFromModal}>
                            Start Quiz
                        </button>
                        <button onClick={() => setShowModal(showModal => !showModal)}>
                            <FontAwesomeIcon icon={faClose} />
                        </button>
                    </div>

                </div>
            )}
        </div>
    );
};

export default QuizDetailScreen;
