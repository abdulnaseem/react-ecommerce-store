import React from "react";
import { RootState } from "../redux/store";
import ProductPage from "./ProductPage";

const MensPage: React.FC = () => {
  const filteredMen = (state: RootState) => state.products.filteredMen;

  return <ProductPage productSelector={filteredMen} title="Men's Products" />;
};

export default MensPage;
