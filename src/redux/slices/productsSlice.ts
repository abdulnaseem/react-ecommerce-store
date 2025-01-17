import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsState } from "../../types/product";
import { products } from '../../data/products';

const initialState: ProductsState = {
    allProducts: products,
    filteredProducts: products,
    isFilter: false,
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        filterBySearch: (state, action: PayloadAction<string>) => {
            const query = action.payload.toLocaleLowerCase();
            
            state.filteredProducts = state.allProducts.filter((product) =>
                product.name.toLocaleLowerCase().includes(query)
            );
        },
        filterByGender: (state, action: PayloadAction<string>) => {
            if(action.payload === '') {
                state.filteredProducts = state.allProducts;
            } else {
                state.filteredProducts = state.allProducts.filter(
                    (product) => product.category === action.payload
                );
            }
        },
        filterByColor: (state, action: PayloadAction<string[]>) => {
            const selectedColors = action.payload;
        
            if (selectedColors.length === 0) {
                state.filteredProducts = state.allProducts; // No filter applied
            } else {
                state.filteredProducts = state.allProducts.filter((product) =>
                    selectedColors.includes(product.color) // Match any of the selected colors
                );
            }
        },
        filterBySize: (state, action: PayloadAction<string[]>) => {
            const selectedSizes = action.payload;
        
            if (selectedSizes.length === 0) {
                state.filteredProducts = state.allProducts; // No filter applied
            } else {
                state.filteredProducts = state.allProducts.filter((product) =>
                    product.size.some((size) => selectedSizes.includes(size)) // Match any of the selected sizes
                );
            }
        },
        filterByColorAndSize: (state, action: PayloadAction<{ colors: string[]; sizes: string[] }>) => {
            const { colors, sizes } = action.payload;
        
            state.filteredProducts = state.allProducts.filter((product) => {
                const matchesColor = colors.length === 0 || colors.includes(product.color);
                const matchesSize = sizes.length === 0 || product.size.some((size) => sizes.includes(size));
        
                return matchesColor && matchesSize; // Only include products that match both criteria
            });
        },        
        filterBySortChange: (state, action: PayloadAction<string>) => {
            const sortType = action.payload;

            if(sortType === 'low-to-high') {
                state.filteredProducts = [...state.filteredProducts].sort(
                    (a, b) => a.price - b.price
                );
            }
            else if(sortType === 'high-to-low') {
                state.filteredProducts = [...state.filteredProducts].sort(
                    (a, b) => b.price - a.price
                );
            }
            else if(sortType === 'newest') {
                state.filteredProducts = [...state.filteredProducts].sort(
                    (a, b) => b.id - a.id
                );
            }
        },
        toggleFilter: (state) => {
            state.isFilter = !state.isFilter;
        }
    },
});

export const { 
    filterBySearch, 
    filterByGender, 
    filterByColor, 
    filterBySize, 
    filterByColorAndSize, 
    filterBySortChange, 
    toggleFilter 
} = productsSlice.actions;
export default productsSlice.reducer;