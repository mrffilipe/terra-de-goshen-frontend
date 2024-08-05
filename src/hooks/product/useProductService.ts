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

const useGetAllCategories = (): [() => Promise<CategoryResponseDTO[]>] => {
    const getAllCategories = useCallback(async (): Promise<CategoryResponseDTO[]> => {
        try {
            const response = await axiosConfig.get("/product/get-all-categories");

            if (response !== null) {
                return response.data;
            }
        } catch (error) {
            console.error("Erro ao listar todas as categorias: ", error);
        }

        return [];
    }, []);

    return [getAllCategories];
};

const useGetAllColors = (): [() => Promise<ColorResponseDTO[]>] => {
    const getAllColors = useCallback(async (): Promise<ColorResponseDTO[]> => {
        try {
            const response = await axiosConfig.get("/product/get-all-colors");

            if (response !== null) {
                return response.data;
            }
        } catch (error) {
            console.error("Erro ao listar todas as cores: ", error);
        }

        return [];
    }, []);

    return [getAllColors];
};

const useGetAllSizes = (): [() => Promise<SizeResponseDTO[]>] => {
    const getAllSizes = useCallback(async (): Promise<SizeResponseDTO[]> => {
        try {
            const response = await axiosConfig.get("/product/get-all-sizes");

            if (response !== null) {
                return response.data;
            }
        } catch (error) {
            console.error("Erro ao listar todas os tamanhos: ", error);
        }

        return [];
    }, []);

    return [getAllSizes];
};

export {
    useGetProductById,
    useGetProductsByParameter,
    useGetAllCategories,
    useGetAllColors,
    useGetAllSizes
};