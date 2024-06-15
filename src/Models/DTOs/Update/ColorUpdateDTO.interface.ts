interface ColorUpdateDTO extends MinimumEntity, Deletable {
    value: string;
    imageId?: string;
};