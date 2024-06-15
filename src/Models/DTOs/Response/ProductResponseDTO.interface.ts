interface ProductResponseDTO extends Entity {
    name: string;
    description: string;
    price: number;
    backgroundText: string;
    images: ImageResponseDTO[];
    colors: ColorResponseDTO[];
    sizes: SizeResponseDTO[];
    category: CategoryResponseDTO;
    quantityInStock: number;
};