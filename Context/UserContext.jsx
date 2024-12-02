import React, { createContext, useState } from 'react';

// Create UserContext
export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  // State to store the logged-in user (initially null)
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
