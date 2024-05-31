import styles from './styles.module.css';

import { useState } from 'react';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const ManageProductPage = () => {
    const [step, setStep] = useState(1);
    const [product, setProduct] = useState<ProductCreateDTO>({
        name: '',
        description: '',
        price: 0,
        quantityInStock: 0,
        category: { name: '' },
        colors: [],
        sizes: [],
        images: []
    });

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value
        }));
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

    const handleCancel = () => {
        // Lógica para abrir modal de cancelamento
        console.log('Cancelar');
    };

    const handlePreview = () => {
        // Lógica para abrir modal de pré-visualização
        console.log('Pré-visualizar');
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
            {step === 1 && <Step1 product={product} handleChange={handleChange} />}
            {step === 2 && <Step2 product={product} handleChange={handleChange} handleAddColor={handleAddColor} handleAddSize={handleAddSize} handleCategoryChange={handleCategoryChange} />}
            {step === 3 && <Step3 handleAddImage={handleAddImage} />}
            <div className={styles.navigation}>
                <button onClick={handleBack} disabled={step === 1}>Voltar</button>
                {step < 3 ? (
                    <button onClick={handleNext}>Próximo</button>
                ) : (
                    <button onClick={handleSubmit}>Adicionar Produto</button>
                )}
                <button onClick={handleCancel}>Cancelar</button>
                <button onClick={handlePreview}>Pré-visualizar</button>
            </div>
        </article>
    );
};

export default ManageProductPage;