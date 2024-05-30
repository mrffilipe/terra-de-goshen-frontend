interface ProductResponseDTO extends Entity {
    name: string;
    description: string;
    price: number;
    images: ImageResponseDTO[];
    colors: ColorResponseDTO[];
    sizes: SizeResponseDTO[];
    category: CategoryResponseDTO;
    quantityInStock: number;
}