import React from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
    id: number;
    name: string;
    price: number;
    image: string;
    sizes: string[];
    color: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, sizes, color }) => {
    return (
        <Link to={`/product/${id}`} className="product-card w-[200px] md:w-[250px] lg:w-[300px]">
            <img src={`./${image}`} alt={name} />
            <h3>{name}</h3>
            <p>£{price}</p>
            <div className="flex gap-2 mt-2">
                {
                    sizes.map((size) => {
                        return <p className="bg-gray-300 p-1 text-xs ps-2 pe-2 rounded-md">{size}</p>
                    })
                }
            </div>
            <div
              className="w-[15px] h-[15px] rounded-[50%] mt-2 border"
              style={{ backgroundColor: color }}
            ></div>
        </Link>
    )
}

export default ProductCard;