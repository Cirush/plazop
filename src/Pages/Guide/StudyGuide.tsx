import React, { useState } from 'react';
import Layout from '../Common/Layout';
import StudyGuideWizard from './Components/StudyGuideWizard';
import styles from './StudyGuide.module.css'

const StudyGuide: React.FC = () => {
    const [plan, setPlan] = useState<string>('');

    const generatePlan = () => {
        setPlan('Plan de estudio personalizado generado.');
    };

    return (
        <Layout>
            <div className={styles.studyGuide}>
                <h2>Herramienta Guía de Estudio</h2>
                {
                    !plan && 
                        <section className={styles.instructions}>
                            <h3>Instrucciones para la Creación del Plan de Estudio</h3>
                            <p>A continuación se le irá guiando por una serie de preguntas que ayudarán a nuestro <strong>sistema inteligente</strong> a personalizar tu plan de estudio con el contenido y los recursos adecuados.</p>
                        </section>
                }
                {!plan && <button className={styles.buttonGenerator} onClick={generatePlan}>Generar Plan de Estudio</button>}
                {plan && <StudyGuideWizard/>}
            </div>
        </Layout>
    );
};

export default StudyGuide;
