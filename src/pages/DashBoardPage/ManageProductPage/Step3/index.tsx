import styles from './styles.module.css';

type Props = {
  handleAddImage: (image: { file: File, isCover?: boolean }) => void;
};

const Step3 = (props: Props) => {
  return (
    <div className={styles.step3}>
      {/* Implementar upload de imagens */}
      <button onClick={() => props.handleAddImage({ file: new File([''], 'imagemExemplo.jpg') })}>Adicionar Imagem</button>
    </div>
  );
};

export default Step3;