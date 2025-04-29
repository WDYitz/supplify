export type InitialFilterStateType = {
  search: string;
  min_price: number;
  max_price: number;
  min_qtd: number;
  max_qtd: number;
  classification: { A: boolean; B: boolean; C: boolean };
}

export const initialFilterState: InitialFilterStateType = {
  search: "",
  min_price: 0,
  max_price: 1240,
  min_qtd: 0,
  max_qtd: 250,
  classification: { A: false, B: false, C: false }
}

interface FilterAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}

export const filterReducer = (state: InitialFilterStateType, action: FilterAction) => {
  switch (action.type) {
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    case "SET_PRICE":
      return { ...state, min_price: action.payload.min_price, max_price: action.payload.max_price };
    case "SET_QTD":
      return { ...state, min_qtd: action.payload.min_qtd, max_qtd: action.payload.max_qtd };
    case "SET_CLASSIFICATION":
      return { ...state, classification: { ...state.classification, [action.payload.key]: action.payload.value } };
    default:
      return state;
  }
};

