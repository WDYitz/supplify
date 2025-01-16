"use client"
import { NewStockButton } from "@/components/NewStockButton"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { addNewStockSchema } from "@/schemas/addNewStockSchema"
import { AddNewStockTagSchema } from "@/schemas/AddNewStockTagSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Plus } from "lucide-react"
import React, { useState } from "react"
import type { UseFormReturn } from "react-hook-form"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form } from "../../ui/form"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../../ui/sheet"

// REFACTOR COMPONENT

type StockFormType = z.infer<typeof addNewStockSchema>

const StockForm = () => {
  const [open, setOpen] = useState(false)

  const form = useForm<StockFormType>({
    resolver: zodResolver(addNewStockSchema),
    defaultValues: {
      title: "",
      description: "",
      tags: []
    },
  })

  const handleFormReset = () => {
    setOpen(prev => !prev)
    if (!open) {
      form.reset()
    }
  }

  const handleOnSubmit = async () => { }

  return (
    <>
      <NewStockButton onClick={() => setOpen(prev => !prev)} icon={<Plus />} />
      <Sheet
        open={open}
        onOpenChange={handleFormReset}
      >
        <SheetHeader>

        </SheetHeader>
        <SheetTrigger></SheetTrigger>
        <SheetContent className="bg-[#161716]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleOnSubmit)} className="space-y-6">
              <StockFormInputs form={form} />
              <StockFormActions onClick={() => handleFormReset} />
            </form>
          </Form>
        </SheetContent>
      </Sheet>
    </>
  )
}

const StockFormActions = React.forwardRef<
  HTMLButtonElement, React.HTMLAttributes<HTMLButtonElement>
>(({ ...props }, ref) => {
  return (
    <div className="flex gap-4">
      <Button variant="outline" className="w-full h-12 bg-transparent text-md font-bold" ref={ref} {...props} type="button">Cancelar</Button>
      <Button type="submit" variant="secondary" className="w-full h-12 text-background text-md font-bold">Criar Estoque</Button>
    </div>
  )
})
StockFormActions.displayName = "StockFormActions"


type StockFormCreateTagType = z.infer<typeof AddNewStockTagSchema>

const StockFormCreateTag = React.forwardRef<
  StockFormCreateTagType, React.HTMLAttributes<HTMLButtonElement>
>(({ ...props }) => {
  const [open, setOpen] = useState(false)

  const form = useForm<StockFormCreateTagType>({
    resolver: zodResolver(AddNewStockTagSchema),
    defaultValues: {
      name: "",
    },
  })

  const handleOnSubmit = async () => { }

  const handleOpenDialog = () => {
    setOpen(prev => !prev)
  }

  return (
    <>
      <Button variant="dashed" className="h-14" onClick={handleOpenDialog} {...props}>
        <Plus size={16} />
      </Button>
      <Dialog open={open} onOpenChange={handleOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Criar Tags</DialogTitle>
            <DialogDescription>
              Crie uma ou mais tags para o seu estoque
            </DialogDescription>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleOnSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-2xl">Tag</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: Alimentos Refrigerados, Alimentos Secos" {...field} className="h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button variant="secondary" className="secondary text-background" type="submit">Criar Tag</Button>
              </form>
            </Form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
})
StockFormCreateTag.displayName = "StockFormCreateTag"


interface StockFormInputsProps {
  form: UseFormReturn<StockFormType, unknown, undefined>
}

const StockFormInputs = ({ form }: StockFormInputsProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-2xl">Titulo</FormLabel>
            <FormControl>
              <Input placeholder="Ex: Alimentos" {...field} className="h-12" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-2xl">Descrição</FormLabel>
            <FormControl>
              <Textarea placeholder="Ex: Armazenamento de alimentos não pereciveis como milho, macarrão, soja..." {...field} className="h-12 px-4" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="tags"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel className="text-2xl">Tags</FormLabel>
            <FormControl>
              <StockFormCreateTag {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}

export {
  StockForm
}
