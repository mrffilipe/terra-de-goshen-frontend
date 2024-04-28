import styles from './styles.module.css'

type Props = {
    value: string
    editable?: boolean
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const ProductDescription = (props: Props) => {
    return (
        <div className={styles.product_description}>
            {
                !props.editable ? (
                    <p>{props.value}</p>
                ) : (
                    <textarea
                        value={props.value}
                        placeholder='Digite a descrição do produto...'
                        rows={5}
                        maxLength={255}
                        onChange={props.onChange} />
                )
            }
        </div>
    )
}

export default ProductDescription