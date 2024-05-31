import styles from './styles.module.css';

type Props = {
    product: {
        name: string;
        description: string;
        price: number;
        quantityInStock: number;
    };
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const Step1 = (props: Props) => {
    return (
        <div className={styles.step1}>
            <input
                type="text"
                name="name"
                value={props.product.name}
                onChange={props.handleChange}
                placeholder="Nome do produto"
            />
            <textarea
                name="description"
                value={props.product.description}
                onChange={props.handleChange}
                placeholder="Descrição"
            />
            <input
                type="number"
                name="price"
                value={props.product.price}
                onChange={props.handleChange}
                placeholder="Preço"
            />
            <input
                type="number"
                name="quantityInStock"
                value={props.product.quantityInStock}
                onChange={props.handleChange}
                placeholder="Quantidade em estoque"
            />
        </div>
    );
};

export default Step1;