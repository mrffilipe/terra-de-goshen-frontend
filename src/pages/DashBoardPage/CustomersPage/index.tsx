import styles from './styles.module.css';

import { useEffect, useState } from 'react';

import TableData from '../../../components/TableData';
import Modal from '../../../components/Modal';
import Loading from '../../../components/Loading';

import {
    useAddCustomer,
    useGetAllCustomers,
    useUpdateCustomer
} from '../../../hooks/customer/useCustomerService';

const CustomersPage = () => {
    const [getAllCustomers] = useGetAllCustomers();
    const [addCustomer] = useAddCustomer();
    const [updateCustomer] = useUpdateCustomer();
    const [isLoading, setIsLoading] = useState(false);
    const [customers, setCustomers] = useState<CustomerResponseDTO[] | undefined>([]);
    const [newCustomer, setNewCustomer] = useState<CustomerCreateDTO | null>(null);
    const [editCustomer, setEditCustomer] = useState<CustomerUpdateDTO | null>(null);

    useEffect(() => {
        (async () => {
            setIsLoading(true);

            const fetchedCustomers = await getAllCustomers();

            setCustomers(fetchedCustomers);

            setIsLoading(false);
        })();
    }, []);

    const handleAddCustomer = async (e: React.FormEvent) => {
        e.preventDefault();

        if (newCustomer) {
            setIsLoading(true);

            await addCustomer(newCustomer);

            const updatedCustomers = await getAllCustomers();

            setCustomers(updatedCustomers);

            setNewCustomer(null);

            setIsLoading(false);
        }
    };

    const handleEditCustomer = async (e: React.FormEvent) => {
        e.preventDefault();

        if (editCustomer) {
            setIsLoading(true);

            await updateCustomer(editCustomer);

            const updatedCustomers = await getAllCustomers();

            setCustomers(updatedCustomers);

            setEditCustomer(null);

            setIsLoading(false);
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

    const dataList = customers?.map((customer) => (
        <tr key={customer.id}>
            <td>{customer.id}</td>
            <td>{customer.firstName}</td>
            <td>{customer.lastName}</td>
            <td>{customer.createdAt}</td>
            <td>
                <button onClick={() => setEditCustomer(customer)}>Editar</button>
            </td>
        </tr>
    ))

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
                            onChange={e => {
                                newCustomer ? (
                                    setNewCustomer({ ...newCustomer, firstName: e.target.value })) : (
                                    undefined
                                )
                            }}
                        />
                        <input
                            type="text"
                            value={newCustomer?.lastName}
                            placeholder="Sobrenome"
                            required
                            onChange={e => {
                                newCustomer ? (
                                    setNewCustomer({ ...newCustomer, lastName: e.target.value })) : (
                                    undefined
                                )
                            }}
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
                            onChange={e => {
                                editCustomer ? (
                                    setEditCustomer({ ...editCustomer, firstName: e.target.value })) : (
                                    undefined
                                )
                            }}
                        />
                        <input
                            type="text"
                            value={editCustomer?.lastName}
                            placeholder="Sobrenome"
                            required
                            onChange={e => {
                                editCustomer ? (
                                    setEditCustomer({ ...editCustomer, lastName: e.target.value })) : (
                                    undefined
                                )
                            }}
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