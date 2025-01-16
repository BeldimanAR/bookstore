import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import { BooksProvider } from './context/BookContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <BooksProvider>
         <CartProvider>
        <App />
      </CartProvider>
      </BooksProvider>
    </UserProvider>
  </React.StrictMode>
);
