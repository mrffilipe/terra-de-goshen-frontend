import { useCallback } from "react";

import axiosConfig from "../../config/axiosConfig";

import DebtCreateDTO from "../../Models/DTOs/Create/DebtCreateDTO.interface";
import DebtResponseDTO from "../../Models/DTOs/Response/DebtResponseDTO.interface";

const useAddDebtByCashRegisterId = (): [(cashRegisterId: string, debt: DebtCreateDTO) => Promise<DebtResponseDTO | undefined>] => {
    const addDebtByCashRegisterId = useCallback(async (cashRegisterId: string, debt: DebtCreateDTO): Promise<DebtResponseDTO | undefined> => {
        try {
            const response = await axiosConfig.post(`/debt/cash-register/${cashRegisterId}`, debt);

            if (response !== null) {
                return response.data;
            }
        } catch (error) {
            console.error("Erro ao registrar novo débito: ", error);
        }

        return undefined;
    }, []);

    return [addDebtByCashRegisterId];
};

const useGetDebtsByCustomerId = (): [(customerId: string) => Promise<DebtResponseDTO[] | undefined>] => {
    const getDebtsByCustomerId = useCallback(async (customerId: string): Promise<DebtResponseDTO[] | undefined> => {
        try {
            const response = await axiosConfig.get(`/debt/customer/${customerId}`);

            if (response !== null) {
                return response.data;
            }
        } catch (error) {
            console.error("Erro ao listar débitos: ", error);
        }

        return undefined;
    }, []);

    return [getDebtsByCustomerId];
};

const useRegisterInstallmentPayment = (): [(installmentId: string, cashRegisterId: string, amount: number) => Promise<DebtResponseDTO[] | undefined>] => {
    const registerInstallmentPayment = useCallback(async (installmentId: string, cashRegisterId: string, paymentAmount: number): Promise<DebtResponseDTO[] | undefined> => {
        try {
            const response = await axiosConfig.post(`/debt/installments/${installmentId}/cash-register/${cashRegisterId}/payment`, paymentAmount);

            if (response !== null) {
                return response.data;
            }
        } catch (error) {
            console.error("Erro ao registrar pagamento: ", error);
        }

        return undefined;
    }, []);

    return [registerInstallmentPayment];
};

export {
    useAddDebtByCashRegisterId,
    useGetDebtsByCustomerId,
    useRegisterInstallmentPayment
};