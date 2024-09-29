import { useCallback } from "react";

import axiosConfig from "../../config/axiosConfig";

import DebtCreateDTO from "../../Models/DTOs/Create/DebtCreateDTO.interface";
import DebtResponseDTO from "../../Models/DTOs/Response/DebtResponseDTO.interface";

const useAddDebt = (): [(debt: DebtCreateDTO) => Promise<DebtResponseDTO | undefined>] => {
    const addDebt = useCallback(async (debt: DebtCreateDTO): Promise<DebtResponseDTO | undefined> => {
        try {
            const response = await axiosConfig.post('/debt', debt);

            if (response !== null) {
                return response.data;
            }
        } catch (error) {
            console.error("Erro ao adicionar débito: ", error);
        }

        return undefined;
    }, []);

    return [addDebt];
};

const useGetDebtsByCustomerId = (): [(customerId: string) => Promise<DebtResponseDTO[] | undefined>] => {
    const getDebtsByCustomerId = useCallback(async (customerId: string): Promise<DebtResponseDTO[] | undefined> => {
        try {
            const response = await axiosConfig.get(`/debt/customer/${customerId}`);

            if (response !== null) {
                return response.data;
            }
        } catch (error) {
            console.error("Erro ao buscar débitos: ", error);
        }

        return undefined;
    }, []);

    return [getDebtsByCustomerId];
};

const useRegisterInstallmentPayment = (): [(installmentId: string, paymentAmount: number) => Promise<DebtResponseDTO[] | undefined>] => {
    const registerInstallmentPayment = useCallback(async (installmentId: string, paymentAmount: number): Promise<DebtResponseDTO[] | undefined> => {
        try {
            const response = await axiosConfig.post(`/debt/installment/${installmentId}/payment`, paymentAmount);

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
    useAddDebt,
    useGetDebtsByCustomerId,
    useRegisterInstallmentPayment
};