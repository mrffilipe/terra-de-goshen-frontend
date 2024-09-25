interface ProductResponseDTO extends BaseEntity, ProductBaseDTO {
    images?: ImageResponseDTO[];
    colors?: ColorResponseDTO[];
    sizes?: SizeResponseDTO[];
    category: CategoryResponseDTO;
};