import styles from './styles.module.css'

type Props = {
    value: string,
    onChange?: (event: any) => void | undefined
}

const ProductPrice = (props: Props) => {
    return (
        <span className={styles.product_price}>
            R$ <strong
                contentEditable={props.onChange ? true : false}
                onBlur={props.onChange}
                suppressContentEditableWarning={true}>
                {
                    props.value ? props.value : '00,00'
                }
            </strong>
        </span>
    )
}

export default ProductPrice