import { createContext } from "react";


export const ShopContext = createContext();

const shopContextProvider = ({ children }) => {
  const value = {

  }

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  )
}

export default shopContextProvider;