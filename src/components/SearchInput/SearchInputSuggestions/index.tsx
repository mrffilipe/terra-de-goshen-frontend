import styles from '../styles.module.css';

import { useState, useCallback } from 'react';
import { debounce } from 'lodash';

type Props = {
    placeholder: string;
    searchBackend: (query: string) => Promise<any[]>;
    onResultSelect: (result: any) => void;
};

const SearchInputSuggestions = ({ placeholder, searchBackend, onResultSelect }: Props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchSearchResults = useCallback(
        debounce(async (query: string) => {
            if (!query) {
                setSearchResults([]);
                return;
            }

            setIsLoading(true);
            try {
                const results = await searchBackend(query);
                setSearchResults(results);
            } catch (error) {
                console.error('Erro ao buscar resultados:', error);
            } finally {
                setIsLoading(false);
            }
        }, 300),
        [searchBackend]
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        fetchSearchResults(value);
    };

    const handleResultClick = (result: any) => {
        onResultSelect(result);
    };

    return (
        <div className={styles.search_container}>
            <input
                type="text"
                placeholder={placeholder}
                value={searchTerm}
                onChange={handleInputChange}
                className={styles.search_input}
            />
            {isLoading && <div>Carregando...</div>}
            {searchResults.length > 0 && (
                <ul className={styles.search_results}>
                    {searchResults.map((result) => (
                        <li key={result.id} onClick={() => handleResultClick(result)}>
                            {result.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchInputSuggestions;