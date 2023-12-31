
import styles from './ExamStatus.module.css'; 

interface Question {
    id: number;
    questionText: string;
}

interface ExamStatusProps {
    questions: Question[];
    answers: { [key: number]: string };
    setCurrentQuestionIndex: (index: number) => void;
}

const ExamStatus: React.FC<ExamStatusProps> = ({ questions, answers, setCurrentQuestionIndex }) => {
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
