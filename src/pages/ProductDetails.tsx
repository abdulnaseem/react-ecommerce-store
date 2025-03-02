import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState } from "../redux/store";
import { addToCart } from "../redux/slices/cartSlice";


const ProductDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const product = useSelector((state: RootState) => 
        state.products.allProducts.find((p) => p.id === Number(id))
    );

    const dispatch = useDispatch();

    if(!product) {
        return <div>Product not found.</div>;
    }

    const handleAddToCart = () => {
        dispatch(addToCart({     
          id: product.id,
          name: product.name,
          image: product.image,
          description: product.description,
          price: product.price,
          quantity: 1,
        }));
    }

    console.log(product);

    return (
        // <div className="product-details flex justify-evenly items-center h-[90vh]">
        //     <div className="product-details-image w-[600px]">
        //         <img src={`/${product.image}`} alt={product.name} />
        //     </div>
        //     <div className="product-detail-info">
        //         <h1>{product.name}</h1>
        //         <p>{product.category}</p>
        //         <p>Color: {product.color}</p>
        //         <p>Size: {product.size}</p>
        //         <p>Price: £{product.price.toFixed(2)}</p>
        //         <button onClick={handleAddToCart}>Add to Cart</button>
        //     </div>
        // </div>
        <div className="bg-gray-100 min-h-screen p-6 flex h-[90vh] items-center">
        {/* Main Container */}
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8 lg:mt-[-80px]">
          {/* Left Section: Product Image */}
          <div className="flex items-center justify-center">
            <img
              src={product.image}
              alt="Product"
              className="rounded-lg shadow-md"
            />
          </div>
  
          {/* Right Section: Product Info */}
          <div className="flex flex-col space-y-4">
            {/* Product Title */}
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
  
            {/* Product Price */}
            <p className="text-xl text-green-600 font-semibold">£{product.price.toFixed(2)}</p>
  
            {/* Product Description */}
            <p className="text-gray-600 leading-relaxed">
              This is a detailed description of the product. It highlights all the
              features, benefits, and reasons why this product is worth purchasing.
              Use this space to sell your product with engaging copy.
            </p>
  
            {/* Ratings */}
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-500">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>☆</span>
              </div>
              <span className="text-sm text-gray-500">(123 reviews)</span>
            </div>
  
            {/* Quantity Selector and Add to Cart */}
            <div className="flex items-center space-x-4">
              {/* Add to Cart Button */}
              <Link to="/cart" className="bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-900"
                      onClick={handleAddToCart}>
                Add to Cart
              </Link>
            </div>
  
            {/* Additional Details */}
            <div className="pt-4 border-t border-gray-300">
              <p className="text-sm text-gray-500">
                SKU: <span className="font-medium">{product.id}</span>
              </p>
              <p className="text-sm text-gray-500">
                Category: <span className="font-medium">{product.category}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProductDetails;