import PaymentMethod from '../../Models/Enums/PaymentMethod';

import { getPaymentMethodName } from '../../utils/enumerationUtils';

type Props = {
    value: PaymentMethod | undefined;
    onChange: (event: number) => void;
}

const SelectPaymentMethodInput = (props: Props) => {
    return (
        <select
            value={props.value}
            onChange={e => props.onChange(parseInt(e.target.value))}
        >
            <option value={0}>{getPaymentMethodName(PaymentMethod.CREDIT_CARD)}</option>
            <option value={1}>{getPaymentMethodName(PaymentMethod.DEBIT_CARD)}</option>
            <option value={2}>{getPaymentMethodName(PaymentMethod.PIX)}</option>
            <option value={3}>{getPaymentMethodName(PaymentMethod.PROMISSORY_NOTE)}</option>
            <option value={4}>{getPaymentMethodName(PaymentMethod.CASH)}</option>
            <option value={5}>{getPaymentMethodName(PaymentMethod.OTHER)}</option>
        </select>
    );
};

export default SelectPaymentMethodInput;