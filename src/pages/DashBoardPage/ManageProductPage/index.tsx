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
    const [product, setProduct] = useState<ProductBaseDTO>({
        name: '',
        description: '',
        price: 0,
        backgroundText: '',
        images: [],
        colors: [],
        sizes: [],
        category: { id: '' },
        quantityInStock: 0
    });

    const { productId } = useParams();

    useEffect(() => {
        (async () => {
            if (productId !== undefined) {
                setIsLoading(true);

                const fetchedProduct = await getProductById(productId);
                if (fetchedProduct !== undefined) {
                    setProduct(fetchedProduct);
                }

                setIsLoading(false);
            }
        })();
    }, [])

    console.log(product)

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
        const productUpdated: ProductBaseDTO = {
            ...product,
            name: event.name,
            description: event.description,
            price: event.price,
            backgroundText: event.backgroundText,
            quantityInStock: event.quantityInStock
        };

        setProduct(productUpdated);
    };

    const handleChangeStep2 = (event: { category: CategoryBaseDTO, colors: ColorBaseDTO[], sizes: SizeBaseDTO[] }) => {
        const productUpdated: ProductBaseDTO = {
            ...product,
            category: event.category,
            colors: event.colors,
            sizes: event.sizes
        };

        setProduct(productUpdated);
    };

    const handleChangeStep3 = (event: { images: ImageBaseDTO[] }) => {
        const productUpdated: ProductBaseDTO = {
            ...product,
            images: event.images
        };

        setProduct(productUpdated);
    };

    const handleSubmit = () => {
        // Enviar produto para o backend
        console.log(product);
    };

    const handlePreview = () => {
        setShowPreview(prev => !prev);
    };

    const steps = [
        { number: 1, name: 'Atributos Básicos' },
        { number: 2, name: 'Cores, Tamanhos e Categoria' },
        { number: 3, name: 'Imagens' }
    ];

    return (
        <article className={styles.manage_product_page}>
            <div className={styles.step_indicator}>
                {steps.map(s => (
                    <span key={s.number} className={step === s.number ? styles.active_step : ''}>
                        {s.number}. {s.name}
                    </span>
                ))}
            </div>
            {step === 1 && <Step1
                productDetails={product}
                onChange={handleChangeStep1}
            />}
            {step === 2 && <Step2
                productDetails={product}
                onChange={handleChangeStep2}
            />}
            {step === 3 && <Step3
                productDetails={product}
                onChange={handleChangeStep3}
            />}
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
            {showPreview && <ProductModal
                product={product}
                onCloseProduct={() => setShowPreview(prev => !prev)}
            />}
        </article>
    );
};

export default ManageProductPage;