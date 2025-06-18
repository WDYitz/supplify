"use client";
import { FilterButton } from "@/app/stock/_components/FilterButton";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useSearchFilter from "@/hooks/useSearchFilter";
import { searchProductsSchema } from "@/schemas/searchProductsSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search, X } from "lucide-react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

export type SearchProductsFormType = z.infer<typeof searchProductsSchema>;

const StockFilter = () => {
  // const { clearFilters } = useFilter();
  const { onSearch, onFilterClear} = useSearchFilter();

  const form = useForm<SearchProductsFormType>({
    resolver: zodResolver(searchProductsSchema),
  });

  const onSubmit = () => {
    // Make backend request using the Query Params from the URL 
    console.log("Form submitted");
  };

  return (
    <div className="w-full flex flex-col">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-center min-h-full gap-8"
        >
          <div className="flex items-center space-x-2">
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Ex: Nome do produto, código do produto..."
                      {...field}
                      className="h-12 w-[260px]"
                      onChange={(e) => onSearch(e)}
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant="secondary" className="h-12">
              <Search className="text-[#1b1b1b9f]" size="18" />
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <FilterButton />
            <Button
              variant="outline"
              className="tracking-wide flex items-center justify-between gap-2"
              onClick={onFilterClear}
            >
              <X size="15" />
              Limpar filtros
            </Button>
          </div>
        </form>
      </Form>
      <p className="mb-4">Filtragem aplicada: </p>
    </div>
  );
};
export default StockFilter;
