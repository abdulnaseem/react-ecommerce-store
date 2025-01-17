import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { RootState } from "../redux/store";


const Kids: React.FC = () => {

    const filteredProducts = useSelector(
        (state: RootState) => state.products.filteredProducts
    );

    return (
        <>
            <div className="product-grid flex flex-wrap justify-center">
                {filteredProducts.map((product) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                />
                ))}
            </div>
        </>
    )
}

export default Kids;