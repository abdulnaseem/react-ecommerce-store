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
            className="text-sm p-2 w-[300px] text-black"
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={handleSearch}
        />
    )
}

export default SearchBar;