import styles from './styles.module.css'

type Props = {
    value: string
    editable?: boolean
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const ProductName = (props: Props) => {
    return (
        <div className={styles.product_name}>
            {
                !props.editable ? (
                    <h1>{props.value}</h1>
                ) : (
                    <input
                        type="text"
                        value={props.value}
                        placeholder='Digite o nome do produto...'
                        onChange={props.onChange} />
                )
            }
        </div>
    )
}

export default ProductName