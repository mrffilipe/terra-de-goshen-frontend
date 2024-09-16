import styles from './styles.module.css';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import TableData from '../../components/TableData';
import Loading from '../../components/Loading';

import {
    useGetBalanceByCashRegisterId,
    useGetTransactionsByCashRegisterId
} from '../../hooks/cashRegister/useCashRegisterService';
import { getPaymentMethodName, getTransactionTypeName } from '../../utils/enumerationUtils';

const DashboardPage = () => {
    const [getBalanceByCashRegisterId] = useGetBalanceByCashRegisterId();
    const [getTransactionsByCashRegisterId] = useGetTransactionsByCashRegisterId();
    const [isLoading, setIsLoading] = useState(false);
    const [balance, setBalance] = useState<number | undefined>(0);
    const [transactions, setTransactions] = useState<TransactionResponseDTO[] | undefined>([]);

    useEffect(() => {
        (async () => {
            setIsLoading(true);

            const cashRegisterId = "bfda369b-bf91-46ef-bfba-f34ee3e5c85d";

            const fetchedBalance = await getBalanceByCashRegisterId(cashRegisterId);
            const fetchedTransactions = await getTransactionsByCashRegisterId(cashRegisterId);

            setBalance(fetchedBalance);
            setTransactions(fetchedTransactions);

            setIsLoading(false);
        })();
    }, []);

    const headerNames = [
        "ID", "Valor", "Tipo de Transação", "Método de pagamento", "Data"
    ];

    const dataList = transactions?.map(transaction => (
        <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>R$ {transaction.amount}</td>
            <td>{getTransactionTypeName(transaction.transactionType)}</td>
            <td>{getPaymentMethodName(transaction.paymentMethod)}</td>
            <td>{transaction.createdAt}</td>
        </tr>
    ));

    return (
        <div className={styles.dashboard_page}>
            <section className={styles.balance_section}>
                <div className={styles.balance_card}>
                    <h3>Valor Total</h3>
                    <p>R$ {balance}</p>
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