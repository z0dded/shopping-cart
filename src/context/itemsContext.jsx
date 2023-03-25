import { createContext, useContext, useState, useEffect } from "react";
import shoppingItemsJson from "../data/shoppingItems.json";

const ItemsContext = createContext();

export function ItemsContextProvider({ children }) {
  const shoppingItems = shoppingItemsJson.products.data.items;

  return (
    <ItemsContext.Provider value={{ shoppingItems }}>
      {children}
    </ItemsContext.Provider>
  );
}

export function useItems() {
  const context = useContext(ItemsContext);
  return context;
}
