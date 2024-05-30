interface SizeCreateDTO {
    name: string;
    description: string;
    price: number;
    images: ImageCreateDTO[];
    colors: ColorCreateDTO[];
    sizes: SizeCreateDTO[];
    category: CategoryCreateDTO;
    quantityInStock: number;
}