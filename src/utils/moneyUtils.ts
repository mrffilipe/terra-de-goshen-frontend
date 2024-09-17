const formatCurrencyBRL = (value: number) => {
    return new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value);
};

export { formatCurrencyBRL };