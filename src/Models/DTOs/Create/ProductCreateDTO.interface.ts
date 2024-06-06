interface ProductCreateDTO {
    name: string;
    description: string;
    price: number;
    backgroundText: string;
    images: ImageCreateDTO[];
    colors: ColorCreateDTO[];
    sizes: SizeCreateDTO[];
    category: CategoryCreateDTO;
    quantityInStock: number;
}