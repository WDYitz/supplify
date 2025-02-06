"use client"
import { usePathname, useRouter } from "next/navigation";
import { createContext, useState, type ChangeEvent, type PropsWithChildren } from "react";

type FilterClassificationType = {
  A?: boolean,
  B?: boolean,
  C?: boolean
}

interface IFilterContext {
  unitValue: number[]
  setUnitValue: (value: number[]) => void
  qtdValue: number[]
  setQtdValue: (value: number[]) => void
  search: string
  handleSearch: () => void
  handleSearchValueChange: (e: ChangeEvent<HTMLInputElement>) => void
  clearFilters: () => void
  classification: FilterClassificationType
  setClassification: (value: FilterClassificationType) => void
  MIN_PRICE: number
  MAX_PRICE: number
  MIN_QTD: number
  MAX_QTD: number
}

export const FilterContext = createContext<IFilterContext>({} as IFilterContext);

export const FilterProvider = ({ children }: PropsWithChildren) => {
  const MIN_PRICE = 0;
  const MAX_PRICE = 1240;
  const MIN_QTD = 0;
  const MAX_QTD = 250;
  const [unitValue, setUnitValue] = useState([MIN_PRICE, MAX_PRICE]);
  const [qtdValue, setQtdValue] = useState([MIN_QTD, MAX_QTD]);
  const [search, setSearch] = useState<string>("");
  const [classification, setClassification] = useState<FilterClassificationType>({ A: false, B: false, C: false });
  const pathName = usePathname();
  const router = useRouter();

  const handleSearch = () => {
    if (search.length > 0) {
      return router.push(`${pathName}/?search=${search}&min-price=${unitValue[0]}&max-price=${unitValue[1]}&min-qtd=${qtdValue[0]}&max-qtd=${qtdValue[1]}&classification=${Object.keys(classification).filter((key) => classification[key as keyof FilterClassificationType]).join(",")}`)
    }
    return router.push(`${pathName}/?min-price=${unitValue[0]}&max-price=${unitValue[1]}&min-qtd=${qtdValue[0]}&max-qtd=${qtdValue[1]}&classification=${Object.keys(classification).filter((key) => classification[key as keyof FilterClassificationType]).join(",")}`)
  }

  const handleSearchValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const clearFilters = () => {
    router.push(pathName);
    setUnitValue([MIN_PRICE, MAX_PRICE]);
    setQtdValue([MIN_QTD, MAX_QTD]);
    setSearch("");
    setClassification({ A: false, B: false, C: false });
  }

  return (
    <FilterContext.Provider value={{
      unitValue,
      setUnitValue,
      qtdValue,
      setQtdValue,
      search,
      handleSearch,
      MIN_PRICE,
      MAX_PRICE,
      MIN_QTD,
      MAX_QTD,
      handleSearchValueChange,
      clearFilters,
      setClassification,
      classification
    }}>
      {children}
    </FilterContext.Provider>
  )
}