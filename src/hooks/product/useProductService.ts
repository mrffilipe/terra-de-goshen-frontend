import { useCallback } from "react";

import axiosConfig from "../../config/axiosConfig";
import axios from "axios";

const useAddProduct = (): [({
    name, description, price, costPrice, stock, colors, sizes, category, images
}: ProductCreateDTO) => Promise<ProductResponseDTO | undefined>] => {
    const AddProduct = useCallback(async ({
        name, description, price, costPrice, stock, colors, sizes, category, images
    }: ProductCreateDTO): Promise<ProductResponseDTO | undefined> => {
        try {
            const formData = new FormData();

            formData.append('name', name);
            formData.append('description', description);
            formData.append('price', price.toString());
            formData.append('costPrice', costPrice.toString());
            formData.append('stock', stock.toString());
            formData.append('category.id', category.id);

            if (colors) {
                colors.forEach((color, index) => {
                    formData.append(`colors[${index}].id`, color.id);
                });
            }

            if (sizes) {
                sizes.forEach((size, index) => {
                    formData.append(`sizes[${index}].id`, size.id);
                });
            }

            if (images) {
                images.forEach((image, index) => {
                    formData.append(`images[${index}].file`, image.file);
                    formData.append(`images[${index}].isCover`, image.isCover ? 'true' : 'false');
                });
            }

            const response = await axiosConfig.post('/product', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response !== null) {
                return response.data as ProductResponseDTO;
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Erro ao adicionar produto:', error.response?.data || error.message);
            } else {
                console.error('Erro inesperado:', error);
            }
            // console.error("Erro ao adicionar produto: ", error);
        }

        return undefined;
    }, []);

    return [AddProduct];
};

const useGetProductById = (): [(id: string) => Promise<ProductResponseDTO | undefined>] => {
    const getProductById = useCallback(async (id: string): Promise<ProductResponseDTO | undefined> => {
        try {
            const response = await axiosConfig.get(`/product/${id}`);

            if (response !== null) {
                return response.data;
            }
        } catch (error) {
            console.error("Erro ao buscar produto: ", error);
        }

        return undefined;
    }, []);

    return [getProductById];
};

const useGetProductsByName = (): [(productName: string) => Promise<ProductResponseDTO[]>] => {
    const getProductsByName = useCallback(async (productName: string): Promise<ProductResponseDTO[]> => {
        try {
            const response = await axiosConfig.get(`/product/search/${productName}`);

            if (response !== null) {
                return response.data;
            }
        } catch (error) {
            console.error(`Erro ao buscar produtos com nome "${productName}"`, error);
        }

        return [];
    }, []);

    return [getProductsByName];
};

const useGetAllProducts = (): [() => Promise<ProductResponseDTO[] | undefined>] => {
    const getAllProducts = useCallback(async (): Promise<ProductResponseDTO[] | undefined> => {
        try {
            const response = await axiosConfig.get('/product');

            if (response !== null) {
                return response.data;
            }
        } catch (error) {
            console.error("Erro ao buscar produtos: ", error);
        }

        return undefined;
    }, []);

    return [getAllProducts];
};

const useGetAllColors = (): [() => Promise<ColorResponseDTO[]>] => {
    const getAllColors = useCallback(async (): Promise<ColorResponseDTO[]> => {
        try {
            const response = await axiosConfig.get("/product/color");

            if (response !== null) {
                return response.data;
            }
        } catch (error) {
            console.error("Erro ao buscar as cores: ", error);
        }

        return [];
    }, []);

    return [getAllColors];
};

const useGetAllSizes = (): [() => Promise<SizeResponseDTO[]>] => {
    const getAllSizes = useCallback(async (): Promise<SizeResponseDTO[]> => {
        try {
            const response = await axiosConfig.get("/product/size");

            if (response !== null) {
                return response.data;
            }
        } catch (error) {
            console.error("Erro ao buscar os tamanhos: ", error);
        }

        return [];
    }, []);

    return [getAllSizes];
};

const useGetAllCategories = (): [() => Promise<CategoryResponseDTO[]>] => {
    const getAllCategories = useCallback(async (): Promise<CategoryResponseDTO[]> => {
        try {
            const response = await axiosConfig.get("/product/category");

            if (response !== null) {
                return response.data;
            }
        } catch (error) {
            console.error("Erro ao buscar as categorias: ", error);
        }

        return [];
    }, []);

    return [getAllCategories];
};

export {
    useAddProduct,
    useGetProductById,
    useGetProductsByName,
    useGetAllProducts,
    useGetAllColors,
    useGetAllSizes,
    useGetAllCategories
};