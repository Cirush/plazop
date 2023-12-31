import React from 'react';
import styles from './LandingPage.module.css';
import Layout from '../Common/Layout';

const LandingPage: React.FC = () => {
    return (
        <Layout>
            <div className={styles.landingPage}>
                <section className={styles.features}>
                    <h1>¡Prepárate para el Éxito en tus Oposiciones!</h1>
                    <h3><strong>Plataforma de Preparación para Oposiciones Online</strong></h3>
                    <p>¿Buscando <strong>cómo preparar oposiciones online</strong>? Descubre nuestro sistema único que utiliza la Inteligencia Artificial para ofrecerte un plan de estudio diario, guiándote sobre qué temario abordar cada día, garantizando que llegues a tu <strong>examen de oposición</strong> totalmente preparado.</p>
                    <p><strong>Exámenes Personalizados para Oposiciones: Practica de Forma Eficiente</strong></p>
                    <p>Evita perder tiempo con preguntas que ya dominas. Gracias a nuestra tecnología basada en Inteligencia Artificial, generamos <strong>test de oposiciones personalizados</strong>, adaptándose a tu nivel y necesidades, asegurando que refuerces tus puntos débiles y maximices tu rendimiento.</p>
                    <p><strong>¡Oferta Especial de Lanzamiento para Futuros Opositores!</strong></p>
                    <p>Estamos a punto de revolucionar la <strong>preparación online para oposiciones</strong>. ¡Únete antes que los demás! Los primeros 100 inscritos disfrutarán de un 90% de descuento durante su primer año. Es tu momento de destacar en las <strong>oposiciones 2023</strong>.</p>
                </section>
            </div>
        </Layout>
    );
};

export default LandingPage;


