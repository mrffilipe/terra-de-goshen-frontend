import styles from './styles.module.css'

type Props = {
    colors: ColorRef[]
}

const ProductColorAttribute = (props: Props) => {
    console.log(props.colors)

    const listColors = props.colors.map(color => (
        <li key={color.id}>
            <span style={{ backgroundColor: color.color.value }}></span>
        </li>
    ))

    return (
        <ul className={styles.product_color_attribute}>
            {listColors}
        </ul>
    )
}

export default ProductColorAttribute