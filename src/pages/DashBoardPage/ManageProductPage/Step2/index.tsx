import styles from './styles.module.css';

import { useState } from 'react';

type Props = {
  product: ProductCreateDTO | ProductUpdateDTO;
  fetchedColors: ColorResponseDTO[];
  fetchedSizes: SizeResponseDTO[];
  onChange: (e: { category: CategoryUpdateDTO, colors: ColorUpdateDTO[], sizes: SizeUpdateDTO[] }) => void;
};

const Step2 = (props: Props) => {
  const [categories, setCategories] = useState<CategoryResponseDTO[]>([]);
  const [colors, setColors] = useState<ColorResponseDTO[]>([]);
  const [sizes, setSizes] = useState<SizeResponseDTO[]>([]);

  const categoryList = categories.map(el => (
    <option key={el.id} value={el.id}>{el.name}</option>
  ));

  const colorList = props.product.colors.map(el => (
    <div className={styles.color}>
      <select
        name="colors"
        value=""
        onChange={ }>
        <option value="">Selecione uma cor</option>
        {colors.map(color => (
          <option key={color.id} value={color.id}>{color.value}</option>
        ))}
      </select>
      <span key={el.id} style={{ backgroundColor: el.value }}></span>
    </div>
  ));

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = categories.find(cat => cat.id === e.target.value);

    if (selectedCategory !== undefined) {
      props.onChange({ ...props.product, category: { id: selectedCategory.id, name: selectedCategory.name, isDeleted: false } })
    }
  };

  const handleChangeColors = (e: ColorUpdateDTO[]) => {
    props.onChange({...props.product, colors: })
  };

  const handleAddColor = () => {

  };

  return (
    <div className={styles.step2}>
      <div className={styles.category}>
        <select
          name="category"
          value={props.product.category.name}
          onChange={handleChangeCategory}>
          <option value="">Selecione uma categoria</option>
          {categoryList}
        </select>
      </div>
      <div className={styles.colors}>
        {colorList}
        <button onClick={() => props.handleAddColor({ value: 'corExemplo' })}>Adicionar Cor</button>
      </div>
      <div className={styles.sizes}>
        {/* Implementar lista de tamanhos */}
        <button onClick={() => props.handleAddSize({ value: 'tamanhoExemplo' })}>Adicionar Tamanho</button>
      </div>
    </div>
  );
};

export default Step2;