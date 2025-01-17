import React from 'react';
import { useRoutes } from "react-router-dom";
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductDetails';
import CartPage from '../pages/Cart';
import Men from '../pages/Men';
import Women from '../pages/Women';
import Kids from '../pages/Kids';

const RoutesComponent: React.FC = () => {
  // Define your routes
  const routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/product/:id', element: <ProductPage /> },
    { path: '/cart', element: <CartPage /> },
    { path: '/men', element: <Men /> },
    { path: '/women', element: <Women /> },
    { path: '/kids', element: <Kids /> },
  ]);

  return routes;
};

export default RoutesComponent;
