import styles from './styles.module.css';

type Props = {
  product: {
    category: { name: string };
    colors: { value: string; imageId?: string }[];
    sizes: { value: string }[];
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleAddColor: (color: { value: string, imageId?: string }) => void;
  handleAddSize: (size: { value: string }) => void;
};

const Step2 = (props: Props) => {
  return (
    <div className={styles.step2}>
      <div className={styles.category}>
        <select
          name="category"
          value={props.product.category.name}
          onChange={props.handleCategoryChange}
        >
          <option value="">Selecione uma categoria</option>
          {/* Adicione as opções de categoria aqui */}
        </select>
      </div>
      <div className={styles.colors}>
        {/* Implementar lista de cores */}
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