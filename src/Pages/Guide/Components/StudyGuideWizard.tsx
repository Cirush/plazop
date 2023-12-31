import React, { useState } from 'react';
import Step from './Step';
import styles from './StudyGuideWizard.module.css';
import StudyPlan from './StudyPlan';

interface Question {
    id: number;
    questionText: string;
    options: string[];
}

const StudyGuideWizard: React.FC = () => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [answers, setAnswers] = useState<{ [key: number]: string }>({});

    const questions: Question[] = [
        { id: 1, questionText: "¿Cuál es la oposición que quieres preparar?", options: ["Correos", "Pinche de cocina", "Integración Social", "Administrativo"] },
        { id: 2, questionText: "¿Cuál es tu nivel de estudios?", options: ["Nada", "Secundaria", "Bachillerato", "Superior"] },
        { id: 3, questionText: "¿Cuántas horas vas a dedicarle al estudio al día?", options: ["2 horas", "4 horas", "6 horas", "8 horas"] },
        { id: 4, questionText: "¿Cuándo es la fecha del exámen?", options: ["En menos de 3 meses", "Entre 3 y 6 meses", "Entre 6 y 12 meses", "En más de un año"] },
    ];

    const handleAnswerChange = (questionId: number, answer: string) => {
        setAnswers({ ...answers, [questionId]: answer });
    };

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };
    

    if (currentStep < questions.length) {
        
        return (
            <div className={styles.wizardContainer}>
                <Step 
                    question={questions[currentStep]}
                    onAnswerChange={handleAnswerChange} 
                    onNext={nextStep}
                    onPrev={currentStep > 0 ? prevStep : undefined}
                />
            </div>
        );
    }

    const examDate = new Date('2024-12-01');
    const dailyStudyHours = 4;
    const topics = ["Tema 1", "Tema 2", "Tema 3", "Tema 4"];
    return(
        <>
            <div>Enhorabuena, acaba de crear su plan de estudios presonalizado!</div>
            <StudyPlan 
                examDate={examDate} 
                dailyStudyHours={dailyStudyHours} 
                topics={topics} 
            />
        </>
    );
};

export default StudyGuideWizard;
