import styles from './styles.module.css'

type Props = {
    value: string
    editable?: boolean
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const ProductPrice = (props: Props) => {
    return (
        <div className={styles.product_price}>
            <span>
                R$
                {
                    !props.editable ? (
                        <strong>{props.value}</strong>
                    ) : (
                        <input type="number"
                            value={props.value}
                            placeholder='00'
                            onChange={props.onChange} />
                    )
                }
            </span>
        </div>
    )
}

export default ProductPrice