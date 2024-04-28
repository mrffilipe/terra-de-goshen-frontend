import styles from './styles.module.css'

import { useEffect, useState } from 'react'

import ImageRef from '../../../Domain/Entities/ImageRef'

type Props = {
    images: ImageRef[] | null
    editable?: boolean
    onCloseProduct: () => void
}

const ProductCover = (props: Props) => {
    const [imageList, setImageList] = useState<string[]>([])
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    useEffect(() => {
        if (props.images && props.images.length > 0) {
            const urls = props.images.map(image => image.image.imageUrl)

            setImageList(urls)
            setSelectedImage(urls[0])
        }
    }, [props.images])

    const listImages = imageList.map((image, index) => (
        <li key={index} onClick={() => handleImageSelect(image)}>
            <div style={{ backgroundImage: `url('${image}')` }}></div>
        </li>
    ))

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null

        if (file) {
            const reader = new FileReader()

            reader.onload = () => {
                setImageList(oldList => [...oldList, reader.result as string])
                setSelectedImage(reader.result as string)
            }

            reader.readAsDataURL(file)
        }
    }

    const handleImageSelect = (imageUrl: string) => {
        setSelectedImage(imageUrl)
    }

    return (
        <section className={styles.product_cover}>
            <div className={styles.main_cover} style={{
                backgroundImage: selectedImage ? `url('${selectedImage}')` : undefined
            }}>
                {
                    (props.editable && imageList.length === 0) && (
                        <span>Adicione pelo menos uma imagem</span>
                    )
                }
            </div>
            <div className={styles.covers}>
                <ul className={styles.covers_list}>
                    {listImages}
                </ul>
                {
                    props.editable && (
                        <div className={styles.add_cover_btn}>
                            <span>+</span>
                            <input type="file" accept='image/*' onChange={handleFileChange} />
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default ProductCover