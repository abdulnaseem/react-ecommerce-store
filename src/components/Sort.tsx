import React from "react"
import { useDispatch } from "react-redux";
import { filterBySortChange, toggleFilter } from "../redux/slices/productsSlice";


const Sort: React.FC = () => {

    const dispatch = useDispatch();

    return (
        <div className="flex mb-4 mt-4">
            <button className="w-[100px] ms-[6.25rem] border p-2 rounded" onClick={() => dispatch(toggleFilter())}>Filter</button>
            <select
                onChange={(e) => dispatch(filterBySortChange(e.target.value))}
                className="border p-2 rounded text-center ms-5"
                >
                <option value="">Sort By</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
                <option value="newest">Newest</option>
            </select>
        </div>
    )
}

export default Sort;