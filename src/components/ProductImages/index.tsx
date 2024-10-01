import styles from './styles.module.css';

import { useState } from 'react';

type Props = {
    value: ImageCreateDTO[] | ImageUpdateDTO[];
    onChange: (event: ImageCreateDTO[] | ImageUpdateDTO[]) => void;
    productId?: string;
};

const ProductImages = ({ value, onChange, productId }: Props) => {
    const [images, setImages] = useState<ImageCreateDTO[] | ImageUpdateDTO[]>(value);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (files) {
            const newImages: ImageCreateDTO[] = Array.from(files).map(file => ({
                file,
                isCover: false,
            }));

            const updatedImages = [...images.filter(img => 'file' in img), ...newImages];

            setImages(updatedImages as (ImageCreateDTO[] | ImageUpdateDTO[]));
            onChange(updatedImages as (ImageCreateDTO[] | ImageUpdateDTO[]));
        }
    };

    const handleSetCover = (index: number) => {
        const updatedImages = images.map((image, i) => {
            if ('file' in image) {
                return {
                    ...image,
                    isCover: i === index,
                } as ImageCreateDTO;
            } else {
                return {
                    ...image,
                    isCover: i === index,
                } as ImageUpdateDTO;
            }
        });

        setImages(updatedImages as (ImageCreateDTO[] | ImageUpdateDTO[]));
        onChange(updatedImages as (ImageCreateDTO[] | ImageUpdateDTO[]));
    };

    const handleDeleteImage = (index: number) => {
        let updatedImages;

        if (productId) {
            updatedImages = images.map((image, i) => {
                if ('isDeleted' in image) {
                    return i === index ? { ...image, isDeleted: true } : image;
                }
                return image;
            });
        } else {
            updatedImages = images.filter((_, i) => i !== index);
        }

        setImages(updatedImages as (ImageCreateDTO[] | ImageUpdateDTO[]));
        onChange(updatedImages as (ImageCreateDTO[] | ImageUpdateDTO[]));
    };

    return (
        <div className={styles.product_images}>
            <label>Imagens do produto</label>
            <input type="file" multiple onChange={handleImageUpload} />

            <div className={styles.image_list}>
                {images.map((image, index) => (
                    <div key={index} className={styles.image_item}>
                        <div className={styles.image_preview}>
                            {image.url ? (
                                <img src={image.url} alt={`Produto imagem ${index}`} />
                            ) : (
                                <img src={URL.createObjectURL(image.file)} alt={`Produto imagem ${index}`} />
                            )}
                        </div>
                        <div className={styles.actions}>
                            <button
                                type="button"
                                className={image.isCover ? styles.cover_button_active : styles.cover_button}
                                onClick={() => handleSetCover(index)}
                            >
                                {image.isCover ? 'Capa' : 'Selecionar'}
                            </button>
                            <button type="button" className={styles.delete_button} onClick={() => handleDeleteImage(index)}>
                                Excluir
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductImages;