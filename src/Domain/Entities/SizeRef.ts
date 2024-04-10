class SizeRef implements Entity {
    size: SizeVO
    id: string
    createdAt: string
    updatedAt: string

    constructor(
        size: SizeVO,
        id?: string,
        createdAt?: string,
        updatedAt?: string
    ) {
        this.size = size
        this.id = id || ""
        this.createdAt = createdAt || ""
        this.updatedAt = updatedAt || ""
    }
}