import { createContext } from 'react';

const AppContext = createContext({
  user: null,
  isAuthenticated: false,
  setUser: {},
});

export default AppContext;
