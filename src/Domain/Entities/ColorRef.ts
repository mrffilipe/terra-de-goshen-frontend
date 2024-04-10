class ColorRef implements Entity {
    color: ColorVO
    imageId: string
    id: string
    createdAt: string
    updatedAt: string

    constructor(
        color: ColorVO,
        imageId?: string,
        id?: string,
        createdAt?: string,
        updatedAt?: string
    ) {
        this.color = color
        this.imageId = imageId || ""
        this.id = id || ""
        this.createdAt = createdAt || ""
        this.updatedAt = updatedAt || ""
    }
}