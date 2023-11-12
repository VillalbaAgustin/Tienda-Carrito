import { createContext, useState } from "react";

// 1. Creamos el contexto
export const FiltersContext = createContext();

// 2. Creamos el Provider, para proveer el contexto
export function FiltersProviders({ children }) {
  const [filters, setFilters] = useState({ category: "all", minPrice: 0 })
  return (
    <FiltersContext.Provider value={{filters, setFilters}}>
      {children}
    </FiltersContext.Provider>
  );
}
