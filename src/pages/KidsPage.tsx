import React from "react";
import { RootState } from "../redux/store";
import ProductPage from "./ProductPage";

const KidsPage: React.FC = () => {
  const filteredKids = (state: RootState) => state.products.filteredKids;

  return <ProductPage productSelector={filteredKids} title="Kids' Products" />;
};

export default KidsPage;
