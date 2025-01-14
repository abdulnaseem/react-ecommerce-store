import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterBySearch } from "../redux/slices/productsSlice";

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        dispatch(filterBySearch(e.target.value));
    }

    return (
        <input 
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={handleSearch}
        />
    )
}

export default SearchBar;