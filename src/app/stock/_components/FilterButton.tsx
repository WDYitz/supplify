"use client";
import { ProductFilterForm } from "@/components/Forms/ProductFilter";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Filter } from "lucide-react";

export const FilterButton = () => {

  const onFilterChange = () => {}

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="h-12 relative">
          <Filter className="text-[#1b1b1b9f]" size="18" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[300px] h-[100%] p-4"
        aria-describedby="filter-dropdown"
        aria-description="dropdown de filtragem de dados"
        align="start"
      >
        <div className="flex flex-col justify-between h-full">
          <ProductFilterForm />
          <Button
            variant="default"
            className="w-full bg-indigo-500"
            onClick={onFilterChange}
          >
            Aplicar
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default FilterButton;
