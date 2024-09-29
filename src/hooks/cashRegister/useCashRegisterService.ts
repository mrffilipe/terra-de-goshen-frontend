import { useCallback } from "react";

import axiosConfig from "../../config/axiosConfig";

import TransactionResponseDTO from "../../Models/DTOs/Response/TransactionResponseDTO.interface";

const useGetCurrentBalance = (): [() => Promise<number | undefined>] => {
    const getCurrentBalance = useCallback(async (): Promise<number | undefined> => {
        try {
            const response = await axiosConfig.get('cashregister/balance');

            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error("Erro ao buscar o saldo do caixa: ", error);
        }

        return undefined;
    }, []);

    return [getCurrentBalance];
};

const useGetTransactions = (): [() => Promise<TransactionResponseDTO[] | undefined>] => {
    const getTransactions = useCallback(async (): Promise<TransactionResponseDTO[] | undefined> => {
        try {
            const response = await axiosConfig.get('cashregister/transactions');

            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error("Erro ao buscar as transações do caixa: ", error);
        }

        return undefined;
    }, []);

    return [getTransactions];
};

export {
    useGetCurrentBalance,
    useGetTransactions
};