import React from 'react';

import './search-panel.css'


const SearchPanel = () => {
    return (
    <input type = "text" 
        placeholder = "Type to search"
        className = "form-control search-input"/>
    );
};

export default SearchPanel;