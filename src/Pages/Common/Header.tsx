import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/logo.png';

const Header: React.FC = () => {

    const getNavLinkClass = (isActive: Boolean) => {
        return isActive ? `${styles.navItem} ${styles.activeNavItem}` : styles.navItem;
    };

    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo" className={`${styles.navItem} ${styles.logo}`}/>
            <nav className={styles.navbar}>
                <NavLink to="/" className={({isActive}) => getNavLinkClass(isActive)}>Inicio</NavLink>
                <NavLink to="/guia" className={({isActive}) => getNavLinkClass(isActive)}>Guía de Estudio</NavLink>
                <NavLink to="/examen" className={({isActive}) => getNavLinkClass(isActive)}>Examen</NavLink>
            </nav>
        </header>
    );
};

export default Header;
