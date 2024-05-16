import ImageRef from "./ImageRef"
import SizeRef from "./SizeRef"
import CategoryRef from "./CategoryRef"

class Product implements Entity {
    name: string
    description: string
    price: number
    images: Array<ImageRef>
    colors: Color
    sizes: Array<SizeRef>
    category: CategoryRef
    quantityInStock: number
    id: string
    createdAt: string
    updatedAt: string

    constructor(
        name: string,
        description: string,
        price: number,
        images: Array<ImageRef>,
        colors: Color,
        sizes: Array<SizeRef>,
        category: CategoryRef,
        quantityInStock: number,
        id?: string,
        createdAt?: string,
        updatedAt?: string
    ) {
        this.name = name
        this.description = description
        this.price = price
        this.images = images
        this.colors = colors
        this.sizes = sizes
        this.category = category
        this.quantityInStock = quantityInStock
        this.id = id || ""
        this.createdAt = createdAt || ""
        this.updatedAt = updatedAt || ""
    }
}

export default Product