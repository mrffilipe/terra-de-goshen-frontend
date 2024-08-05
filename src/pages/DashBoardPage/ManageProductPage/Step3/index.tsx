import styles from './styles.module.css';

import { ChangeEvent } from 'react';

type ProductDetails = {
  images: ImageBaseDTO[];
};

type Props = {
  productDetails: ProductDetails;
  onChange: (event: ProductDetails) => void;
};

const Step3 = (props: Props) => {
  const handleAddImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImage: ImageBaseDTO = {
        file: e.target.files[0],
        isCover: false,
        isDeleted: false
      };

      props.onChange({
        ...props.productDetails,
        images: [...props.productDetails.images, newImage],
      });
    }
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = props.productDetails.images.map((image, i) => (
      i === index ? { ...image, isDeleted: true } : image
    ));

    props.onChange({
      ...props.productDetails,
      images: updatedImages,
    });
  };

  const handleSetCoverImage = (index: number) => {
    const updatedImages = props.productDetails.images.map((image, i) => ({
      ...image,
      isCover: i === index,
    }));

    props.onChange({
      ...props.productDetails,
      images: updatedImages,
    });
  };

  const imageList = props.productDetails.images
    .filter(image => !image.isDeleted)
    .map((image, index) => (
      <div key={index} className={styles.image}>
        {image.url && <img src={image.url} alt={`Image ${index}`} />}
        {image.file && <img src={URL.createObjectURL(image.file)} alt={`Image ${index}`} />}
        <div>
          <button type="button" onClick={() => handleRemoveImage(index)}>Remover</button>
          <button type="button" onClick={() => handleSetCoverImage(index)}>
            {image.isCover ? 'Capa' : 'Definir como capa'}
          </button>
        </div>
      </div>
    ));

  return (
    <div className={styles.step3}>
      <input type="file" onChange={handleAddImage} />
      <div className={styles.images}>{imageList}</div>
    </div>
  );
};

export default Step3;