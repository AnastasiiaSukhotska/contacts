import { useState } from "react";
import '../styles/Search.css';

export function Search ( {placeholder, onSearching} ) {

    const [ searchValue, setSearchValue] = useState('');
    const onSearchChange = (value, event) => {
      
        setSearchValue(value);
        onSearching(searchValue);
        console.log(value, searchValue);
        
    }


    return (
        <input
            className="search-area"
            type='text'
            onChange={({target}, event) => onSearchChange(target.value, event)}
            placeholder={placeholder ? placeholder : 'Search '}
        ></input>
    );
}