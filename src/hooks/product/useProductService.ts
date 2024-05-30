import { useCallback, useState } from "react"

import axiosConfig from "../../config/axiosConfig"

const useGetAllProducts = (): [Product[], () => Promise<void>] => {
    const [products, setProducts] = useState<Array<Product>>([])

    const getAllProducts = useCallback(async () => {
        try {
            const response = await axiosConfig.get("/product/get-all-products");

            if (response !== null) {
                setProducts(response.data);
            }
        } catch (error) {
            console.error("Erro ao listar todos os produtos: ", error);
        }
    }, []);

    return [products, getAllProducts]
}

export {
    useGetAllProducts
}