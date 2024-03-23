import styles from './styles.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>Terra de Goshen</h1>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.menu}>
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