import React from 'react';
import styles from './Exam.module.css'; 
import { Question } from '../../types';

interface ExamProps {
    questions: Question[];
    currentQuestionIndex: number;
    answers: { [key: number]: string };
    handleAnswerChange: (questionId: number, option: string) => void;
    setCurrentQuestionIndex: (index: number) => void;
}
const Exam: React.FC<ExamProps> = ({
    questions,
    currentQuestionIndex,
    answers,
    handleAnswerChange,
    setCurrentQuestionIndex
}) => {
    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const prevQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    return (
            <div className={styles.container}>
                <h2 className={styles.title}>Examen Tipo Test</h2>
                <div className={styles.questionContainer}>
                    <div className={styles.question}>{questions[currentQuestionIndex].questionText}</div>
                    {questions[currentQuestionIndex].options.map((option, index) => (
                        <div className={`${styles.option} ${styles['option' + (index + 1)]}`} key={index}>
                            <input
                                type="radio"
                                name="answer"
                                checked={answers[questions[currentQuestionIndex].id] === option}
                                onChange={() => handleAnswerChange(questions[currentQuestionIndex].id, option)}
                                />
                            {option}
                        </div>
                    ))}
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.button} onClick={prevQuestion} disabled={currentQuestionIndex === 0}>Anterior</button>
                    <button className={styles.button} onClick={nextQuestion} disabled={currentQuestionIndex === questions.length - 1}>Siguiente</button>
                </div>
            </div>
    );
};

export default Exam;
