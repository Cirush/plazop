
import styles from './ExamStatus.module.css'; 

const ExamStatus = ({ questions, answers, setCurrentQuestionIndex }) => {
    return (
        <div className={styles.statusContainer}>
            {questions.map((question, index) => (
                <div 
                    key={index} 
                    className={styles.statusItem}
                    onClick={() => setCurrentQuestionIndex(index)}
                >
                    Pregunta {index + 1}: {answers[question.id] ? 'Respondida' : 'No respondida'}
                </div>
            ))}
        </div>
    );
};

export default ExamStatus;
