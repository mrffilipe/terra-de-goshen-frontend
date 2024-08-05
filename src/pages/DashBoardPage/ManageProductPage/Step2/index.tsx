import styles from './styles.module.css';

import { useEffect, useState } from 'react';

import {
  useGetAllCategories,
  useGetAllColors,
  useGetAllSizes
} from '../../../../hooks/product/useProductService';

type ProductDetails = {
  category: CategoryBaseDTO;
  colors: ColorBaseDTO[];
  sizes: SizeBaseDTO[];
};

type Props = {
  productDetails: ProductDetails;
  onChange: (event: ProductDetails) => void;
};

const Step2 = (props: Props) => {
  const [getAllCategories] = useGetAllCategories();
  const [getAllColors] = useGetAllColors();
  const [getAllSizes] = useGetAllSizes();
  const [fetchedCategories, setFetchedCategories] = useState<CategoryResponseDTO[]>([]);
  const [fetchedColors, setFetchedColors] = useState<ColorResponseDTO[]>([]);
  const [fetchedSizes, setFetchedSizes] = useState<SizeResponseDTO[]>([]);

  useEffect(() => {
    (async () => {
      setFetchedCategories(await getAllCategories());
      setFetchedColors(await getAllColors());
      setFetchedSizes(await getAllSizes());
    })();
  }, []);

  const listOfCategoryOptions = fetchedCategories.map(el => (
    <option key={el.id} value={el.id}>{el.name}</option>
  ));

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = fetchedCategories.find(c => c.id === e.target.value);

    if (selectedCategory !== undefined) {
      props.onChange({
        ...props.productDetails,
        category: { id: selectedCategory.id }
      });
    }
  };

  const handleChangeColor = (event: React.ChangeEvent<HTMLInputElement>, colorId: string) => {
    const { checked } = event.target;
    const updatedColors = checked
      ? [...props.productDetails.colors, { id: colorId }]
      : props.productDetails.colors.filter(color => color.id !== colorId);

    props.onChange({
      ...props.productDetails,
      colors: updatedColors
    });
  };

  const handleChangeSize = (event: React.ChangeEvent<HTMLInputElement>, sizeId: string) => {
    const { checked } = event.target;
    const updatedSizes = checked
      ? [...props.productDetails.sizes, { id: sizeId }]
      : props.productDetails.sizes.filter(size => size.id !== sizeId);

    props.onChange({
      ...props.productDetails,
      sizes: updatedSizes
    });
  };

  const colorList = fetchedColors.map(el => {
    return (
      <div key={el.id} className={styles.color}>
        <label>
          <input
            type="checkbox"
            value={el.value}
            checked={props.productDetails.colors.some(color => color.id === el.id)}
            onChange={e => handleChangeColor(e, el.id)}
          />
          {el.value}
        </label>
      </div>
    );
  });

  const sizeList = fetchedSizes.map(el => (
    <div key={el.id} className={styles.size}>
      <label>
        <input
          type="checkbox"
          value={el.value}
          checked={props.productDetails.sizes.some(size => size.id === el.id)}
          onChange={e => handleChangeSize(e, el.id)}
        />
        {el.value}
      </label>
    </div>
  ));

  return (
    <div className={styles.step2}>
      <div className={styles.category}>
        <select
          value={props.productDetails.category.id}
          onChange={handleChangeCategory}
        >
          <option value="">Selecione uma categoria</option>
          {listOfCategoryOptions}
        </select>
      </div>
      <div className={styles.colors}>
        <label>Selecione as cores:</label>
        {colorList}
      </div>
      <div className={styles.sizes}>
        <label>Selecione os tamanhos:</label>
        {sizeList}
      </div>
    </div>
  );
};

export default Step2;