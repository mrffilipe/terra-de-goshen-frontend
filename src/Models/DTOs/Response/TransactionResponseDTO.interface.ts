interface TransactionResponseDTO extends Entity, BaseEntity {
    amount: number;
    transactionType: TransactionType;
    paymentMethod: PaymentMethod;
};