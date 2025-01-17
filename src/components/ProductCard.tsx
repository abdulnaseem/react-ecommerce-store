import React from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
    id: number;
    name: string;
    price: number;
    image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image }) => {
    return (
        <Link to={`/product/${id}`} className="product-card w-[200px] md:w-[250px] lg:w-[300px] text-center">
            <img src={`./${image}`} alt={name} />
            <h3>{name}</h3>
            <p>£{price}</p>
        </Link>
    )
}

export default ProductCard;