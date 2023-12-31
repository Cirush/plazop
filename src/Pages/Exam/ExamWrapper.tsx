import React, { useEffect, useState } from 'react';
import Exam from './Exam';
import ExamStatus from './Components/ExamStatus';
import Layout from '../Common/Layout';
import styles from './ExamWrapper.module.css'; 

interface Question {
    id: number;
    questionText: string;
    options: string[];
}

const ExamWrapper: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<{ [key: number]: string }>({});
    const [examStarted, setExamStarted] = useState(false);
    const [examFinished, setExamFinished] = useState(false);

    const questions: Question[] = [
        { id: 1, questionText: "Pregunta 1", options: ["Opción A", "Opción B", "Opción C", "Opción D"] },
        { id: 2, questionText: "Pregunta 2", options: ["Opción A", "Opción B", "Opción C", "Opción D"] },
        { id: 3, questionText: "Pregunta 3", options: ["Opción A", "Opción B", "Opción C", "Opción D"] },
        { id: 4, questionText: "Pregunta 4", options: ["Opción A", "Opción B", "Opción C", "Opción D"] },
        { id: 5, questionText: "Pregunta 5", options: ["Opción A", "Opción B", "Opción C", "Opción D"] },
    ];

    const startExam = () => {
        setExamStarted(true);
    };

    const finishExam = () => {
        setExamFinished(true);
    };

    const [timer, setTimer] = useState(0);

    const resetComponent = () => {
        setTimer(0);
        setCurrentQuestionIndex(0);
        setAnswers({});
        setExamStarted(false);
        setExamFinished(false);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    
    if (!examStarted) {
        return (
            <Layout>    
                <div className={styles.selectionContainer}>
                    <h2>Elige tu examen</h2>
                    <p>Instrucciones</p>
                    <p>Vas a realizar un examen tipo test, tendrás que seleccionar una respuesta entre 4</p>
                    <button className={styles.startButton} onClick={startExam}>Comenzar Examen</button>
                </div>
            </Layout>
        );
    }

    if (examFinished) {
        return (
            <Layout>
                <div className={styles.selectionContainer}>
                    <h2>Examen Finalizado</h2>
                    <p>Ha finalizado el examen de manera satisfactoria!</p>
                    <p>Has obtenido una puntuación de 10/10</p>
                    <p>Puede realizar otro examen</p>
                    <button className={styles.startButton} onClick={resetComponent}>Realizar otro examen</button>
                </div>
            </Layout>

        );
    }

    const handleAnswerChange = (questionId: number, option: string) => {
        setAnswers({ ...answers, [questionId]: option });
        setCurrentQuestionIndex(questionId-1);
    };

    return (
        <Layout>
            <div className={styles.wrapper}>
                <div className={styles.examContainer}>
                    <Exam 
                        questions={questions}
                        currentQuestionIndex={currentQuestionIndex}
                        answers={answers}
                        handleAnswerChange={handleAnswerChange}
                        setCurrentQuestionIndex={setCurrentQuestionIndex}
                        />
                    <button className={styles.finishButton} onClick={finishExam}>Terminar Examen</button>
                </div>
                <div className={styles.statusContainer}>
                <ExamStatus 
                    questions={questions}
                    answers={answers}
                    setCurrentQuestionIndex={setCurrentQuestionIndex}
                    />
                    <div className={styles.timer}>
                        Tiempo: {formatTime(timer)}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

export default ExamWrapper;
