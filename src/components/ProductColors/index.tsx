import styles from './styles.module.css';

import { useCallback, useEffect, useState } from 'react';

import { useGetAllColors } from '../../hooks/product/useProductService';

type Props = {
    value: ColorCreateDTO[] | ColorUpdateDTO[];
    onChange: (event: ColorCreateDTO[] | ColorUpdateDTO[]) => void;
};

const ProductColors = ({ value, onChange }: Props) => {
    const [getAllColors] = useGetAllColors();
    const [allColors, setAllColors] = useState<ColorResponseDTO[] | undefined>([]);

    const fetchAndSetColors = useCallback(async () => {
        const fetchedColors = await getAllColors();
        setAllColors(fetchedColors);
    }, [getAllColors]);

    useEffect(() => {
        fetchAndSetColors();
    }, [fetchAndSetColors]);

    const isColorSelected = (colorId: string) => {
        return value.some(color => color.id === colorId);
    };

    const handleColorChange = (color: ColorResponseDTO) => {
        let updatedColors;

        if (isColorSelected(color.id)) {
            updatedColors = value.filter(c => c.id !== color.id);
        } else {
            updatedColors = [...value, color];
        }

        onChange(updatedColors);
    };

    const colorList = allColors?.map(color => (
        <li key={color.id} className={styles.color_item}>
            <label>
                <input
                    type="checkbox"
                    checked={isColorSelected(color.id)}
                    onChange={() => handleColorChange(color)}
                />
                <div style={{ backgroundColor: color.value }}></div>
            </label>
        </li>
    ));

    return (
        allColors && allColors.length > 0 ? (
            <div className={styles.product_colors}>
                <label>Selecione as cores</label>
                <ul className={styles.color_list}>
                    {colorList}
                </ul>
            </div>
        ) : (
            <p>Carregando cores...</p>
        )
    );
};

export default ProductColors;