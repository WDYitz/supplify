"use client"
import { filterReducer, initialFilterState, type InitialFilterStateType } from "@/reducers/filterReducer";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useReducer, type PropsWithChildren } from "react";

/* _________________________
/ | REFACTOR FILTER CONTEXT |
/ |_________________________|
*/

type FilterClassificationType = {
  A?: boolean,
  B?: boolean,
  C?: boolean
}

interface IFilterContext {
  state: InitialFilterStateType;
  handleSearch: () => void;
  handleSearchValueChange: (payload: string) => void;
  handleQtdValueChange: (value: number[]) => void;
  // handleClassificationValueChange: (key: keyof FilterClassificationType, value: boolean) => void;
  clearFilters: () => void;
}

export const FilterContext = createContext<IFilterContext>({} as IFilterContext);

export const FilterProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(
    filterReducer,
    initialFilterState
  );

  const pathName = usePathname();
  const router = useRouter();

  const handleSearch = () => {
    if (state.search.length > 0) {
      return router.push(`${pathName}/?search=${state.search}`)
    }
    if (state.min_price !== initialFilterState.min_price || state.max_price !== initialFilterState.max_price) {
      return router.push(`${pathName}?price=${state.min_price},${state.max_price}`)
    }
    if (state.min_qtd !== initialFilterState.min_qtd || state.max_qtd !== initialFilterState.max_qtd) {
      return router.push(`${pathName}&qtd=${state.min_qtd},${state.max_qtd}`)
    }
    if (Object.keys(state.classification).filter((key) => state.classification[key as keyof FilterClassificationType]).length > 0) {
      return router.push(`${pathName}&classification=${Object.keys(state.classification).filter((key) => state.classification[key as keyof FilterClassificationType]).join(",")}`)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearchValueChange = (payload: string) => {
    dispatch({
      type: "SET_SEARCH",
      payload: payload
    })
  }

  const handleQtdValueChange = (value: number[]) => {
    return dispatch({
      type: "SET_QTD",
      payload: {
        min_qtd: value[0],
        max_qtd: value[1]
      }
    })
  }

  const clearFilters = () => {
    if (state.search.length > 0) {
      dispatch({
        type: "SET_SEARCH",
        payload: initialFilterState.search
      })
      return router.push(pathName)
    }
    if (state.min_price === initialFilterState.min_price || state.max_price === initialFilterState.max_price) {
      dispatch({
        type: "SET_PRICE",
        payload: {
          min_price: initialFilterState.min_price,
          max_price: initialFilterState.max_price
        }
      })
      return router.push(pathName)
    }
    if (state.min_qtd !== initialFilterState.min_qtd || state.max_qtd !== initialFilterState.max_qtd) {
      dispatch({
        type: "SET_QTD",
        payload: {
          min_qtd: initialFilterState.min_qtd,
          max_qtd: initialFilterState.max_qtd
        }
      })
    }
    if (Object.keys(state.classification).filter((key) => state.classification[key as keyof FilterClassificationType]).length > 0) {
      dispatch({
        type: "SET_CLASSIFICATION",
        payload: {
          key: Object.keys(state.classification)[0],
          value: false
        }
      })
    }
    router.push(pathName);
  }

  return (
    <FilterContext.Provider value={{
      state,
      handleSearch,
      handleSearchValueChange,
      handleQtdValueChange,
      clearFilters,
    }}>
      {children}
    </FilterContext.Provider>
  )
}