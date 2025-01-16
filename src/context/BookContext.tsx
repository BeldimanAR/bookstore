import React, { createContext, useState, ReactNode } from 'react';
import { mockData } from '../data/mockData';
import { Book } from '../types/book';

interface BooksContextProps {
  books: Book[];
  updateBooks: (updatedBooks: Book[]) => void;
}

export const BooksContext = createContext<BooksContextProps>({
  books: [],
  updateBooks: () => {},
});

export const BooksProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  const [books, setBooks] = useState<Book[]>(mockData)

  const updateBooks = (updatedBooks: Book[]) => {
    setBooks(updatedBooks);
  };

  return (
    <BooksContext.Provider value={{ books, updateBooks }}>
      {children}
    </BooksContext.Provider>
  );
};
