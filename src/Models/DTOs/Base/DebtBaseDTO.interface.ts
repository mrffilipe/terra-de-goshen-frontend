import PaymentMethod from "../../Enums/PaymentMethod";

interface DebtBaseDTO {
    totalAmount: number;
    dueDate: string;
    installmentCount: number;
    paymentMethod: PaymentMethod;
    initialPayment: number;
};

export default DebtBaseDTO;