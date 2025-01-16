import React, { useState, useEffect, useContext } from 'react';
import { Book } from '../types/book';
import { CartContext } from '../context/CartContext';
import { BooksContext } from '../context/BookContext';

const BooksPage: React.FC = () => {
  const { addToCart } = useContext(CartContext);
  const { books } = useContext(BooksContext); 
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(books);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredBooks(books);
    } else {
      const lower = searchTerm.toLowerCase();
      setFilteredBooks(
        books.filter(
          (book) =>
            book.title.toLowerCase().includes(lower) ||
            book.author.toLowerCase().includes(lower)
        )
      );
    }
  }, [searchTerm, books]);

  const handleAddToCart = (book: Book) => {
    addToCart(book);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-2">Books Page</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded shadow p-4 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-sm text-gray-600 mb-1">Author: {book.author}</p>
              <p className="text-sm mb-1">Price: ${book.price.toFixed(2)}</p>
              <p className="text-sm">In Stock: {book.stock}</p>
            </div>
            <button
              onClick={() => handleAddToCart(book)}
              className="mt-4 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700 w-fit"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
