import React from 'react';
import styles from './StudyPlan.module.css';

interface StudyPlanProps {
    examDate: Date;
    dailyStudyHours: number;
    topics: string[];
}

const StudyPlan: React.FC<StudyPlanProps> = ({ examDate, dailyStudyHours, topics }) => {
    return (
        <div className={styles.studyPlanContainer}>
            <h2 className={styles.studyPlanHeader}>Plan de Estudios para tu Oposición</h2>
            <p className={styles.studyPlanInfo}>
                Fecha del Examen: <span className={styles.important}>{examDate.toLocaleDateString()}</span><br />
                Horas de estudio diarias: <span className={styles.important}>{dailyStudyHours}</span>
            </p>

            <ul className={styles.studyPlanList}>
                {topics.map((topic, index) => (
                    <li key={index} className={styles.studyPlanListItem}>
                        <strong>Semana {index + 1}:</strong> Estudiar {topic}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudyPlan;
