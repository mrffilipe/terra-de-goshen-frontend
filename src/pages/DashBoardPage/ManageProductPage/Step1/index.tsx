import styles from './styles.module.css';

type Props = {
    product: ProductCreateDTO | ProductResponseDTO | ProductUpdateDTO;
    onChange: (e: { name: string, description: string, price: number, backgroundText: string, quantityInStock: number }) => void;
};

const Step1 = (props: Props) => {
    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange({ ...props.product, name: event.target.value });
    };

    const handleChangeDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.onChange({ ...props.product, description: event.target.value });
    };

    const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange({ ...props.product, price: Number.parseFloat(event.target.value) });
    };

    const handleChangeBackgroundText = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange({ ...props.product, backgroundText: event.target.value });
    };

    const handleChangeQuantityInStock = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange({ ...props.product, quantityInStock: Number.parseInt(event.target.value) });
    };

    return (
        <div className={styles.step1}>
            <label>
                Nome do produto
                <input
                    type="text"
                    name="name"
                    value={props.product.name}
                    onChange={handleChangeName}
                    placeholder="Ex: Vestido preto com detalhes dourados"
                />
            </label>
            <label>
                Descrição (Máx. 255 caracteres)
                <textarea
                    name="description"
                    value={props.product.description}
                    onChange={handleChangeDescription}
                    placeholder="Ex: Descrição"
                />
            </label>
            <label>
                Preço (R$)
                <input
                    type="number"
                    name="price"
                    value={props.product.price}
                    onChange={handleChangePrice}
                    placeholder="Ex: 129.90"
                />
            </label>
            <label>
                Texto de fundo (Máx. 8 caracteres)
                <input
                    type="text"
                    name="backgroundText"
                    value={props.product.price}
                    onChange={handleChangeBackgroundText}
                    placeholder="Ex: Goshen"
                />
            </label>
            <label>
                Estoque (Un)
                <input
                    type="number"
                    name="quantityInStock"
                    value={props.product.quantityInStock}
                    onChange={handleChangeQuantityInStock}
                    placeholder="Ex: 5"
                />
            </label>
        </div>
    );
};

export default Step1;