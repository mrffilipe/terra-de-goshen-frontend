import styles from "./styles.module.css";

import { useState } from "react";
import { Link } from "react-router-dom";

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
                        <li>
                            <Link to="/">
                                Catálogo
                            </Link>
                        </li>
                        <li>
                            <Link to="/auth">
                                Login
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;