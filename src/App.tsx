import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesComponent from './components/RoutesComponent'; // Component where useRoutes is used
import Header from './components/main-navigation/Header';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <RoutesComponent />
    </BrowserRouter>
  );
};

export default App;
