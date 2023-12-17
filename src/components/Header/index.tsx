import styles from './styles.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <span>Terra de Goshen</span>
            </div>
        </header>
    )
}

export default Header