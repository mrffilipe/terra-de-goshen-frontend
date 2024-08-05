interface ProductBaseDTO {
    name: string;
    description: string;
    price: number;
    backgroundText: string;
    images: ImageBaseDTO[];
    colors: ColorBaseDTO[];
    sizes: SizeBaseDTO[];
    category: CategoryBaseDTO;
    quantityInStock: number;
};