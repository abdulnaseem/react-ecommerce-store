import React from 'react';
import { useRoutes } from "react-router-dom";
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductDetails';
import CartPage from '../pages/Cart';
import MenPage from '../pages/MenPage';
import WomenPage from '../pages/WomenPage';
import KidsPage from '../pages/KidsPage';
import Checkout from '../pages/Checkout';
import Payment from '../pages/Payment';
import Invoice from '../pages/Invoice';

const RoutesComponent: React.FC = () => {
  // Define your routes
  const routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/product/:id', element: <ProductPage /> },
    { path: '/men', element: <MenPage /> },
    { path: '/women', element: <WomenPage /> },
    { path: '/kids', element: <KidsPage /> },
    { path: '/cart', element: <CartPage /> },
    { path: '/cart/checkout', element: <Checkout /> },
    { path: '/cart/checkout/payment', element: <Payment /> },
    { path: '/cart/checkout/payment/invoice', element: <Invoice /> }
  ]);

  return routes;
};

export default RoutesComponent;
