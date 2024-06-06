import { useCallback } from "react";

import axiosConfig from "../../config/axiosConfig";

const useGetProductById = (): [(id: string) => Promise<ProductResponseDTO | undefined>] => {
    const getProductById = useCallback(async (id: string): Promise<ProductResponseDTO | undefined> => {
        try {
            const response = await axiosConfig.get(`/product/get-product-by-id?id=${id}`);

            if (response !== null) {
                return response.data;
            }
        } catch (error) {
            console.error("Erro ao listar o produto: ", error);
        }

        return undefined;
    }, []);

    return [getProductById];
};

const useGetProductsByParameter = (): [(params?: any) => Promise<MinimumProductResponseDTO[]>] => {
    const getProductsByParameter = useCallback(async (params?: any): Promise<MinimumProductResponseDTO[]> => {
        try {
            const response = await axiosConfig.get("/product/get-all-products");

            if (response !== null) {
                return response.data;
            }
        } catch (error) {
            console.error("Erro ao listar todos os produtos: ", error);
        }

        return [];
    }, []);

    return [getProductsByParameter];
};

export {
    useGetProductById,
    useGetProductsByParameter
};