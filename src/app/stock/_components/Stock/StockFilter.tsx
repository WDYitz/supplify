"use client"
import { FilterButton } from "@/components/FilterButton";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/useDebounce";
import { searchProductsSchema } from "@/schemas/searchProductsSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState, type ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

type SearchProductsFormType = z.infer<typeof searchProductsSchema>

const StockFilter = () => {
  const [search, setSearch] = useState("")
  // const debouncedSearch = useDebounce({ value: search, delay: 1000 })
  const pathName = usePathname()
  const router = useRouter()

  const form = useForm<SearchProductsFormType>({
    resolver: zodResolver(searchProductsSchema),
  })

  const handleOnSubmit = ({ search }: SearchProductsFormType) => {
    if (search) {
      router.push(`${pathName}/?s=${search}`)
    } else {
      router.push(pathName)
    }
  }

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className="w-full flex">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleOnSubmit)} className="flex items-center min-h-full gap-8">
          <div className="flex items-center space-x-2">
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Ex: Nome do produto, código do produto..." {...field} className="h-12 w-[260px]" onChange={() => handleValueChange} value={search} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant="secondary" className="h-12">
              <Search className="text-[#1b1b1b9f]" size="18" />
            </Button>
          </div>
          <FilterButton />
        </form>
      </Form>
    </div>
  )
}
export default StockFilter;