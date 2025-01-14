// Define a single product's structure
export interface Product {
    id: number; // Unique identifier for the product
    name: string; // Product name
    description: string; // Product description
    price: number; // Product price
    image: string; // URL to the product's image
    category: "men" | "women" | "kids"; // Category of the product
    color: string; // Product color
    size: string[]; // Available sizes (e.g., ["S", "M", "L", "XL"])
    stock: number; // Available stock count
}
  
// Define the state structure for products in Redux
export interface ProductsState {
    allProducts: Product[]; // List of all products
    filteredProducts: Product[]; // List of filtered products after applying filters
    toggleFilters: boolean
}
  