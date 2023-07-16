import React from 'react';

const UserContext = React.createContext({
  username: null,
  setUsername: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {}
});

export { UserContext };
