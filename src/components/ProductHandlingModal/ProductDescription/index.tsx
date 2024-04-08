import styles from './styles.module.css'

type Props = {
    value: string,
    onChange?: (event: any) => void | undefined
}

const ProductDescription = (props: Props) => {
    return (
        <p
            className={styles.product_description}
            contentEditable={props.onChange ? true : false}
            onBlur={props.onChange}
            suppressContentEditableWarning={true}>
            {
                props.value ? props.value : 'Digite a descrição do produto'
            }
        </p>
    )
}

export default ProductDescription