import styles from './styles.module.css'

import { useEffect, useState } from 'react'

type Props = {
    value: Image
    editable?: boolean
    onChange?: (images: Image) => void
    onCloseProduct: () => void
}

const ProductCover = (props: Props) => {
    const [images, setImages] = useState<Image>({
        existingImages: [],
        newImages: [],
        deletedImages: [],
        updatedImages: []
    })
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    useEffect(() => {
        if (props.value) {
            setImages({
                existingImages: props.value.existingImages,
                newImages: props.value.newImages ?? [],
                deletedImages: props.value.deletedImages ?? [],
                updatedImages: props.value.updatedImages ?? []
            });

            if (props.value.existingImages.length > 0) {
                setSelectedImage(props.value.existingImages[0].imageUrl);
            }
        }
    }, [props.value])

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null

        if (file) {
            const newImage: NewImage = { file }
            const updatedImages = { ...images, newImages: [...(images.newImages ?? []), newImage] }

            setImages(updatedImages)
            props.onChange && props.onChange(updatedImages)

            const reader = new FileReader()

            reader.onload = () => {
                setSelectedImage(reader.result as string)
            }

            reader.readAsDataURL(file)
        }
    }

    const handleImageSelect = (imageUrl: string) => {
        setSelectedImage(imageUrl)
    }

    const handleDeleteImage = (imageId: string) => {
        const existingImage = images.existingImages.find(image => image.id === imageId)

        let updatedImages

        if (existingImage) {
            updatedImages = {
                ...images,
                existingImages: images.existingImages.filter(image => image.id !== imageId),
                deletedImages: [...(images.deletedImages ?? []), { id: imageId }]
            }
        } else {
            updatedImages = {
                ...images,
                newImages: (images.newImages ?? []).filter(image => image.file.name !== imageId)
            }
        }

        setImages(updatedImages)

        props.onChange && props.onChange(updatedImages)
    }

    const handleEditImage = (imageId: string, newFile: File) => {
        const updatedImage: UpdatedImage = { id: imageId, file: newFile }
        const updatedImages = { ...images, updatedImages: [...(images.updatedImages ?? []), updatedImage] }

        setImages(updatedImages)
        props.onChange && props.onChange(updatedImages)
    }

    const listImages = [...images.existingImages.map(img => img.imageUrl), ...(images.newImages ?? []).map(img => URL.createObjectURL(img.file))].map((image, index) => (
        <li key={index} onClick={() => handleImageSelect(image)}>
            <div style={{ backgroundImage: `url('${image}')` }}></div>
        </li>
    ))

    return (
        <section className={styles.product_cover}>
            <div className={styles.main_cover} style={{
                backgroundImage: selectedImage ? `url('${selectedImage}')` : undefined
            }}>
                {
                    (props.editable && images.existingImages.length === 0 && images.newImages?.length === 0) && (
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