import styles from './styles.module.css';

import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import TableData from '../../../../components/TableData';
import SelectPaymentMethodInput from '../../../../components/SelectPaymentMethodInput';
import Modal from '../../../../components/Modal';
import Loading from '../../../../components/Loading';

import DebtCreateDTO from '../../../../Models/DTOs/Create/DebtCreateDTO.interface';
import DebtResponseDTO from '../../../../Models/DTOs/Response/DebtResponseDTO.interface';
import PaymentMethod from '../../../../Models/Enums/PaymentMethod';

import {
    useAddDebtByCashRegisterId,
    useGetDebtsByCustomerId
} from '../../../../hooks/debt/useDebtService';

import { getPaymentMethodName } from '../../../../utils/enumerationUtils';
import { formatCurrencyBRL } from '../../../../utils/moneyUtils';
import { formatDate } from '../../../../utils/dateUtils';

const DebtsPage = () => {
    const [getDebtsByCustomerId] = useGetDebtsByCustomerId();
    const [addDebtByCashRegisterId] = useAddDebtByCashRegisterId();
    const [isLoading, setIsLoading] = useState(false);
    const [newDebt, setNewDebt] = useState<DebtCreateDTO | null>(null);
    const [debts, setDebts] = useState<DebtResponseDTO[] | undefined>([]);

    const { customerId } = useParams();

    if (!customerId) throw new Error("Cliente não informado.");

    const fetchAndSetDebts = useCallback(async () => {
        setIsLoading(true);
        const fetchedDebts = await getDebtsByCustomerId(customerId);
        setDebts(fetchedDebts);
        setIsLoading(false);
    }, [getDebtsByCustomerId]);

    useEffect(() => {
        fetchAndSetDebts();
    }, [fetchAndSetDebts]);

    const handleAddDebt = async (e: React.FormEvent) => {
        e.preventDefault();

        if (newDebt) {
            const debt: DebtCreateDTO = {
                totalAmount: newDebt.totalAmount,
                dueDate: '2024-09-11T14:08:07.303Z',
                installmentCount: newDebt.installmentCount,
                paymentMethod: newDebt.paymentMethod,
                initialPayment: newDebt.initialPayment,
                customerId: customerId
            };

            setIsLoading(true);
            const cashRegisterId = "bfda369b-bf91-46ef-bfba-f34ee3e5c85d";
            await addDebtByCashRegisterId(cashRegisterId, debt);
            fetchAndSetDebts();
            setNewDebt(null);
            setIsLoading(false);
        }
    };

    const handleCloseAddDebtModal = () => {
        setNewDebt(null);
    }

    const headerNames = [
        "ID", "Valor Total", "Qtd. Parcelas", "Método de pagamento", "Entrada", "Data", "Ações"
    ];

    const dataList = debts?.map((debt) => (
        <tr key={debt.id}>
            <td>{debt.id}</td>
            <td>{formatCurrencyBRL(debt.totalAmount)}</td>
            <td>{debt.installmentCount}x</td>
            <td>{getPaymentMethodName(debt.paymentMethod)}</td>
            <td>{formatCurrencyBRL(debt.initialPayment)}</td>
            <td>{formatDate(debt.createdAt)}</td>
            <td>
                <button onClick={undefined}>
                    Pagar Parcela
                </button>
            </td>
        </tr>
    ));

    return (
        <div className={styles.debts_page}>
            <h2>Débitos do Cliente</h2>

            <div className={styles.actions}>
                <button onClick={() => setNewDebt({
                    totalAmount: 0, installmentCount: 0, dueDate: '', paymentMethod: 0, initialPayment: 0, customerId: ''
                })}>Novo débito</button>
            </div>

            <section className={styles.debts_section}>
                <TableData title='Lista de Débitos' headerNames={headerNames} data={dataList} />
            </section>

            <Modal title='Novo Débito' activeModal={newDebt !== null} onCloseClick={handleCloseAddDebtModal}>
                <div className={styles.form_container}>
                    <form onSubmit={handleAddDebt}>
                        <input
                            type="number"
                            value={newDebt?.totalAmount === 0 ? '' : newDebt?.totalAmount || 0}
                            placeholder="Valor total"
                            required
                            onChange={e => setNewDebt(prev => prev ? { ...prev, totalAmount: parseFloat(e.target.value) } : null)}
                        />
                        <input
                            type="number"
                            value={newDebt?.installmentCount === 0 ? '' : newDebt?.installmentCount || 0}
                            placeholder="Qtd. parcelas"
                            required
                            onChange={e => setNewDebt(prev => prev ? { ...prev, installmentCount: parseFloat(e.target.value) } : null)}
                        />
                        <SelectPaymentMethodInput
                            value={newDebt?.paymentMethod || PaymentMethod.CREDIT_CARD}
                            onChange={e => setNewDebt(prev => prev ? { ...prev, paymentMethod: e } : null)}
                        />
                        <input
                            type="number"
                            value={newDebt?.initialPayment === 0 ? '' : newDebt?.initialPayment || 0}
                            placeholder="Entrada"
                            required
                            onChange={e => setNewDebt(prev => prev ? { ...prev, initialPayment: parseFloat(e.target.value) } : null)}
                        />
                        <button type="submit">Cadastrar débito</button>
                    </form>
                </div>
            </Modal>

            <Loading isLoading={isLoading} />
        </div>
    );
};

export default DebtsPage;