import styles from './styles.module.css';

import { useState } from 'react';
import { FilterList } from '@mui/icons-material';

type Props = {

};

const ProductHeader = (props: Props) => {
    const [filterMenuOpen, setFilterMenuOpen] = useState<boolean>();

    const handleSetFilterMenuOpen = () => {
        setFilterMenuOpen(prev => !prev);
    };

    return (
        <div className={styles.product_header}>
            <div className={styles.search_bar}>
                <input type="search" placeholder='Buscar produtos' />
            </div>
            <div className={styles.actions}>
                <div className={styles.order_by}>
                    <label>
                        Ordenar por
                        <select>
                            <option value="1">Mais relevante</option>
                            <option value="2">Menor preço</option>
                            <option value="3">Maior preço</option>
                        </select>
                    </label>
                </div>
                <div className={styles.filters}>
                    <button className={styles.btn_open_filter_menu} onClick={handleSetFilterMenuOpen}>
                        <FilterList />
                    </button>
                    <div className={filterMenuOpen ? styles.filter_container : styles.hide_menu}>
                        Teste
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductHeader;