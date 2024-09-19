import PaymentMethod from '../../Models/Enums/PaymentMethod';

type Props = {
    value: PaymentMethod | undefined;
    onChange: (event: number) => void;
}

const SelectPaymentMethodInput = (props: Props) => {
    return (
        <select
            value={props.value}
            onChange={e => props.onChange(parseInt(e.target.value, 10))}
        >
            <option value={0}>Cartão de crédito</option>
            <option value={1}>Cartão de débito</option>
            <option value={2}>PIX</option>
            <option value={3}>Nota promissória</option>
            <option value={4}>Dinheiro</option>
            <option value={5}>Outro</option>
        </select>
    );
};

export default SelectPaymentMethodInput;