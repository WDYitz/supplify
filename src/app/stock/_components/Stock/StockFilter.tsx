"use client"
import { FilterButton } from "@/app/stock/_components/FilterButton";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFilter } from "@/hooks/useFilter";
import { searchProductsSchema } from "@/schemas/searchProductsSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search, X } from "lucide-react";
import type { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

export type SearchProductsFormType = z.infer<typeof searchProductsSchema>

const StockFilter = () => {
  const { state, handleSearch, handleSearchValueChange, clearFilters } = useFilter();

  const form = useForm<SearchProductsFormType>({
    resolver: zodResolver(searchProductsSchema),
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    handleSearchValueChange(event.target.value)
  }

  return (
    <div className="w-full flex">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSearch)} className="flex items-center min-h-full gap-8">
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
                      onChange={handleChange}
                      value={state.search}
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
            <Button variant="outline" className="tracking-wide flex items-center justify-between gap-2" onClick={clearFilters}>
              <X size="15" />
              Limpar filtros
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
export default StockFilter;