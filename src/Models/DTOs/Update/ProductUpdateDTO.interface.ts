interface ProductUpdateDTO extends MinimumEntity, Deletable {
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