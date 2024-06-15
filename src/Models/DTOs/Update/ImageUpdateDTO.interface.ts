interface ImageUpdateDTO extends MinimumEntity, Deletable {
    url: string;
    file?: File;
    isCover?: boolean;
};