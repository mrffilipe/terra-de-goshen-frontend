import { useCallback, useState } from "react";

import axiosConfig from "../../config/axiosConfig";

const useGetProductsByParameter = (): [MinimumProductResponseDTO[], () => Promise<void>] => {
    const [products, setProducts] = useState<MinimumProductResponseDTO[]>([]);

    const getProductsByParameter = useCallback(async (params?: any) => {
        try {
            const response = await axiosConfig.get("/product/get-all-products");

            if (response !== null) {
                setProducts(response.data);
            }
        } catch (error) {
            console.error("Erro ao listar todos os produtos: ", error);
        }
    }, []);

    return [products, getProductsByParameter];
}

export {
    useGetProductsByParameter
};