import { useState } from 'react';

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    
    const updateSearchTermHandler = event => {
        setSearchTerm(event.target.value);
    };

    return <input type="search" onChange={updateSearchTermHandler} value={searchTerm} />;
}