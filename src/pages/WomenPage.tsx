import React from "react";
import { RootState } from "../redux/store";
import ProductPage from "./ProductPage";

const WomenPage: React.FC = () => {
  const filteredWomen = (state: RootState) => state.products.filteredWomen;

  return <ProductPage productSelector={filteredWomen} title="Women's Products" />;
};

export default WomenPage;
