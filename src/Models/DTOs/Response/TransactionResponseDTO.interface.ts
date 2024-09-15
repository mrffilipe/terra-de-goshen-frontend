interface TransactionResponseDTO extends BaseEntity {
    amount: number;
    transactionType: TransactionType;
    paymentMethod: PaymentMethod;
};