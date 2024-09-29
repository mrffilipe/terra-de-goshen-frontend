import { useCallback } from "react";

import axiosConfig from "../../config/axiosConfig";

const useAddCustomer = (): [(customer: CustomerCreateDTO) => Promise<CustomerResponseDTO | undefined>] => {
    const addCustomer = useCallback(async (customer: CustomerCreateDTO): Promise<CustomerResponseDTO | undefined> => {
        try {
            const response = await axiosConfig.post('customer', customer);

            if (response !== null) {
                return response.data;
            }
        } catch (error) {
            console.error("Erro ao adicionar cliente: ", error);
        }

        return undefined;
    }, []);

    return [addCustomer];
};

const useGetAllCustomers = (): [() => Promise<CustomerResponseDTO[] | undefined>] => {
    const getAllCustomers = useCallback(async (): Promise<CustomerResponseDTO[] | undefined> => {
        try {
            const response = await axiosConfig.get('/customer');

            if (response !== null) {
                return response.data;
            }
        } catch (error) {
            console.error("Erro ao buscar os clientes: ", error);
        }

        return undefined;
    }, []);

    return [getAllCustomers];
};

const useUpdateCustomer = (): [(customer: CustomerUpdateDTO) => Promise<CustomerResponseDTO | undefined>] => {
    const updateCustomer = useCallback(async (customer: CustomerUpdateDTO): Promise<CustomerResponseDTO | undefined> => {
        try {
            const response = await axiosConfig.put(`/customer/${customer.id}`, customer);

            if (response !== null) {
                return response.data;
            }
        } catch (error) {
            console.error("Erro ao atualizar cliente: ", error);
        }

        return undefined;
    }, []);

    return [updateCustomer];
};

export {
    useAddCustomer,
    useGetAllCustomers,
    useUpdateCustomer
};