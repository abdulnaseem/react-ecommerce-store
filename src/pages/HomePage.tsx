import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import Sort from "../components/Sort";
import { toggleFilter } from "../redux/slices/productsSlice";
import { useMediaQuery } from "react-responsive";

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const filterRef = useRef<HTMLDivElement>(null);

  const filteredProducts = useSelector(
    (state: RootState) => state.products.filteredProducts
  );
  const isFilter = useSelector((state: RootState) => state.products.isFilter);

  const isMobile = useMediaQuery({ maxWidth: "640px" });

  const handleToggleFilter = () => dispatch(toggleFilter());

  // Close filter when clicking outside
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       filterRef.current &&
  //       !filterRef.current.contains(event.target as Node) &&
  //       isFilter
  //     ) {
  //       dispatch(toggleFilter());
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [dispatch, isFilter]);

  return (
    <div className="flex flex-row w-full justify-center">
      <div className="sticky top-0 h-screen">
        {/* Filters Component */}
        <Filters ref={filterRef} isVisible={isFilter} toggleFilter={handleToggleFilter} />
      </div>

      <div className="flex flex-col justify-center overflow-y-auto w-full">
        <Sort />
        <div className={`product-grid grid grid-cols-2 xl:grid-cols-3 gap-4 place-items-center ${isMobile ? "" : "ms-8"}`}>
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
    </div>

  );
};

export default HomePage;