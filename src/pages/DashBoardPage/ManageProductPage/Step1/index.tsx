import styles from './styles.module.css';

type ProductDetails = {
    name: string;
    description: string;
    price: number;
    backgroundText: string;
    quantityInStock: number;
};

type Props = {
    productDetails: ProductDetails;
    onChange: (event: ProductDetails) => void;
};

const Step1 = (props: Props) => {
    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange({ ...props.productDetails, name: event.target.value });
    };

    const handleChangeDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.onChange({ ...props.productDetails, description: event.target.value });
    };

    const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange({ ...props.productDetails, price: Number.parseFloat(event.target.value) });
    };

    const handleChangeBackgroundText = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange({ ...props.productDetails, backgroundText: event.target.value });
    };

    const handleChangeQuantityInStock = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange({ ...props.productDetails, quantityInStock: Number.parseInt(event.target.value) });
    };

    return (
        <div className={styles.step1}>
            <label>
                Nome do produto
                <input
                    type="text"
                    name="name"
                    value={props.productDetails.name}
                    onChange={handleChangeName}
                    placeholder="Ex: Vestido preto com detalhes dourados"
                />
            </label>
            <label>
                Descrição (Máx. 255 caracteres)
                <textarea
                    name="description"
                    value={props.productDetails.description}
                    onChange={handleChangeDescription}
                    placeholder="Ex: Descrição"
                />
            </label>
            <label>
                Preço (R$)
                <input
                    type="number"
                    name="price"
                    value={props.productDetails.price}
                    onChange={handleChangePrice}
                    placeholder="Ex: 129.90"
                />
            </label>
            <label>
                Texto de fundo (Máx. 8 caracteres)
                <input
                    type="text"
                    name="backgroundText"
                    value={props.productDetails.backgroundText}
                    onChange={handleChangeBackgroundText}
                    placeholder="Ex: Goshen"
                />
            </label>
            <label>
                Estoque (Un)
                <input
                    type="number"
                    name="quantityInStock"
                    value={props.productDetails.quantityInStock}
                    onChange={handleChangeQuantityInStock}
                    placeholder="Ex: 5"
                />
            </label>
        </div>
    );
};

export default Step1;