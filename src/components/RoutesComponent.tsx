import React from 'react';
import { useRoutes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductDetails';
import CartPage from '../pages/Cart';

const RoutesComponent: React.FC = () => {
  // Define your routes
  const routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/product/:id', element: <ProductPage /> },
    { path: '/cart', element: <CartPage /> },
  ]);

  return routes;
};

export default RoutesComponent;
