import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function SearchBar ({ callback, keyword }){

    const handleChange = function(e){
        callback(e.target.value);
    }
    return(
        <div className={ 'Searchbar' }>
            찾기: <input type='text' placeholder='search' value={''} onChange={handleChange} />
        </div>
    );
}

SearchBar.PropTypes = {
    callback: PropTypes.func.isRequired,
    keyword: PropTypes.string.isRequired
}