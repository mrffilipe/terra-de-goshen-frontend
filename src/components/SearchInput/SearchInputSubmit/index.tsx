import styles from '../styles.module.css';

import { useState } from 'react';

type Props = {
    placeholder: string;
    onSubmitSearch: (query: string) => void;
};

const SearchInputSubmit = ({ placeholder, onSubmitSearch }: Props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (searchTerm) {
            onSubmitSearch(searchTerm);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className={styles.search_container}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <button type="submit">
                    Buscar
                </button>
            </form>
        </div>
    );
};

export default SearchInputSubmit;