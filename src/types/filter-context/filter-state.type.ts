import type { FilterClassificationType } from "./filter-classification.type";
import type { ValueType } from "./value.type";

export type FilterStateType = {
  search: string;
  price: ValueType<number>
  qtd: ValueType<number>
  classification: FilterClassificationType;
}