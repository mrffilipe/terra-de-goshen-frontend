interface ProductCard {
    id: string
    name: string
    price: string
    imageUrl: string
    imageAlt?: string
    onClick: (event: any) => void
    editable?: boolean
}