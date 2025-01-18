import React from 'react';
import { useRoutes } from "react-router-dom";
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductDetails';
import CartPage from '../pages/Cart';
import MenPage from '../pages/MenPage';
import WomenPage from '../pages/WomenPage';
import KidsPage from '../pages/KidsPage';

const RoutesComponent: React.FC = () => {
  // Define your routes
  const routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/product/:id', element: <ProductPage /> },
    { path: '/cart', element: <CartPage /> },
    { path: '/men', element: <MenPage /> },
    { path: '/women', element: <WomenPage /> },
    { path: '/kids', element: <KidsPage /> },
  ]);

  return routes;
};

export default RoutesComponent;
