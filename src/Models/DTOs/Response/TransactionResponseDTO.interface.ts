import TransactionType from "../../Enums/TransactionType";
import PaymentMethod from "../../Enums/PaymentMethod";

interface TransactionResponseDTO extends BaseEntity {
    amount: number;
    transactionType: TransactionType;
    paymentMethod: PaymentMethod;
};

export default TransactionResponseDTO;