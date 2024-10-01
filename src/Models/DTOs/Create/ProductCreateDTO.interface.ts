interface ProductCreateDTO extends ProductBaseDTO {
    images: ImageCreateDTO[];
    colors: ColorCreateDTO[];
    sizes: SizeCreateDTO[];
    category: CategoryCreateDTO[];
};