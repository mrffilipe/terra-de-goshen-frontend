import styles from './styles.module.css'

type Props = {
    value: string,
    onChange?: (event: any) => void | undefined
}

const ProductName = (props: Props) => {
    return (
        <h1
            className={styles.product_name}
            contentEditable={props.onChange ? true : false}
            onBlur={props.onChange}
            suppressContentEditableWarning={true}>
            {
                props.value ? props.value : 'Digite o nome do produto'
            }
        </h1>
    )
}

export default ProductName