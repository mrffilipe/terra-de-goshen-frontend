class ImageRef implements Entity {
    image: ImageVO
    id: string
    createdAt: string
    updatedAt: string

    constructor(
        image: ImageVO,
        id?: string,
        createdAt?: string,
        updatedAt?: string
    ) {
        this.image = image
        this.id = id || ""
        this.createdAt = createdAt || ""
        this.updatedAt = updatedAt || ""
    }
}

export default ImageRef