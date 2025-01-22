"use client"
import { NewStockButton } from "@/components/NewStockButton"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { addNewProductSchema } from "@/schemas/addNewProductSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon, Info, Plus } from "lucide-react"
import { useState } from "react"
import type { UseFormReturn } from "react-hook-form"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form } from "../../ui/form"
import { Sheet, SheetClose, SheetContent, SheetTitle } from "../../ui/sheet"

/* 
* Refactor This component in the future !!!!!!!
*/

type ProductsFormType = z.infer<typeof addNewProductSchema>

const ProductsForm = () => {
  const [open, setOpen] = useState(false)

  const form = useForm<ProductsFormType>({
    resolver: zodResolver(addNewProductSchema),
    defaultValues: {

    },
  })

  const handleOpenForm = () => {
    setOpen(prev => !prev)
    if (!open) {
      form.reset()
    }
  }

  const handleOnSubmit = async () => { }

  return (
    <>
      <NewStockButton onClick={handleOpenForm} className="gap-2">
        Adicionar Produto
        <Plus size="18" />
      </NewStockButton>
      <Sheet
        open={open}
        onOpenChange={handleOpenForm}
      >
        <SheetContent className="bg-[#161716] min-w-[900px]" aria-describedby="products-form" aria-description="formulario de criação de produtos">
          <SheetTitle className="sr-only">Criar novo produto</SheetTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleOnSubmit)} className="space-y-6 flex flex-col justify-between min-h-full">
              <div className="mt-12 space-y-6 overflow-y-auto">
                <StockFormInputs form={form} />
              </div>
              <div className="flex gap-4">
                <SheetClose asChild>
                  <Button variant="outline" className="w-full bg-transparent text-md font-bold h-10">Cancelar</Button>
                </SheetClose>
                <Button type="submit" variant="secondary" className="w-full h-10 text-background text-md font-bold">Criar</Button>
              </div>
            </form>
          </Form>
        </SheetContent>
      </Sheet>
    </>
  )
}

interface ProductsFormInputsProps {
  form: UseFormReturn<ProductsFormType, unknown, undefined>
}

const StockFormInputs = ({ form }: ProductsFormInputsProps) => {
  return (
    <div className="flex gap-4 p-2">
      <div className="flex flex-col w-full space-y-8">
        <FormField
          control={form.control}
          name="product"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl">Produto</FormLabel>
              <FormControl>
                <Input placeholder="Nome do produto" {...field} className="h-12" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl">Quantidade</FormLabel>
              <FormControl>
                <Input placeholder="Ex: 2400" {...field} className="h-12" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tag"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-2xl flex gap-2 items-center">
                Tag
              </FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Selecione uma tag" className="h-12" />
                  </SelectTrigger>
                  <SelectContent>
                    {
                      ["Aliementos Secos", "Bebidas", "Limpeza", "Higiene", "Alimentos Refrigerados"].map(tag => (
                        <SelectItem key={tag} value={tag} className="h-12">{tag}</SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="expirationDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-2xl flex gap-2 items-center">
                Data de validade
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal h-12",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Escolha uma data</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date()
                    }
                    className="h-12"
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="flex flex-col w-full space-y-8">
        <FormField
          control={form.control}
          name="productCode"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-2xl flex gap-2 items-center">
                Código do produto
              </FormLabel>
              <FormControl>
                <Input placeholder="Ex: PCB-001" {...field} className="h-12" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="barCode"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-2xl flex gap-2 items-center">
                Código de barra
              </FormLabel>
              <FormControl>
                <Input placeholder="Ex: 1000001" {...field} className="h-12" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="unitPrice"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-2xl flex gap-2 items-center">
                Valor unitário
              </FormLabel>
              <FormControl>
                <Input placeholder="Ex: R$ 24,00" {...field} className="h-12" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="classification"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-2xl flex gap-2 items-center">
                Classificação
                <Tooltip>
                  <TooltipTrigger>
                    <Info width={22} className="hover:cursor-default" />
                  </TooltipTrigger>
                  <TooltipContent className="p-2">
                    <p className="py-2 text-base">A - Baixo volume de consumo.</p>
                    <p className="py-2 text-base">B - Consumo Moderado</p>
                    <p className="py-2 text-base">C - Alto volume de consumo</p>
                  </TooltipContent>
                </Tooltip>
              </FormLabel>
              <FormControl>
                <ToggleGroup type="single" {...field} className="w-full flex justify-start space-x-4">
                  <ToggleGroupItem value="A">A</ToggleGroupItem>
                  <ToggleGroupItem value="B">B</ToggleGroupItem>
                  <ToggleGroupItem value="C">C</ToggleGroupItem>
                </ToggleGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  )
}

export {
  ProductsForm
}

