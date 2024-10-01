import styles from './styles.module.css';

import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Form from '../../../../components/Form';
import Button from '../../../../components/Button';
import ProductColors from '../../../../components/ProductColors';
import ProductSizes from '../../../../components/ProductSizes';
import ProductCategory from '../../../../components/ProductCategory';
import ProductImages from '../../../../components/ProductImages';

const ProductEditorPage = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [costPrice, setCostPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [colors, setColors] = useState<ColorCreateDTO[] | ColorUpdateDTO[]>([]);
    const [sizes, setSizes] = useState<SizeCreateDTO[] | SizeUpdateDTO[]>([]);
    const [category, setCategory] = useState<CategoryCreateDTO | CategoryUpdateDTO>({ id: '' });
    const [images, setImages] = useState<ImageCreateDTO[] | ImageUpdateDTO[]>([]);

    const { productId } = useParams();

    return (
        <div className={styles.product_editor_page}>
            <h2>{productId ? `Editar produto (${productId})` : 'Novo produto'}</h2>

            <section className={styles.product_section}>
                <Form>
                    <label>
                        Nome
                        <input
                            type="text"
                            value={name}
                            placeholder="Camiseta Gola Polo V"
                            required
                            onChange={e => setName(e.target.value)}
                        />
                    </label>
                    <label>
                        Descrição
                        <textarea
                            value={description}
                            placeholder='Digite a descrição do produto aqui.'
                            required
                            onChange={e => setDescription(e.target.value)}
                        />
                    </label>
                    <label>
                        Preço de venda (R$)
                        <input
                            type="number"
                            value={price}
                            placeholder="R$ 109,90"
                            required
                            onChange={e => setPrice(parseFloat(e.target.value))}
                        />
                    </label>
                    <label>
                        Preço de custo (R$)
                        <input
                            type="number"
                            value={costPrice}
                            placeholder="R$ 89,90"
                            required
                            onChange={e => setCostPrice(parseFloat(e.target.value))}
                        />
                    </label>
                    <label>
                        Estoque (Un.)
                        <input
                            type="number"
                            value={stock}
                            placeholder="10"
                            required
                            onChange={e => setStock(parseInt(e.target.value))}
                        />
                    </label>
                    <ProductColors value={colors} onChange={e => setColors(e)} />
                    <ProductSizes value={sizes} onChange={e => setSizes(e)} />
                    <ProductCategory value={category} onChange={e => setCategory(e)} />
                    <ProductImages value={images} productId={productId} onChange={e => setImages(e)} />
                    <Button type='submit' value={
                        productId ? 'Salvar alterações' : 'Cadastrar produto'
                    }
                    />
                </Form>
            </section>
        </div>
    );
};

export default ProductEditorPage;