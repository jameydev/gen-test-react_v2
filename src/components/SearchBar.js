import { useState } from 'react';

import styles from './SearchBar.module.css';

export default function SearchBar(props) {
    const defaultText = 'Search for ...';
    const [placeholder, setPlaceholder] = useState(defaultText);
    
    const placeholderHandler = event => {
        const sampleSearches = [
            'movies',
            'pizza',
            'chinese food',
            'coffee',
            'Java programming',
            'React.js tutorials',
            'CRUD apps',
            'MERN stack',
            'Android apps',
            'iOS apps',
            'React Native apps',
            'Node.js tutorials',
            'JavaScript docs',
            'CSS tutorials',
            'Artificial Intelligence',
            'DIY tutorials',
            'cats',
            'dogs',
            'books',
            'music',
            'video games',
            'programming',
            'web development',
            'cooking',
            'gardening',
            'knitting',
            'crocheting',
            'sewing',
            'painting',
            'drawing',
            'writing'
        ];

        const randomIndex = Math.floor(Math.random() * sampleSearches.length);
        const randomSearch = sampleSearches[randomIndex];

        setPlaceholder(`Search for ${randomSearch}...`);
    };

    return (
        <label htmlFor="search-bar">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input 
                name="search-bar"
                id={styles.searchBar} 
                type="search"
                placeholder={placeholder}
                onFocus={placeholderHandler}
                onChange={props.onUpdateSearch} 
            />
        </label>
    );
}