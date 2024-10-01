import { useCallback, useEffect, useState } from "react";

import { useGetAllCategories } from "../../hooks/product/useProductService";

type Props = {
    value: CategoryCreateDTO | CategoryUpdateDTO;
    onChange: (event: CategoryCreateDTO | CategoryUpdateDTO) => void;
};

const ProductCategory = ({ value, onChange }: Props) => {
    const [getAllCategories] = useGetAllCategories();
    const [allCategories, setAllCategories] = useState<CategoryResponseDTO[] | undefined>([]);

    const fetchAndSetCategories = useCallback(async () => {
        const fetchedCategories = await getAllCategories();
        setAllCategories(fetchedCategories);
    }, [getAllCategories]);

    useEffect(() => {
        fetchAndSetCategories();
    }, [fetchAndSetCategories]);

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCategoryId = event.target.value;
        const selectedCategory = allCategories?.find(category => category.id === selectedCategoryId);

        if (selectedCategory) {
            onChange(selectedCategory);
        }
    };

    const listCategorias = allCategories?.map(category => (
        <option key={category.id} value={category.id}>{category.name}</option>
    ));

    return (
        allCategories && allCategories.length > 0 ? (
            <select
                value={value.id}
                onChange={handleCategoryChange}
            >
                <option value="">Selecione uma categoria</option>
                {listCategorias}
            </select>
        ) : (
            <p>Carregando categorias...</p>
        )
    );
};

export default ProductCategory;