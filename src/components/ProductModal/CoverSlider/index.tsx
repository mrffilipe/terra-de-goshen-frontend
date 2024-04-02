import styles from './styles.module.css'

const CoverSlider = () => {
    return (
        <div className={styles.cover_slider}>
            <span className={styles.selected}></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default CoverSlider