import React, { useState } from 'react';
import styles from './Step.module.css';

interface IStepsProps {
    question: {
        id: number;
        questionText: string;
        options: string[];
    };
    onAnswerChange: (questionId: number, answer: string) => void;
    onNext?: () => void;
    onPrev?: () => void;
}

const Step: React.FC<IStepsProps> = ({ question, onAnswerChange, onNext, onPrev }) => {

    const [selectedOption, setSelectedOption] = useState<string>('');
    
    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        onAnswerChange(question.id, option);
    };

    return (
        <div className={styles.stepContainer}>
            <h2 className={styles.stepTitle}>{question.questionText}</h2>
            <div className={styles.stepContent}>
                {question.options.map((option, index) => (
                    <button 
                        key={index} 
                        className={`${styles.button} ${option === selectedOption ? styles.selected : ''}`} 
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
            {onPrev && <button className={`${styles.button} ${styles.secondary}`} onClick={onPrev}>Atrás</button>}
            {onNext && <button className={`${styles.button} ${styles.secondary}`} onClick={onNext}>Siguiente</button>}
        </div>
    );
};

export default Step;
