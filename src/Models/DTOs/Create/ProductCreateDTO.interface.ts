interface ProductCreateDTO {
    name: string;
    description: string;
    price: number;
    backgroundText: string;
    images: ImageUpdateDTO[];
    colors: ColorUpdateDTO[];
    sizes: SizeUpdateDTO[];
    category: CategoryUpdateDTO;
    quantityInStock: number;
};