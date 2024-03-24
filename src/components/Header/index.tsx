import { useState } from 'react'
import styles from './styles.module.css'

import { Menu, Close } from '@mui/icons-material'

const Header = () => {
    const [openMenu, setOpenMenu] = useState<boolean>()

    const handleOpenMenu = (): void => {
        setOpenMenu(prev => !prev)
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>Terra de Goshen</h1>
            </div>
            <nav className={styles.nav}>
                <button className={styles.open_menu} onClick={handleOpenMenu}>
                    {
                        openMenu ?
                            <Close /> :
                            <Menu />
                    }
                </button>
                <ul className={`${styles.menu} ${openMenu ? '' : styles.hidden_menu}`}>
                    <li>
                        <a href="#">Início</a>
                    </li>
                    <li>
                        <a href="#">Produtos</a>
                    </li>
                    <li>
                        <a href="#">Categorias</a>
                    </li>
                    <li>
                        <a href="#">Promoções</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header