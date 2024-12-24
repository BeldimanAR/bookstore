import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import UserProfilePage from './pages/UserProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import { CartSidebar } from './components/CartSidebar/CartSidebar';

const App: React.FC = () => {
  return (
    <Router>
   
      <div className="grid grid-rows-auto lg:grid-rows-1 lg:grid-cols-[16rem_1fr_20rem] min-h-screen">
        <nav className="bg-blue-600 text-white p-4">
          <ul className="space-y-4">
            <li>
              <Link to="/" className="font-semibold hover:underline">
                Books
              </Link>
            </li>
            <li>
              <Link to="/profile" className="font-semibold hover:underline">
                User Profile
              </Link>
            </li>
          </ul>
        </nav>

        <div className="p-4">
          <Routes>
            <Route path="/" element={<BooksPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>

        <CartSidebar />
      </div>
    </Router>
  );
};

export default App;
