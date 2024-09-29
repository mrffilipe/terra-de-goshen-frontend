import styles from './styles.module.css';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import TableData from '../../components/TableData';
import Loading from '../../components/Loading';

import TransactionResponseDTO from '../../Models/DTOs/Response/TransactionResponseDTO.interface';

import {
    useGetCurrentBalance,
    useGetTransactions
} from '../../hooks/cashRegister/useCashRegisterService';

import { getPaymentMethodName, getTransactionTypeName } from '../../utils/enumerationUtils';
import { formatCurrencyBRL } from '../../utils/moneyUtils';
import { formatDate } from '../../utils/dateUtils';

const DashboardPage = () => {
    const [getCurrentBalance] = useGetCurrentBalance();
    const [getTransactions] = useGetTransactions();
    const [isLoading, setIsLoading] = useState(false);
    const [balance, setBalance] = useState<number | undefined>(0);
    const [transactions, setTransactions] = useState<TransactionResponseDTO[] | undefined>([]);

    useEffect(() => {
        (async () => {
            setIsLoading(true);

            const fetchedBalance = await getCurrentBalance();
            const fetchedTransactions = await getTransactions();

            setBalance(fetchedBalance);
            setTransactions(fetchedTransactions);

            setIsLoading(false);
        })();
    }, []);

    const headerNames = [
        "ID", "Valor", "Tipo de Transação", "Método de pagamento", "Data"
    ];

    const dataList = transactions ?
        (
            transactions.map(transaction => (
                <tr key={transaction.id}>
                    <td>{transaction.id}</td>
                    <td>{formatCurrencyBRL(transaction.amount)}</td>
                    <td>{getTransactionTypeName(transaction.transactionType)}</td>
                    <td>{getPaymentMethodName(transaction.paymentMethod)}</td>
                    <td>{formatDate(transaction.createdAt)}</td>
                </tr>
            ))
        ) : (
            <tr>
                <td colSpan={5}>Nenhuma transação encontrada</td>
            </tr>
        );

    return (
        <div className={styles.dashboard_page}>
            <section className={styles.balance_section}>
                <div className={styles.balance_card}>
                    <h3>Valor Total</h3>
                    <p>{formatCurrencyBRL(balance!)}</p>
                </div>
            </section>

            <section className={styles.navigation_links_section}>
                <div className={styles.links}>
                    <Link to="/dashboard/products" className={styles.link}>
                        Gerenciar Produtos
                    </Link>
                    <Link to="/dashboard/customers" className={styles.link}>
                        Gerenciar Clientes
                    </Link>
                </div>
            </section>

            <section className={styles.transactions_section}>
                <TableData title='Últimas Transações' headerNames={headerNames} data={dataList} />
            </section>

            <Loading isLoading={isLoading} />
        </div>
    );
};

export default DashboardPage;