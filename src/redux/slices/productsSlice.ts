import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsState, Product } from "../../types/product";
import { men, women, kids } from "../../data/products";

const initialState: ProductsState = {
    allProducts: [...men, ...women, ...kids],
    filteredProducts: [...men, ...women, ...kids],
    menProducts: men,
    filteredMen: men,
    womenProducts: women,
    filteredWomen: women, 
    kidsProducts: kids, 
    filteredKids: kids,
    isFilter: false,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        filterBySearch: (state, action: PayloadAction<string>) => {
            const query = action.payload.toLowerCase();
            
            // Filter all products based on search query
            state.filteredProducts = state.allProducts.filter((product) =>
                product.name.toLowerCase().includes(query)
            );
            
            // Apply search filter to gender-specific filtered arrays
            if (state.filteredMen.length) {
                state.filteredMen = state.menProducts.filter((product) =>
                    product.name.toLowerCase().includes(query)
                );
            }
            if (state.filteredWomen.length) {
                state.filteredWomen = state.womenProducts.filter((product) =>
                    product.name.toLowerCase().includes(query)
                );
            }
            if (state.filteredKids.length) {
                state.filteredKids = state.kidsProducts.filter((product) =>
                    product.name.toLowerCase().includes(query)
                );
            }
        },
        filterByGender: (state, action: PayloadAction<string>) => {
            const gender = action.payload;

            if (!gender) {
                // Reset filters to all products
                state.filteredProducts = state.allProducts;
                state.filteredMen = state.menProducts;
                state.filteredWomen = state.womenProducts;
                state.filteredKids = state.kidsProducts;
            } else {
                if (gender === "men") {
                    state.filteredProducts = state.filteredMen;
                } else if (gender === "women") {
                    state.filteredProducts = state.filteredWomen;
                } else if (gender === "kids") {
                    state.filteredProducts = state.filteredKids;
                }
            }
        },
        filterByColor: (state, action: PayloadAction<string[]>) => {
            const selectedColors = action.payload;

            // Apply color filter to all products
            state.filteredProducts = state.allProducts.filter((product) =>
                selectedColors.length === 0 || selectedColors.includes(product.color)
            );

            // Apply color filter to gender-specific filtered arrays
            if (state.filteredMen.length) {
                state.filteredMen = state.menProducts.filter((product) =>
                    selectedColors.length === 0 || selectedColors.includes(product.color)
                );
            }
            if (state.filteredWomen.length) {
                state.filteredWomen = state.womenProducts.filter((product) =>
                    selectedColors.length === 0 || selectedColors.includes(product.color)
                );
            }
            if (state.filteredKids.length) {
                state.filteredKids = state.kidsProducts.filter((product) =>
                    selectedColors.length === 0 || selectedColors.includes(product.color)
                );
            }
        },
        filterBySize: (state, action: PayloadAction<string[]>) => {
            const selectedSizes = action.payload;

            // Apply size filter to all products
            state.filteredProducts = state.allProducts.filter((product) =>
                selectedSizes.length === 0 || product.size.some((size) => selectedSizes.includes(size))
            );

            // Apply size filter to gender-specific filtered arrays
            if (state.filteredMen.length) {
                state.filteredMen = state.menProducts.filter((product) =>
                    selectedSizes.length === 0 || product.size.some((size) => selectedSizes.includes(size))
                );
            }
            if (state.filteredWomen.length) {
                state.filteredWomen = state.womenProducts.filter((product) =>
                    selectedSizes.length === 0 || product.size.some((size) => selectedSizes.includes(size))
                );
            }
            if (state.filteredKids.length) {
                state.filteredKids = state.kidsProducts.filter((product) =>
                    selectedSizes.length === 0 || product.size.some((size) => selectedSizes.includes(size))
                );
            }
        },
        filterByColorAndSize: (state, action: PayloadAction<{ colors: string[]; sizes: string[] }>) => {
            const { colors, sizes } = action.payload;

            // Filter all products by both color and size
            state.filteredProducts = state.allProducts.filter((product) => {
                const matchesColor = colors.length === 0 || colors.includes(product.color);
                const matchesSize = sizes.length === 0 || product.size.some((size) => sizes.includes(size));
                return matchesColor && matchesSize;
            });

            // Apply color and size filter to gender-specific filtered arrays
            if (state.filteredMen.length) {
                state.filteredMen = state.menProducts.filter((product) => {
                    const matchesColor = colors.length === 0 || colors.includes(product.color);
                    const matchesSize = sizes.length === 0 || product.size.some((size) => sizes.includes(size));
                    return matchesColor && matchesSize;
                });
            }
            if (state.filteredWomen.length) {
                state.filteredWomen = state.womenProducts.filter((product) => {
                    const matchesColor = colors.length === 0 || colors.includes(product.color);
                    const matchesSize = sizes.length === 0 || product.size.some((size) => sizes.includes(size));
                    return matchesColor && matchesSize;
                });
            }
            if (state.filteredKids.length) {
                state.filteredKids = state.kidsProducts.filter((product) => {
                    const matchesColor = colors.length === 0 || colors.includes(product.color);
                    const matchesSize = sizes.length === 0 || product.size.some((size) => sizes.includes(size));
                    return matchesColor && matchesSize;
                });
            }
        },
        filterBySortChange: (state, action: PayloadAction<string>) => {
            const sortType = action.payload;

            const sortArray = (products: Product[], order: string) => {
                return [...products].sort((a, b) => {
                    if (order === "low-to-high") return a.price - b.price;
                    if (order === "high-to-low") return b.price - a.price;
                    return b.id - a.id; // for "newest"
                });
            };

            // Apply sorting to all products
            if (sortType) {
                state.filteredProducts = sortArray(state.filteredProducts, sortType);
            }

            // Apply sorting to gender-specific filtered arrays
            if (state.filteredMen.length) {
                state.filteredMen = sortArray(state.filteredMen, sortType);
            }
            if (state.filteredWomen.length) {
                state.filteredWomen = sortArray(state.filteredWomen, sortType);
            }
            if (state.filteredKids.length) {
                state.filteredKids = sortArray(state.filteredKids, sortType);
            }
        },
        toggleFilter: (state) => {
            state.isFilter = !state.isFilter;
        },
    },
});

export const {
    filterBySearch,
    filterByGender,
    filterByColor,
    filterBySize,
    filterByColorAndSize,
    filterBySortChange,
    toggleFilter,
} = productsSlice.actions;

export default productsSlice.reducer;