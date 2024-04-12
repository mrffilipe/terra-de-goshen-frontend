class CategoryRef implements Entity {
    category: CategoryVO
    id: string
    createdAt: string
    updatedAt: string

    constructor(
        category: CategoryVO,
        id?: string,
        createdAt?: string,
        updatedAt?: string
    ) {
        this.category = category
        this.id = id || ""
        this.createdAt = createdAt || ""
        this.updatedAt = updatedAt || ""
    }
}

export default CategoryRef