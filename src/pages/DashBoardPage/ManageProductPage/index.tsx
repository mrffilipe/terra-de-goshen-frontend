import styles from './styles.module.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Loading from '../../../components/Loading';
import ProductModal from '../../../components/ProductModal';

import { useGetProductById } from '../../../hooks/product/useProductService';

const ManageProductPage = () => {
    const [getProductById] = useGetProductById();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showPreview, setShowPreview] = useState<boolean>(false);
    const [step, setStep] = useState(1);
    const [product, setProduct] = useState<ProductCreateDTO | ProductResponseDTO | ProductUpdateDTO | undefined>({
        name: '',
        description: '',
        price: 0,
        backgroundText: '',
        quantityInStock: 0,
        category: { name: '' },
        colors: [],
        sizes: [],
        images: []
    });

    const { productId } = useParams();

    useEffect(() => {
        (async () => {
            if (productId) {
                setIsLoading(true);

                const fetchedProduct = await getProductById(productId);

                setProduct(fetchedProduct);
                console.log(fetchedProduct)
                setIsLoading(false);
            }
        })();
    }, [getProductById])

    const handleCancel = () => {
        // Lógica para abrir modal de cancelamento
        console.log('Cancelar');
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
    };

    const handleChangeStep1 = (event: { name: string, description: string, price: number, backgroundText: string, quantityInStock: number }) => {
        if (product !== undefined) {
            const productUpdated: ProductCreateDTO | ProductResponseDTO | ProductUpdateDTO = {
                ...product,
                name: event.name,
                description: event.description,
                price: event.price,
                backgroundText: event.backgroundText,
                quantityInStock: event.quantityInStock
            };

            setProduct(productUpdated);
        }
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setProduct((prevProduct) => ({
            ...prevProduct,
            category: { name: e.target.value }
        }));
    };

    const handleAddColor = (color: { value: string, imageId?: string }) => {
        setProduct((prevProduct) => ({
            ...prevProduct,
            colors: [...prevProduct.colors, color]
        }));
    };

    const handleAddSize = (size: { value: string }) => {
        setProduct((prevProduct) => ({
            ...prevProduct,
            sizes: [...prevProduct.sizes, size]
        }));
    };

    const handleAddImage = (image: { file: File, isCover?: boolean }) => {
        setProduct((prevProduct) => ({
            ...prevProduct,
            images: [...prevProduct.images, image]
        }));
    };

    const handleSubmit = () => {
        // Enviar produto para o backend
        console.log(product);
    };

    const handlePreview = () => {
        if (product !== undefined) {
            setShowPreview(true);
        } else {
            setShowPreview(false);
        }
    };

    const steps = [
        { number: 1, name: 'Atributos Básicos' },
        { number: 2, name: 'Cores, Tamanhos e Categoria' },
        { number: 3, name: 'Imagens' }
    ];

    return (
        <article className={styles.manage_product_page}>
            <div className={styles.step_indicator}>
                {steps.map((s) => (
                    <span key={s.number} className={step === s.number ? styles.active_step : ''}>
                        {s.number}. {s.name}
                    </span>
                ))}
            </div>
            {step === 1 && <Step1 product={product!} onChange={handleChangeStep1} />}
            {step === 2 && <Step2
                product={product}
                handleChange={handleChange}
                handleAddColor={handleAddColor}
                handleAddSize={handleAddSize}
                handleCategoryChange={handleCategoryChange} />}
            {step === 3 && <Step3 handleAddImage={handleAddImage} />}
            <div className={styles.navigation}>
                <button onClick={handleCancel}>Cancelar</button>
                <button onClick={handleBack} disabled={step === 1}>Voltar</button>
                {step < 3 ? (
                    <button onClick={handleNext}>Próximo</button>
                ) : (
                    <button onClick={handleSubmit}>Adicionar Produto</button>
                )}
                <button onClick={handlePreview}>Pré-visualizar</button>
            </div>
            <Loading isLoading={isLoading} />
            {showPreview && <ProductModal product={product!} onCloseProduct={() => setShowPreview(prev => !prev)} />}
        </article>
    );
};

export default ManageProductPage;