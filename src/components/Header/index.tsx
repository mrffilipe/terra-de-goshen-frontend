import styles from "./styles.module.css";

import { useState } from "react";

import LogoSvg from "../../assets/svg/logo.svg";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);

        if (!isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={LogoSvg} alt="Logo" />
                </div>
                <button className={styles.menu_button} onClick={toggleMenu}>
                    ☰
                </button>
                <div className={`${styles.overlay} ${isMenuOpen ? styles.visible : ''}`} onClick={toggleMenu}></div>
                <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
                    <button className={styles.close_button} onClick={toggleMenu}>X</button>
                    <ul className={styles.menu_list}>
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Item 1</a></li>
                        <li><a href="#">Item 2</a></li>
                        <li><a href="#">Item 3</a></li>
                        <li><a href="#">Item 4</a></li>
                        <li><a href="#">Item 5</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;