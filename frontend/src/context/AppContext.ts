import { createContext } from 'react';

const AppContext = createContext({
  user: null,
  isAuthenticated: false,
  setUser: {},
});
// const AppContext = createContext({ user: null });

export default AppContext;
