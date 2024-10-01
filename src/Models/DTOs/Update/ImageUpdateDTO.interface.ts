interface ImageUpdateDTO extends Deletable {
    id?: string;
    file?: File;
    isCover: boolean;
};