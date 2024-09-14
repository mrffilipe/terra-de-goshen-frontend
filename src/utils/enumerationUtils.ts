/* PaymentMethod
0 - CREDIT_CARD,    
1 - DEBIT_CARD,     
2 - PIX,            
3 - PROMISSORY_NOTE,
4 - CASH,           
5 - OTHER 
*/
const nameOfPaymentMethods: string[] = [
    "Cartão de crédito",
    "Cartão de débido",
    "Pix",
    "Nota promissória",
    "Dinheiro",
    "Outro"
];

const getPaymentMethodName = (paymentMethod: PaymentMethod) => nameOfPaymentMethods[paymentMethod];

/* TransactionType
0 - INCOME,         
1 - EXPENSE         
*/
const transactionTypeNames: string[] = [
    "Entrada",
    "Saída"
];

const getTransactionTypeName = (transactionType: TransactionType) => transactionTypeNames[transactionType];

export {
    getPaymentMethodName,
    getTransactionTypeName
};