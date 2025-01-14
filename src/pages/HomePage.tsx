import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import Sort from "../components/Sort";
import { toggleFilter } from "../redux/slices/productsSlice";

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const filterRef = useRef<HTMLDivElement>(null);

  const filteredProducts = useSelector(
    (state: RootState) => state.products.filteredProducts
  );
  const isFilter = useSelector((state: RootState) => state.products.toggleFilters);

  // Close filter when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node) &&
        isFilter
      ) {
        dispatch(toggleFilter());
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch, isFilter]);

  return (
    <div>
      <header>
        <h1 className="text-red-600">Welcome to our E-Commerce Store</h1>
      </header>
      <SearchBar />
      <Filters ref={filterRef} isVisible={isFilter} />
      <Sort />
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
    </div>
  );
};

export default HomePage;