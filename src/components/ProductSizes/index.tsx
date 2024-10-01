import styles from './styles.module.css';

import { useCallback, useEffect, useState } from 'react';

import { useGetAllSizes } from '../../hooks/product/useProductService';

type Props = {
    value: SizeCreateDTO[] | SizeUpdateDTO[];
    onChange: (event: SizeCreateDTO[] | SizeUpdateDTO[]) => void;
};

const ProductSizes = ({ value, onChange }: Props) => {
    const [getAllSizes] = useGetAllSizes();
    const [allSizes, setAllSizes] = useState<SizeResponseDTO[] | undefined>([]);

    const fetchAndSetSizes = useCallback(async () => {
        const fetchedSizes = await getAllSizes();
        setAllSizes(fetchedSizes);
    }, [getAllSizes]);

    useEffect(() => {
        fetchAndSetSizes();
    }, [fetchAndSetSizes]);

    const isSizeSelected = (sizeId: string) => {
        return value.some(size => size.id === sizeId);
    };

    const handleSizeChange = (size: SizeResponseDTO) => {
        let updatedSizes;

        if (isSizeSelected(size.id)) {
            updatedSizes = value.filter(s => s.id !== size.id);
        } else {
            updatedSizes = [...value, size];
        }

        onChange(updatedSizes);
    };

    const sizeList = allSizes?.map(size => (
        <li key={size.id} className={styles.size_item}>
            <label>
                <input
                    type="checkbox"
                    checked={isSizeSelected(size.id)}
                    onChange={() => handleSizeChange(size)}
                />
                <div>
                    <p>{size.value}</p>
                </div>
            </label>
        </li>
    ));

    return (
        allSizes && allSizes.length > 0 ? (
            <div className={styles.product_sizes}>
                <label>Selecione os tamanhos</label>
                <ul className={styles.size_list}>
                    {sizeList}
                </ul>
            </div>
        ) : (
            <p>Carregando tamanhos...</p>
        )
    );
};

export default ProductSizes;