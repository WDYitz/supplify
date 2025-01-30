import { FilterContext } from "@/contexts/filterContext";
import { useContext } from "react";

export const useFilter = () => {
  const filter = useContext(FilterContext);

  if (!filter) {
    throw new Error("useFilter must be used within a FilterProvider");
  }

  return filter;
}