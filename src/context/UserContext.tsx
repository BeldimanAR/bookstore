import React, { createContext, useState, ReactNode } from 'react';
import { User } from '../types/user';

interface UserContextProps {
  user: User;
  updateUser: (updatedUser: User) => void;
}

export const UserContext = createContext<UserContextProps>({
  user: { firstName: '', lastName: '', email: '' },
  updateUser: () => {},
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
  });

  const updateUser = (updatedUser: User) => {
    setUser(updatedUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
