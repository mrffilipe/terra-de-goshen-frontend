import { useCallback } from "react";

import axiosConfig from "../../config/axiosConfig";

import TransactionResponseDTO from "../../Models/DTOs/Response/TransactionResponseDTO.interface";

const useGetBalanceByCashRegisterId = (): [(cashRegisterId: string) => Promise<number | undefined>] => {
    const getBalanceByCashRegisterId = useCallback(async (cashRegisterId: string): Promise<number | undefined> => {
        try {
            const response = await axiosConfig.get(`/cashregister/${cashRegisterId}/balance`);

            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error("Erro ao obter o saldo do caixa: ", error);
        }

        return undefined;
    }, []);

    return [getBalanceByCashRegisterId];
};

const useGetTransactionsByCashRegisterId = (): [(cashRegisterId: string) => Promise<TransactionResponseDTO[] | undefined>] => {
    const getTransactionsByCashRegisterId = useCallback(async (cashRegisterId: string): Promise<TransactionResponseDTO[] | undefined> => {
        try {
            const response = await axiosConfig.get(`/cashregister/${cashRegisterId}/transactions`);

            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error("Erro ao obter as transações do caixa: ", error);
        }

        return undefined;
    }, []);

    return [getTransactionsByCashRegisterId];
};

export {
    useGetBalanceByCashRegisterId,
    useGetTransactionsByCashRegisterId
};