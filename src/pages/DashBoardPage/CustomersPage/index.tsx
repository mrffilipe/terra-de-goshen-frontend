import styles from './styles.module.css';

import { useCallback, useEffect, useState } from 'react';

import TableData from '../../../components/TableData';
import Modal from '../../../components/Modal';
import Loading from '../../../components/Loading';

import {
    useAddCustomer,
    useGetAllCustomers,
    useUpdateCustomer
} from '../../../hooks/customer/useCustomerService';

import { formatDate } from '../../../utils/dateUtils';

const CustomersPage = () => {
    const [getAllCustomers] = useGetAllCustomers();
    const [addCustomer] = useAddCustomer();
    const [updateCustomer] = useUpdateCustomer();
    const [isLoading, setIsLoading] = useState(false);
    const [customers, setCustomers] = useState<CustomerResponseDTO[] | undefined>([]);
    const [newCustomer, setNewCustomer] = useState<CustomerCreateDTO | null>(null);
    const [editCustomer, setEditCustomer] = useState<CustomerUpdateDTO | null>(null);

    const fetchAndSetCustomers = useCallback(async () => {
        setIsLoading(true);
        const fetchedCustomers = await getAllCustomers();
        setCustomers(fetchedCustomers);
        setIsLoading(false);
    }, [getAllCustomers]);

    useEffect(() => {
        fetchAndSetCustomers();
    }, [fetchAndSetCustomers]);

    const handleAddCustomer = async (e: React.FormEvent) => {
        e.preventDefault();
        if (newCustomer) {
            setIsLoading(true);
            await addCustomer(newCustomer);
            fetchAndSetCustomers();
            setNewCustomer(null);
        }
    };

    const handleEditCustomer = async (e: React.FormEvent) => {
        e.preventDefault();
        if (editCustomer) {
            setIsLoading(true);
            await updateCustomer(editCustomer);
            fetchAndSetCustomers();
            setEditCustomer(null);
        }
    };

    const handleCloseNewCustomerModal = () => {
        if (newCustomer) {
            setNewCustomer(null);
        }
    }

    const handleCloseEditCustomerModal = () => {
        if (editCustomer) {
            setEditCustomer(null);
        }
    }

    const headerNames = [
        "ID", "Nome", "Sobrenome", "Data", "Ações"
    ];

    const dataList = customers ? (
        customers.map((customer) => (
            <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{formatDate(customer.createdAt)}</td>
                <td>
                    <button onClick={() => setEditCustomer(customer)}>Editar</button>
                </td>
            </tr>
        ))
    ) : (
        <tr>
            <td colSpan={5}>Nenhum cliente encontrado</td>
        </tr>
    );

    return (
        <div className={styles.customers_page}>
            <h2>Gerenciar Clientes</h2>

            <div className={styles.actions}>
                <button onClick={() => setNewCustomer({ firstName: '', lastName: '' })}>Novo cliente</button>
            </div>

            <Modal title='Novo Cliente' activeModal={newCustomer !== null} onCloseClick={handleCloseNewCustomerModal}>
                <div className={styles.form_container}>
                    <form onSubmit={handleAddCustomer}>
                        <input
                            type="text"
                            value={newCustomer?.firstName}
                            placeholder="Nome"
                            required
                            onChange={e => setNewCustomer(prev => prev ? { ...prev, firstName: e.target.value } : null)}
                        />
                        <input
                            type="text"
                            value={newCustomer?.lastName}
                            placeholder="Sobrenome"
                            required
                            onChange={e => setNewCustomer(prev => prev ? { ...prev, lastName: e.target.value } : null)}
                        />
                        <button type="submit">Cadastrar cliente</button>
                    </form>
                </div>
            </Modal>

            <Modal title='Editar Cliente' activeModal={editCustomer !== null} onCloseClick={handleCloseEditCustomerModal}>
                <div className={styles.form_container}>
                    <form onSubmit={handleEditCustomer}>
                        <input
                            type="text"
                            value={editCustomer?.firstName}
                            placeholder="Nome"
                            required
                            onChange={e => setEditCustomer(prev => prev ? { ...prev, firstName: e.target.value } : null)}
                        />
                        <input
                            type="text"
                            value={editCustomer?.lastName}
                            placeholder="Sobrenome"
                            required
                            onChange={e => setEditCustomer(prev => prev ? { ...prev, lastName: e.target.value } : null)}
                        />
                        <button type="submit">Salvar alterações</button>
                    </form>
                </div>
            </Modal>


            <section className={styles.customers_section}>
                <TableData title='Lista de Cientes' headerNames={headerNames} data={dataList} />
            </section>

            <Loading isLoading={isLoading} />
        </div>
    );
};

export default CustomersPage;