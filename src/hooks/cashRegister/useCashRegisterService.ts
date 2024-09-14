import { useCallback } from "react";

import axiosConfig from "../../config/axiosConfig";

const useGetBalanceByCashRegisterId = (): [(cashRegisterId: string) => Promise<number | undefined>] => {
    const getBalanceByCashRegisterId = useCallback(async (cashRegisterId: string): Promise<number | undefined> => {
        try {
            const response = await axiosConfig.get(`/cashregister/${cashRegisterId}/balance`);

            if (response !== null) {
                return response.data;
            }
        } catch (error) {
            console.error("Erro ao listar o produto: ", error);
        }

        return undefined;
    }, []);

    return [getBalanceByCashRegisterId];
};

const useGetTransactionsByCashRegisterId = (): [(cashRegisterId: string) => Promise<TransactionResponseDTO[] | undefined>] => {
    const getTransactionsByCashRegisterId = useCallback(async (cashRegisterId: string): Promise<TransactionResponseDTO[] | undefined> => {
        try {
            const response = await axiosConfig.get(`/cashregister/${cashRegisterId}/transactions`);

            if (response !== null) {
                return response.data;
            }
        } catch (error) {
            console.error("Erro ao listar o produto: ", error);
        }

        return undefined;
    }, []);

    return [getTransactionsByCashRegisterId];
};

export {
    useGetBalanceByCashRegisterId,
    useGetTransactionsByCashRegisterId
};