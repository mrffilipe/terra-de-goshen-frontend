interface ProductUpdateDTO extends MinimumEntity, Deletable {
    name: string;
    description: string;
    price: number;
    images: ImageResponseDTO[];
    colors: ColorResponseDTO[];
    sizes: SizeResponseDTO[];
    category: CategoryResponseDTO;
    quantityInStock: number;
}