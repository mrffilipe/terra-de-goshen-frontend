import styles from './styles.module.css';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type Props = {
    backgroundText: string;
    value: ImageResponseDTO[] | ImageCreateDTO[] | ImageUpdateDTO[];
};

const ProductCover = (props: Props) => {
    const [selectedImage, setSelectedImage] = useState(props.value[0].url);

    const handleImageSelect = (url: string): void => {
        setSelectedImage(url);
    };

    const backgroundTextList = Array.from(props.backgroundText).map((letter, index) => <span key={index}>{letter}</span>);

    const listImages = props.value.map(image => (
        <li key={image.id ?? uuidv4()} role='button' onClick={() => handleImageSelect(image.url!)}>
            <div style={{ backgroundImage: `url('${image.url}')` }}></div>
        </li>
    ));

    return (
        <section className={styles.product_cover}>
            <div className={styles.main_cover} style={{ backgroundImage: selectedImage ? `url('${selectedImage}')` : undefined }}>
                <div className={styles.background_text}>
                    {backgroundTextList}
                </div>
            </div>
            <div className={styles.covers}>
                <ul className={styles.covers_list}>
                    {listImages}
                </ul>
            </div>
        </section>
    );
};

export default ProductCover;