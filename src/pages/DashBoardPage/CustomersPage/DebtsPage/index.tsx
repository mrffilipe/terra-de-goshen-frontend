import styles from './styles.module.css';

import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../../../../components/Button';
import TableData from '../../../../components/TableData';
import SelectPaymentMethodInput from '../../../../components/SelectPaymentMethodInput';
import Modal from '../../../../components/Modal';
import Form from '../../../../components/Form';
import Loading from '../../../../components/Loading';

import DebtCreateDTO from '../../../../Models/DTOs/Create/DebtCreateDTO.interface';
import DebtResponseDTO from '../../../../Models/DTOs/Response/DebtResponseDTO.interface';
import PaymentMethod from '../../../../Models/Enums/PaymentMethod';

import {
    useAddDebtByCashRegisterId,
    useGetDebtsByCustomerId,
    useRegisterInstallmentPayment
} from '../../../../hooks/debt/useDebtService';

import { getPaymentMethodName } from '../../../../utils/enumerationUtils';
import { formatCurrencyBRL } from '../../../../utils/moneyUtils';
import { formatDate } from '../../../../utils/dateUtils';

const DebtsPage = () => {
    const [addDebtByCashRegisterId] = useAddDebtByCashRegisterId();
    const [getDebtsByCustomerId] = useGetDebtsByCustomerId();
    const [registerInstallmentPayment] = useRegisterInstallmentPayment();
    const [isLoading, setIsLoading] = useState(false);
    const [newDebt, setNewDebt] = useState<DebtCreateDTO | null>(null);
    const [debts, setDebts] = useState<DebtResponseDTO[] | undefined>([]);
    const [selectedDebt, setSelectedDebt] = useState<DebtResponseDTO | null>(null);
    const [selectedInstallment, setSelectedInstallment] = useState<InstallmentResponseDTO | null>(null);
    const [paymentAmount, setPaymentAmount] = useState(0);

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

    const handleRegisterPayment = async (e: React.FormEvent) => {
        e.preventDefault();

        if (selectedInstallment) {
            setIsLoading(true);
            const cashRegisterId = "bfda369b-bf91-46ef-bfba-f34ee3e5c85d";
            await registerInstallmentPayment(selectedInstallment.id, cashRegisterId, paymentAmount);
            fetchAndSetDebts();
            setSelectedInstallment(null);
            setPaymentAmount(0);
            setSelectedDebt(null);
            setIsLoading(false);
        }
    };

    const handleCloseAddDebtModal = () => {
        setNewDebt(null);
    };

    const handleCloseRegisterPaymentModal = () => {
        setSelectedInstallment(null);
    };

    const debitHeaderNames = [
        "ID", "Valor Total", "Qtd. Parcelas", "Método de pagamento", "Entrada", "Data", "Ações"
    ];

    const debitDataList = debts?.map(debt => (
        <tr key={debt.id}>
            <td>{debt.id}</td>
            <td>{formatCurrencyBRL(debt.totalAmount)}</td>
            <td>{debt.installmentCount}x</td>
            <td>{getPaymentMethodName(debt.paymentMethod)}</td>
            <td>{formatCurrencyBRL(debt.initialPayment)}</td>
            <td>{formatDate(debt.createdAt)}</td>
            <td>
                <button onClick={() => debt.id === selectedDebt?.id ? setSelectedDebt(null) : setSelectedDebt(debt)}>
                    {debt.id === selectedDebt?.id ? 'Fechar' : 'Detalhes'}
                </button>
            </td>
        </tr>
    ));

    const installmentHeaderNames = [
        "ID", "Valor", "Valor Pago", "Status", "Vencimento", "Ações"
    ];

    const installmentDataList = selectedDebt?.installments.map(installment => (
        <tr key={installment.id}>
            <td>{installment.id}</td>
            <td>{formatCurrencyBRL(installment.amount)}</td>
            <td>{formatCurrencyBRL(installment.amountPaid)}</td>
            <td>{installment.isPaid ? 'Pago' : 'Pendente'}</td>
            <td>{formatDate(installment.dueDate)}</td>
            <td>
                <button onClick={() => setSelectedInstallment(installment)}>Pagar</button>
            </td>
        </tr>
    ));

    return (
        <div className={styles.debts_page}>
            <h2>Débitos do Cliente</h2>

            <div className={styles.actions}>
                <Button
                    value='Novo débito'
                    disabled={isLoading}
                    onClick={() => setNewDebt({
                        totalAmount: 0, installmentCount: 0, dueDate: '', paymentMethod: 0, initialPayment: 0, customerId: ''
                    })}
                />
            </div>

            <Modal title='Novo Débito' activeModal={newDebt !== null} onCloseClick={handleCloseAddDebtModal}>
                <Form onSubmit={handleAddDebt}>
                    <label>
                        Valor total (R$)
                        <input
                            type="number"
                            value={newDebt?.totalAmount === 0 ? '' : newDebt?.totalAmount || 0}
                            placeholder="Ex: 200,00"
                            required
                            onChange={e => setNewDebt(prev => prev ? { ...prev, totalAmount: parseFloat(e.target.value) } : null)}
                        />
                    </label>
                    <label>
                        Parcelas
                        <select
                            value={newDebt?.installmentCount}
                            onChange={
                                e => setNewDebt(prev => prev ? { ...prev, installmentCount: parseFloat(e.target.value) } : null)
                            }
                        >
                            <option value="1">1x</option>
                            <option value="2">2x</option>
                            <option value="3">3x</option>
                            <option value="4">4x</option>
                            <option value="5">5x</option>
                            <option value="6">6x</option>
                            <option value="7">7x</option>
                            <option value="8">8x</option>
                            <option value="9">9x</option>
                            <option value="10">10x</option>
                            <option value="11">11x</option>
                            <option value="12">12x</option>
                        </select>
                    </label>
                    <label>
                        Método de pagamento
                        <SelectPaymentMethodInput
                            value={newDebt?.paymentMethod || PaymentMethod.CREDIT_CARD}
                            onChange={e => setNewDebt(prev => prev ? { ...prev, paymentMethod: e } : null)}
                        />
                    </label>
                    <label>
                        Valor de entrada (R$)
                        <input
                            type="number"
                            value={newDebt?.initialPayment === 0 ? '' : newDebt?.initialPayment || 0}
                            placeholder="Ex: 50,00"
                            required
                            onChange={e => setNewDebt(prev => prev ? { ...prev, initialPayment: parseFloat(e.target.value) } : null)}
                        />
                    </label>
                    <Button type='submit' value='Cadastrar débito' />
                </Form>
            </Modal>

            <Modal title='Parcela' activeModal={selectedInstallment !== null} onCloseClick={handleCloseRegisterPaymentModal}>
                <Form onSubmit={handleRegisterPayment}>
                    <label>
                        Valor do pagamento (R$)
                        <input
                            type="number"
                            value={paymentAmount === 0 ? '' : paymentAmount || 0}
                            placeholder="Ex: 100,00"
                            required
                            onChange={e => setPaymentAmount(parseFloat(e.target.value))}
                        />
                    </label>
                    <Button type='submit' value='Registrar pagamento' />
                </Form>
            </Modal>

            <section className={styles.debts_section}>
                <TableData title='Lista de Débitos' headerNames={debitHeaderNames} data={debitDataList} />
            </section>

            {selectedDebt && (
                <section className={styles.debt_details}>
                    <TableData title={`Detalhes do parcelamento (${selectedDebt.id})`} headerNames={installmentHeaderNames} data={installmentDataList} />
                </section>
            )}

            <Loading isLoading={isLoading} />
        </div>
    );
};

export default DebtsPage;