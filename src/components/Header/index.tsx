import styles from './styles.module.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Close } from '@mui/icons-material';

import Logo from '../../assets/svg/logo.svg';

const Header = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const handleOpenMenu = () => {
        setOpenMenu(prev => !prev);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to='/'>
                    <img src={Logo} alt="Logo Terra de Goshen" />
                </Link>
            </div>
            <nav className={styles.nav}>
                <button className={styles.open_menu_btn} onClick={handleOpenMenu}>
                    {
                        openMenu ?
                            <Close /> :
                            <Menu />
                    }
                </button>
                <ul className={`${styles.menu} ${openMenu ? '' : styles.hide_menu}`}>
                    <li>
                        <Link to='/'>Início</Link>
                    </li>
                    <li>
                        <Link to='/'>Produtos</Link>
                    </li>
                    <li>
                        <Link to='/'>Categorias</Link>
                    </li>
                    <li>
                        <Link to='/'>Promoções</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;